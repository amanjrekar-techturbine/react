import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { Home } from './components/index.js'
import Layout from './components/layout/Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { githubDataLoader } from './components/home/Home.jsx'
import NotFound from './components/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route loader={githubDataLoader} path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>

    <Route path='*' element={<NotFound />} />

    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
