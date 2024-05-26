import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Allservices from '../../components/Allservices/Allservices'

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    <Banner title = "Services"/>
    <Allservices/>
    <Footer/>
    </>
  )
}
