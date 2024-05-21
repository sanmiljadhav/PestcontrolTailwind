import React, { useState } from 'react'
import CatLogo from '../../assets/images/cat.jpg'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import './navbar.css'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {link:"Home", path:"/"},
        {link: "About Us", path:"/about"},
        {link:"Services", path:"/services"},
        {link:"Pricing", path:"/pricing"}
    ]
  return (
    <>
    <nav className='shadow-md bg-white md:px-14 py-4 text-primary max-w-screen-2xl fixed top-0 right-0 left-0 h-20'>
        <div className='text-lg container mx-auto flex justify-between font-medium'>
            <div className='flex space-x-14'>

                <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                    <img src={CatLogo} className='w-10 inline-block items-center'></img>
                    <span>StaticTalent</span>
                </a>

                <ul className='md:flex items-center space-x-12 hidden'>
                    {
                        navItems.map(({link, path})=>{
                            return <a key = {link} href={path} className='hover:text-gray-300 block'>{link}</a>
                        })
                    }
                </ul>
            </div>

            {/* language and contactus button */}
            <div className='md:flex space-x-12 items-center hidden'>
                <a href="/">Get a Quote</a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded-2xl hover:text-white hover:bg-indigo-600'>Contact us</button>
            </div>

            {/* menu btn display only on mobile */}
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300 text-xl'>
                    {
                        isMenuOpen ? (<FaXmark className='text-primary w-6 h-6'/>): (<FaBars className='text-primary w-6 h-6' />)
                    }

                </button>

            </div>

        </div>
    </nav>
    
    {/* Nav items for mobile devices */}
    <div className={`space-y-4 bg-secondary px-4 pt-24 pb-5 text-xl ${isMenuOpen ? "block fixed top-0 left-0 right-0": "hidden"}`}>
    {
                        navItems.map(({link, path})=>{
                            return <a key = {link} href={path} className='hover:text-gray-300 hover:font-semibold block'>{link}</a>
                        })
                    }
    </div>
    </>
  )
}
