import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = ({icon,img,name,price,storage,allowed,gb}) => {
  return (
    <div className='w-full max-w-[350px] bg-gray-300 h-[24rem] pt-7 mt-5 rounded-lg flex flex-col items-center min-w-[300px]  '>
     <FontAwesomeIcon className='text-6xl' icon={icon}/>
      <h1 className='text-2xl font-bold my-4'>{name}</h1>
      <span className='text-3xl font-bold mb-4'>{price}</span>
      <span className='mb-3'>{storage}</span>
 <span className='mb-3'>{allowed}</span>  
 <span className='mb-3'>{gb}</span> 
 <button className='bg-green-500 text-xl px-4 rounded-md mt-1 py-1'>Start Trial</button>
 </div>
  )
}

export default Card
