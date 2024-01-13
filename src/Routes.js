import React from 'react'
import { Route } from 'react-router-dom'
// pages 
import DashBoard from './Pages/Dashboard/index'

// components 
import Header from './Components/Header/index'
import Footer from './Components/Footer/index'

export default function Routes() {
    return (
        <>
            <Header />
            <Routes >
                <Route path='/' element={<DashBoard />} />
            </Routes>
            <Footer />
        </>
    )
}
