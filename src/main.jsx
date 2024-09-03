import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppPeliculas } from './AppPeliculas'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPeliculas/>
  </StrictMode>,
)
