import React from 'react'

const Home = () => {
  return (
    <div className=' bg-black w-full flex flex-col h-screen gap-3 items-center justify-center '>
      
      <h2 className='text-green-500 px-7 text-[1rem] sm:text-lg mb-3'>GROWING WITH DATA ANALYTICS</h2>

<h1 className='text-white px-7 text-5xl sm:text-6xl text-center font-bold'>Grow With Data</h1>
<h2 className='text-white  px-7 sm:text-4xl text-center mt-4'>Fast,flexible financing for <span className='text-gray-500'>SaaS</span></h2>
<p className='text-gray-500 px-7 mt-4 sm:text-xl text-center'>Monitor Your Data Analytics To Increase For BTB,BTC,
    & SASS <br />Platform.</p>
<button className='text-white mt-5 border border-green-500 px-4 rounded-lg py-2'>Get Started</button>
    </div>
  )
}

export default Home
