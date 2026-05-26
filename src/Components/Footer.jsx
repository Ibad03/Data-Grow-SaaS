import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faXTwitter,faWhatsapp,faYoutube } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <div className='w-full bg-black'>
      <div className='max-w-[500px] pt-5 mx-auto'>
        <h1 className='text-green-500 text-center text-3xl '>REACT..</h1>
        <p className='text-white text-center text-gray-500 pt-5 pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptate quibusdam facere non quo doloribus natus amet minima omnis commodi.
        </p>
        
        <div className='flex justify-between pb-5'>
            <a href="#" className='text-white'><FontAwesomeIcon icon={faFacebook} size='xl'/></a>
            <a href="#" className='text-white'><FontAwesomeIcon icon={faInstagram} size='xl'/></a>
            <a href="#" className='text-white'><FontAwesomeIcon icon={faWhatsapp} size='xl'/></a>
            <a href="#" className='text-white'><FontAwesomeIcon icon={faXTwitter} size='xl'/></a>
            <a href="#" className='text-white'><FontAwesomeIcon icon={faYoutube} size='xl'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
 