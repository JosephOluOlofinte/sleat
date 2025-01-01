import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { element } from './router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={element} />
  </StrictMode>,
)
