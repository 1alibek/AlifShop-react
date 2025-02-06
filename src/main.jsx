import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import { RouterProvider } from 'react-router-dom'
import { root } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={root}/>
  </StrictMode>,
)
