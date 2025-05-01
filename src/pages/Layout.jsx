import React from 'react'
import Header from '../component/Header'
import Footer from '../component/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}
