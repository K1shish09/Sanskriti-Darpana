import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import HomeNav from './components/HomeNav'

const Layout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <HomeNav/>
            <main>
                <Outlet />
                <Footer />
            </main>
        </>
    )
}

export default Layout