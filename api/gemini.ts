// Vercel-style serverless function that proxies requests to:
// 1. Google Generative API (if GCP_SA_KEY is set)
// 2. Hugging Face Inference API (if HF_API_KEY is set and no GCP key)
// 3. Mock reply (if LOCAL_FAKE_GEMINI=1)
// Do NOT commit service account keys or API tokens to Git.

interface ApiRequest {
  method: string;
  body?: Record<string, unknown>;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): {
    json(data: Record<string, unknown>): void;
  };
}

export default async function handler(
  req: ApiRequest,
  res: ApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Missing `message` in request body' });

  // LOCAL MOCK: set this var to make the function return a canned reply
  // without calling any external API. Useful for local development and testing.
  if (process.env.LOCAL_FAKE_GEMINI) {
    return res.status(200).json({ ok: true, text: `Mock reply: I received your message: ${message}` });
  }

  const saKey = process.env.GCP_SA_KEY;
  const hfKey = process.env.HF_API_KEY;

  // Try GCP first if available
  if (saKey) {
    return handleGemini(message, saKey, res);
  }
  // Fall back to Hugging Face if available
  if (hfKey) {
    return handleHuggingFace(message, hfKey, res);
  }
  // No API key available
  return res.status(500).json({
    error: 'No AI service configured. Set either GCP_SA_KEY or HF_API_KEY environment variable.',
  });
}

// Handle Google Generative AI (Gemini) via service account
async function handleGemini(
  message: string,
  saKey: string,
  res: ApiResponse
): Promise<void> {
  let credentials: Record<string, unknown>;
  try {
    credentials = typeof saKey === 'string' ? JSON.parse(saKey) : (saKey as Record<string, unknown>);
  } catch (parseErr) {
    return res.status(500).json({ error: 'Invalid GCP_SA_KEY JSON', details: parseErr instanceof Error ? parseErr.message : String(parseErr) });
  }

  try {
    const { GoogleAuth } = await import('google-auth-library');
    const auth = new GoogleAuth({
      credentials: credentials as Record<string, unknown>,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = await auth.getClient();
    const accessTokenResponse = await client.getAccessToken();
    const token = typeof accessTokenResponse === 'string' ? accessTokenResponse : ((accessTokenResponse as Record<string, unknown>)?.token ?? '');

    if (!token) {
      return res.status(500).json({ error: 'Failed to obtain access token from service account' });
    }

    // Choose the model you want to call. Update as needed.
    const model = 'models/text-bison-001:generate';
    const url = `https://generativelanguage.googleapis.com/v1/${model}`;

    const fetchRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: {
          text: message,
        },
        temperature: 0.2,
        maxOutputTokens: 256,
      }),
    });

    const data = (await fetchRes.json()) as Record<string, unknown>;
    let text = '';
    if (Array.isArray(data?.candidates)) {
      const candidates = data.candidates as Array<Record<string, unknown>>;
      text = candidates
        .map((c) => {
          const output = c?.output as Record<string, unknown> | undefined;
          return (output?.text as string) ?? '';
        })
        .join('\n');
    } else if (typeof data?.text === 'string') {
      text = data.text;
    } else {
      text = JSON.stringify(data);
    }

    return res.status(200).json({ ok: true, text });
  } catch (geminiErr: unknown) {
    const errorMsg = geminiErr instanceof Error ? geminiErr.message : String(geminiErr);
    console.error('Gemini proxy error:', errorMsg);
    return res.status(500).json({ error: 'Internal server error', details: errorMsg });
  }
}

// Handle Hugging Face Inference API
async function handleHuggingFace(
  message: string,
  hfKey: string,
  res: ApiResponse
): Promise<void> {
  try {
    // Use a fast, small model suitable for free tier.
    // Options: "meta-llama/Llama-2-7b-chat-hf", "mistralai/Mistral-7B-Instruct-v0.1", etc.
    const model = 'mistralai/Mistral-7B-Instruct-v0.1'; // Fast, free-tier friendly
    const url = `https://api-inference.huggingface.co/models/${model}`;

    const fetchRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${hfKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: message,
        parameters: {
          max_new_tokens: 256,
          temperature: 0.2,
        },
      }),
    });

    if (!fetchRes.ok) {
      const error = await fetchRes.json();
      console.error('HF API error:', error);
      return res.status(fetchRes.status).json({ error: 'Hugging Face API error', details: error });
    }

    const data = (await fetchRes.json()) as Array<Record<string, unknown>>;
    let text = '';
    if (Array.isArray(data) && data.length > 0 && typeof (data[0] as Record<string, unknown>)?.generated_text === 'string') {
      text = (data[0] as Record<string, unknown>)?.generated_text as string;
    } else {
      text = JSON.stringify(data);
    }

    return res.status(200).json({ ok: true, text });
  } catch (hfErr: unknown) {
    const errorMsg = hfErr instanceof Error ? hfErr.message : String(hfErr);
    console.error('Hugging Face proxy error:', errorMsg);
    return res.status(500).json({ error: 'Internal server error', details: errorMsg });
  }
}
