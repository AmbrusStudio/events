import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './styles/base.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RedirectToMainSite } from './components/Redirect'
import { HighstreetHunt } from './pages/highstreetHunt'

const router = createBrowserRouter([
  { path: '/', element: <RedirectToMainSite /> },
  { path: '/highstreetpuzzlehunt', element: <HighstreetHunt /> },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
