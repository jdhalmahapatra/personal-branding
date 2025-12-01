# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## AI Chatbot Setup (Hugging Face, Gemini, or Mock)

The serverless proxy at `api/gemini.ts` supports three modes:

1. **Hugging Face Inference API** (free tier, recommended for cost-free portfolios)
2. **Google Generative AI (Gemini)** (via service account, pay-as-you-go)
3. **Mock mode** (for local testing without API calls)

### Hugging Face Setup (Free Tier)

**Why Hugging Face?** Free tier includes generous monthly API calls for inference on open-source models. Perfect for portfolio projects with light traffic.

#### Local Development with Hugging Face

1. Sign up for a free [Hugging Face account](https://huggingface.co/join)
2. Go to **Settings → Access Tokens** and create a new token (read-only scope is sufficient)
3. Copy the token (format: `hf_xxxxx...`)
4. Create a `.env.local` file in the project root with:

```env
HF_API_KEY=hf_xxxxx...
```

5. Start the dev server:

```bash
npm install
npm run dev
```

The chat will call the Hugging Face free tier model (`mistralai/Mistral-7B-Instruct-v0.1`) to generate responses.

#### Deploy to Vercel with Hugging Face

1. Create a Vercel account and connect your GitHub repository
2. In **Project Settings → Environment Variables**, add:
   - **Name:** `HF_API_KEY`
   - **Value:** Your Hugging Face token (e.g., `hf_xxxxx...`)
3. Deploy by pushing to your main branch

**Cost:** Free tier allows ~30k API calls/month. Monitor usage in [Hugging Face Dashboard](https://huggingface.co/settings/billing/overview).

---

## Google Generative AI (Gemini) Setup (Alternative)

Follow these steps to securely wire the Google Generative AI (Gemini) service account. The serverless proxy at `api/gemini.ts` reads a service account JSON from an environment variable called `GCP_SA_KEY`. **Note:** This requires a Google Cloud billing account (pay-as-you-go).

#### Local Development with Gemini

- Create a Google Cloud service account with the minimum required role (e.g., `Vertex AI User` / Generative AI access) and download the JSON key.
- Save the JSON file locally (do NOT commit to git). For example: `./gcp-service-account.json`.
- Add a local environment file `.env.local` (do NOT commit). Example `.env.local` contents:

```env
# Point to the service account JSON file (preferred)
GOOGLE_APPLICATION_CREDENTIALS=./gcp-service-account.json

# Optional: Vite dev proxy base (if needed)
VITE_API_BASE_URL=http://localhost:5174
```

- Alternatively, if you prefer to keep the JSON contents in an env var (less recommended), create `.env.local` with:

```env
# Paste the entire JSON content as a single-line value (escape newlines or use a compact JSON string)
GCP_SA_KEY={"type":"service_account", "project_id":"...", "private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n", "client_email":"..."}
```

#### Running Locally with Gemini

- If you used `GOOGLE_APPLICATION_CREDENTIALS`, the serverless proxy (when run locally with `vercel dev` or as a Node server) will pick it up automatically.
- Start the app for development:

```bash
npm install
npm run dev
```

#### Deploy to Vercel with Gemini

- Create a Vercel account and connect your GitHub repository.
- In your Vercel project settings, add an Environment Variable named `GCP_SA_KEY` and paste the entire service account JSON as the value. (Vercel hides the value and stores it securely.)

- Alternatively, you can upload the JSON to a private storage and set `GOOGLE_APPLICATION_CREDENTIALS` to a file path if your hosting supports file secrets — but using `GCP_SA_KEY` is simplest.

- Ensure the `api/gemini.ts` function is present at the repository root under `api/` so Vercel will deploy it as a Serverless Function.

- Set the Vercel build command to the default (`npm run build`) and output directory to `dist` (Vite handles it automatically).

- Deploy: push to the `main` (or connected) branch. Vercel will build and deploy your app and serverless functions.

#### Security Notes for Gemini

- Never commit service account JSON files or API keys to your repository.
- Use least-privilege roles for the service account.
- Monitor your Google Cloud billing and set budgets/alerts to avoid unexpected charges.

If you want, I can provide a small `vercel.json` with recommended function/runtime settings, or add a local `dev` script to emulate the serverless function locally with `vercel dev`.

## Local dev helper

I've added a convenience npm script to run Vercel's local dev server for serverless functions:

```bash
npm run dev:api
```

This runs `vercel dev` and serves `api/*` functions locally. If you prefer to run both the Vite dev server and Vercel dev in parallel, run the two commands in separate terminals.

## Quick Deploy Checklist

- Ensure your project is connected to Vercel (import from GitHub) and the repository is the one you push to.
- Add environment variables in Vercel Project Settings:
  - `VITE_USE_FAQ=1` (if you want the built frontend to use the FAQ)
  - `HF_API_KEY` and/or `GCP_SA_KEY` only if you plan to use them in serverless functions (do NOT prefix secrets with `VITE_`).
- Push to your repo (e.g., `main`) and monitor the Vercel deployment logs to confirm build and function availability.

You can also check the `api/health` endpoint after deployment to confirm which envs are present:

```
GET https://<your-deploy-url>/api/health
```

The endpoint returns a small JSON object showing which environment flags are present on the server.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
