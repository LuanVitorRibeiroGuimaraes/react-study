import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BiscoitoDaSorte from './biscoito-da-sorte'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BiscoitoDaSorte />
  </StrictMode>,
)
