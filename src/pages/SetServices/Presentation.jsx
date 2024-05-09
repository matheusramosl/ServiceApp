import React, { useContext, useState } from 'react'
import Navbar from '../../components/NavBar'
import StepsBar from '../../components/StepsBar'

import context from '../../context/context'
import ServicesComponent from './ServicesComponent'
import PackagesComponent from './PackagesComponent'
import ModalComponent from '../../components/ModalComponent'




export default function Presentation() {
  const options = [
    {
        Name: `One-off • Billed on acceptance`,
        Amount: 2500,
        Type: 'service'
    },
    {
        Name: `One-off • Billed on acceptance`,
        Amount: 2500,
        Type: 'service'
    }
]

  const {setSelectedOptions, serviceType, setServiceType} = useContext(context)


  const verifyComponent = () => {
    switch (serviceType) {
      case 'all':
        return (<div className='flex gap-10'>
          <ServicesComponent />
          <PackagesComponent />
        </div>);
        case 'service': 
          return <ServicesComponent  />
        case 'package':
          return <PackagesComponent  />
        default:
          return <ModalComponent />
    }
  }

  const resetButton = () => {
    setServiceType('')
    setSelectedOptions([])
  }

  return (
    <div className='flex flex-col gap-10'>
    <Navbar />
    <StepsBar />
    <div>


    <div className='flex justify-evenly items-center'>

      {verifyComponent()}

      {/* <ServicesComponent handleChange={handleChange} options={options} handleClick={handleClick} />

        <PackagesComponent handleChange={handleChange} options={options} handleClick={handleClick} /> */}
      </div>



      </div>
      {!(serviceType === '') && <button onClick={() => resetButton()}>Reset</button>}
      </div>

  )
}
