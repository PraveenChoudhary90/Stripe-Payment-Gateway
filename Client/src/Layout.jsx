import React from 'react'
import TopNav from './component/TopNav'
import Footer from './component/Footer'
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <>
    <TopNav/>
    <main style={{margin:"40px"}}>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout