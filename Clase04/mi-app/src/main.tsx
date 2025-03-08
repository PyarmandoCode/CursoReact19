import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import DemoConsumo from './Componentes/ejemplo1/DemoConsumo'
//import App from './Componentes/ejemplo2/App'
import App from './Componentes/ejemplo3/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
