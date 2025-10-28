import React from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout