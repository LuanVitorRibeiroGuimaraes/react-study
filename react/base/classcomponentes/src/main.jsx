import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConditionalLogin from './member/conditional'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionalLogin />
  </StrictMode>,
)
