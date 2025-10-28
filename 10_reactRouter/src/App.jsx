
import './App.css'
import {Header, Home, Footer} from './components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/'
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
