import { PERSONAL_INFO, EXPERIENCE, SKILLS, PROJECTS } from "../constants";

// Frontend-side wrapper that calls the serverless proxy at `/api/gemini`.
// The proxy holds the real service account / API key server-side.
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const resp = await fetch('/api/gemini', {
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
      return "I'm sorry — the AI service isn't available right now.";
    }

    const data = await resp.json();
    // Prefer the extracted text, fall back to raw JSON string
    return data?.text ?? JSON.stringify(data?.raw ?? data);
  } catch (err) {
    console.error('Error calling Gemini proxy:', err);
    return "I encountered an error while processing your request. Please try again later.";
  }
};