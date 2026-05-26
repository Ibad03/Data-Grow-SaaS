import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [ShowNavbar,SetShowNavbar] = useState(false)

    const revNav = () =>{
        SetShowNavbar ((ShowNavbar) => !ShowNavbar)
    }

  return (
    <nav className='bg-black w-full h-15 fixed '>

<div className='w-[80%] h-100vh pt-5 mx-auto bg-black flex items-center justify-between items-center'>

<div className="logo">
    <h1 className='text-green-600 text-2xl font-bold'>REACT..</h1>
</div>

 <div className='sm:flex hidden '>
    <ul className='flex gap-5'>
        <li>
            <a href="#" className='text-white hover:text-green-600'>Home</a>
        </li>
        <li>
            <a href="#" className='text-white hover:text-green-600'>Account</a>
        </li>
        <li>
            <a href="#" className='text-white hover:text-green-600'>Sign In</a>
        </li>
    </ul>
    <button className='bg-white text-lg px-3 rounded-lg ml-3 py-1.6 hover:bg-black
     hover:text-white hover:border-1 '>Get Started</button>
 </div>
 <div className='flex sm:hidden'>
<FontAwesomeIcon icon={faBars} onClick={revNav} className='text-white cursor-pointer '/>
 </div>





</div>


{/* Mobile responsive */}

<div className={`fixed w-full h-[100vh] bg-black ${ShowNavbar ? "block" : "hidden"}`}>
<ul className='flex-col pt-5'>
        <li className='mb-5 mx-4 cursor-pointer rounded-lg py-3 text-center hover:border-x border-green-500'>
            <a href="#" className='text-white hover:text-green-600'>Home</a>
        </li>
        <li className='mb-5 mx-4 cursor-pointer rounded-lg py-3 text-center hover:border-x border-green-500'>
            <a href="#" className='text-white hover:text-green-600'>Account</a>
        </li >
        <li className='mb-5 mx-4 cursor-pointer rounded-lg py-3 text-center hover:border-x border-green-500'>
            <a href="#" className='text-white hover:text-green-600'>Sign In</a>
        </li>
    </ul>
    <div className='flex'>
 <button className='bg-white mt-5 justify-center text-lg px-3 rounded-lg py-1.6 w-[80%] mx-auto hover:bg-black
     hover:text-white hover:border-1 '>Get Started</button>
    </div>
   
</div>


    </nav>
  )
}

export default Navbar
