import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import Demotaiw from './Componentes/ejemplo4/Demotaiw.tsx'
//import PrimerDemo from './Componentes/ejemplo4/PrimerDemo.tsx'
//import Contador from './Componentes/ejemplo5/Contador'
//import DetectarTecla from './Componentes/ejemplo5/DetectarTecla'
//import ImagenHover from './Componentes/ejemplo5/ImagenHover'
import App from './Componentes/ejemplo6/App'


//Montando el componenete el index el el div llamado root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
