// Minimal Vercel serverless function to check whether required env vars exist.
// This returns only boolean flags, never prints or returns the secret values.

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const hasHF = !!process.env.HF_API_KEY;
  const hasGCP = !!process.env.GCP_SA_KEY;
  const mock = !!process.env.LOCAL_FAKE_GEMINI;

  return res.status(200).json({ ok: true, hf: hasHF, gcp: hasGCP, mock });
}
