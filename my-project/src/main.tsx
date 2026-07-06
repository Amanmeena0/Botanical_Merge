import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const ApiKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const ApiUrl = import.meta.env.VITE_API_BASE_URL

console.log('Loaded VITE_API_BASE_URL:', ApiUrl || 'Not set (using fallback: http://127.0.0.1:8000)')

if (!ApiKey) {
  console.warn('Missing VITE_CLERK_PUBLISHABLE_KEY in .env file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={ApiKey || ""} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>,
)
