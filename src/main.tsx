import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ImageKitProvider } from '@imagekit/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ImageKitProvider urlEndpoint="https://ik.imagekit.io/kzdofyvh6">
        <App />
      </ImageKitProvider>
    </BrowserRouter>
  </StrictMode>,
)
