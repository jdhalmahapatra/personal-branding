// Simple FAQ serverless function for portfolio chatbot
// POST { message: string }
// Returns { ok: true, text: string }

const FAQ_ENTRIES: Array<{ question: string; answer: string; keywords: string[] }> = [
  {
    question: 'What do you do?',
    answer: "I'm a software engineer building web applications, focused on React, TypeScript and AI integrations.",
    keywords: ['what', 'do', 'you', 'work', 'job', 'role', 'profession'],
  },
  {
    question: 'Which technologies do you use?',
    answer: 'I work primarily with React, TypeScript, Vite, Tailwind CSS, and Node.js.',
    keywords: ['technologies', 'tech', 'stack', 'used', 'use'],
  },
  {
    question: 'How can I contact you?',
    answer: 'You can reach me via the contact form on this site or email me at hello@example.com.',
    keywords: ['contact', 'email', 'reach', 'hire'],
  },
  {
    question: 'Tell me about your projects',
    answer: 'I have built personal projects including a portfolio site, an AI chat assistant, and a task tracker. See the Projects section for details.',
    keywords: ['projects', 'work', 'portfolio', 'project'],
  },
  {
    question: 'What is your experience?',
    answer: 'I have experience building full-stack web applications, working with REST and GraphQL APIs, and integrating third-party services.',
    keywords: ['experience', 'years', 'background'],
  },
];

function score(message: string, entry: { question: string; answer: string; keywords: string[] }) {
  const text = message.toLowerCase();
  let score = 0;
  // keyword matches
  for (const k of entry.keywords) {
    if (text.includes(k)) score += 2;
  }
  // question words match
  const qWords = entry.question.toLowerCase().split(/\W+/).filter(Boolean);
  for (const w of qWords) if (text.includes(w)) score += 1;
  return score;
}

export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'Missing `message` in request body' });

  // Find best match
  let best = null as null | { entry: typeof FAQ_ENTRIES[number]; score: number };
  for (const e of FAQ_ENTRIES) {
    const s = score(message, e);
    if (!best || s > best.score) best = { entry: e, score: s };
  }

  if (best && best.score > 0) {
    return res.status(200).json({ ok: true, text: best.entry.answer, matched: best.entry.question });
  }

  // No good match — fall back to a generic reply
  const fallback = "Sorry — I don't have an exact answer for that. You can try asking about my projects, experience, or contact details.";
  return res.status(200).json({ ok: true, text: fallback });
}
