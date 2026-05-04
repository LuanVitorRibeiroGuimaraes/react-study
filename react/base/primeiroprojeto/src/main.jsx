import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Social from './primeiroprojeto'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Social nome = "Luan" idade = "20" facebook = "lv77n" instagram = "luan777n" />
  </StrictMode>,
)
