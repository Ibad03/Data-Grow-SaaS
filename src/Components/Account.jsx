import React from 'react'
import AccImg from '../assets/istockphoto-1440562817-612x612.jpg'

const Account = () => {
  return (
    <div className='w-full bg-white'>


        <div className='max-w-[85%] pb-5  mx-auto md:flex gap-6 mt-8 md:mt-14 lg:mt-20'>

<div className='md:w-1/2 min-h-[20rem] flex justify-center'>
    <img className='w-full rounded-2xl  '  src={AccImg}  />
</div>

<div className='mt-7 sm:mt-12 md:w-1/2  '>
    <span className='text-green-500 text-lg text-center  md:text-2xl whitespace-nowrap'>DATA ANALYTICS DASHBOARD</span>
    <h1 className='font-bold text-2xl sm:text-2xl  lg:text-3xl whitespace-nowrap'>Manage Data Analytics Centrally</h1>
    <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit earum quod sed cum
         nam dolores reprehenderit dolor, ad beatae quibusdam nobis sunt sit. Accusantium enim reiciendis sapiente delectus aliquid!

    </p >
    <button className=' mt-5 border bg-black text-white border-green-500 px-4 rounded-lg py-2'>Get Started</button>
</div>
        </div>




        {/* Account Bottom  */}
        <div className='w-full  bg-black pb-20'>
<div className='w-[95%] justify-center px=5 gap-10 mx-auto sm:pt-12 pt-7 md:flex gap-5'>

<div className='flex md:mt-12 flex-col'>

<h1 className='text-white text-center text-lg sm:text-xl md:2xl lg:text-4xl whitespace-nowrap'>Want tips & tricks to optimize your fow?</h1>

<p className='text-white text-center mt-2'>Sign up to your newsletter and stay up to date.</p>
</div>


<div className='md:flex flex-col  '>

<div className='mt-5 ml-30 sm:ml-45 max-w-100% sm:max-w-1/2 m-auto md:mx-0 whitespace-nowrap  '>

<input type="email" className='text-white border-1 pl-2 mr-3' placeholder='Email' />
<button className='bg-green-500 text-black rounded-lg px-3 border-0 cursor-pointer text-lg font-bold py-2'>Notify me</button>
</div>



<div className='flex-col max-w-100% sm:max-w-1/2 mx-auto md:mx-0 mt-5'>
  <h3 className='text-white text-center lg:text-[.9rem] whitespace-nowrap'>We care bout the protection of your data. Read our</h3>
  <a href="#" className='text-green-500 text-center  '>Privacy policy</a>
</div>
</div>
</div>

        </div>
      
    </div>
  )
}

export default Account
