import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import './index.css'
//import App from './App.tsx'
//import Saludar from './componentes/ejercicio1/Componentes.tsx'
//import { BienvenidoUsuario } from './componentes/ejercicio1/Propsdemos.tsx'
//import AppComFun from './componentes/ejercicio2/AppComFun.tsx'
//import AppComCla from './componentes/ejercicio2/AppComCla.tsx'
import AppEstudiantes from './componentes/ejercicio3/AppEstudiantes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppEstudiantes/>
  </StrictMode>,
)
