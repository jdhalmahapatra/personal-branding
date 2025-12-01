import { PERSONAL_INFO, EXPERIENCE, SKILLS, PROJECTS } from "../constants";

// Frontend-side wrapper that calls the serverless proxy at `/api/gemini`.
// The proxy holds the real service account / API key server-side.
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // If Vite env `VITE_USE_FAQ=1` is set, send requests to the lightweight FAQ endpoint.
    // This lets you enable a deterministic FAQ bot for your portfolio without using HF.
    const useFaq = (import.meta as any).env?.VITE_USE_FAQ === '1';
    const endpoint = useFaq ? '/api/faq' : '/api/gemini';

    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, context: {
        personalInfo: PERSONAL_INFO,
        skills: SKILLS,
        experience: EXPERIENCE,
        projects: PROJECTS,
      } }),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      console.error('Gemini proxy error', err);
      // If FAQ mode is enabled, fall back to the in-client FAQ matcher so
      // the UI remains functional during local dev where `/api/*` isn't served.
      const useFaq = (import.meta as any).env?.VITE_USE_FAQ === '1';
      if (useFaq) {
        // client-side FAQ mirror
        const clientAnswer = (() => {
          const FAQ = [
            { q: 'What do you do?', a: "I'm a software engineer building web applications, focused on React, TypeScript and AI integrations.", kws: ['what', 'do', 'you', 'work', 'job', 'role', 'profession'] },
            { q: 'Which technologies do you use?', a: 'I work primarily with React, TypeScript, Vite, Tailwind CSS, and Node.js.', kws: ['technologies', 'tech', 'stack', 'used', 'use'] },
            { q: 'How can I contact you?', a: 'You can reach me via the contact form on this site or email me at hello@example.com.', kws: ['contact', 'email', 'reach', 'hire'] },
            { q: 'Tell me about your projects', a: 'I have built personal projects including a portfolio site, an AI chat assistant, and a task tracker. See the Projects section for details.', kws: ['projects', 'work', 'portfolio', 'project'] },
            { q: 'What is your experience?', a: 'I have experience building full-stack web applications, working with REST and GraphQL APIs, and integrating third-party services.', kws: ['experience', 'years', 'background'] },
          ];
          const text = message.toLowerCase();
          let best = { score: 0, answer: '' };
          for (const e of FAQ) {
            let score = 0;
            for (const k of e.kws) if (text.includes(k)) score += 2;
            const qWords = e.q.toLowerCase().split(/\W+/).filter(Boolean);
            for (const w of qWords) if (text.includes(w)) score += 1;
            if (score > best.score) best = { score, answer: e.a };
          }
          if (best.score > 0) return best.answer;
          return "Sorry — I don't have an exact answer for that. Try asking about my projects, experience, or contact details.";
        })();
        return clientAnswer;
      }
      return "I'm sorry — the AI service isn't available right now.";
    }

    const data = await resp.json();
    // Prefer the extracted text, fall back to raw JSON string
    return data?.text ?? JSON.stringify(data?.raw ?? data);
  } catch (err) {
    console.error('Error calling Gemini proxy:', err);
    // If FAQ mode is enabled, fall back to a client-side FAQ matcher so
    // the chat UI still works in local dev without running serverless functions.
    try {
      const useFaq = (import.meta as any).env?.VITE_USE_FAQ === '1';
      if (useFaq) {
        // Lightweight client-side FAQ (must mirror server-side `api/faq.ts`)
        const FAQ = [
          { q: 'What do you do?', a: "I'm a software engineer building web applications, focused on React, TypeScript and AI integrations.", kws: ['what', 'do', 'you', 'work', 'job', 'role', 'profession'] },
          { q: 'Which technologies do you use?', a: 'I work primarily with React, TypeScript, Vite, Tailwind CSS, and Node.js.', kws: ['technologies', 'tech', 'stack', 'used', 'use'] },
          { q: 'How can I contact you?', a: 'You can reach me via the contact form on this site or email me at hello@example.com.', kws: ['contact', 'email', 'reach', 'hire'] },
          { q: 'Tell me about your projects', a: 'I have built personal projects including a portfolio site, an AI chat assistant, and a task tracker. See the Projects section for details.', kws: ['projects', 'work', 'portfolio', 'project'] },
          { q: 'What is your experience?', a: 'I have experience building full-stack web applications, working with REST and GraphQL APIs, and integrating third-party services.', kws: ['experience', 'years', 'background'] },
        ];

        const text = message.toLowerCase();
        let best = { score: 0, answer: '' };
        for (const e of FAQ) {
          let score = 0;
          for (const k of e.kws) if (text.includes(k)) score += 2;
          const qWords = e.q.toLowerCase().split(/\W+/).filter(Boolean);
          for (const w of qWords) if (text.includes(w)) score += 1;
          if (score > best.score) best = { score, answer: e.a };
        }
        if (best.score > 0) return best.answer;
        return "Sorry — I don't have an exact answer for that. Try asking about my projects, experience, or contact details.";
      }
    } catch (fallbackErr) {
      console.error('FAQ fallback error', fallbackErr);
    }
    return "I encountered an error while processing your request. Please try again later.";
  }
};