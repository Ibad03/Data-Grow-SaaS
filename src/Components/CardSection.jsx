import React from 'react'
import Card from './Card'

import {faUser,faHandshake,faUsers} from '@fortawesome/free-solid-svg-icons'

const CardSection = () => {
  return (
<div className='w-full pb-5 '>
    
    <div className=' max-w-[1240px] mx-auto justify-items-center gap-2 grid grid-cols-1
sm:grid-cols-2 lg:grid-cols-3 '>
      <Card name="Single User" 
      price="$149" storage="500 Gb storage" allowed="1 User Allowed" gb="Set Up to 2 GB"
      icon = {faUser} />


<Card name="Partnership" 
      price="$199" storage="1 TB storage" allowed="3 User Allowed" gb="Set Up to 10 GB"
      icon = {faHandshake} />
<Card name="Group Account" 
      price="$299" storage="5 TB storage" allowed="10 User Allowed" gb="Set Up to 20 GB"
      icon = {faUsers} />
    </div> </div>
  )
}

export default CardSection
