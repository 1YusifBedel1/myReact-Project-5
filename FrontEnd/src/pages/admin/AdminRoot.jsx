import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'
import Hero from '../../components/HeroSec/Hero'

const AdminRoot = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default AdminRoot