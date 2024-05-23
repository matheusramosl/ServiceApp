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

  const {setSelectedOptions, serviceType, setServiceType,selectOptions} = useContext(context)
  const getTotal = () => {
    const allServices = selectOptions.filter((i) => i.Type === 'service').reduce((acc, curr) => curr.Amount + acc, 0)
    const allPackages = selectOptions.filter((i) => i.Type === 'package').reduce((acc, curr) => curr.Amount + acc, 0)
    return allPackages + allServices
} 

  // const verifyComponent = () => {
  //   switch (serviceType) {
  //     case 'all':
  //       return (<div className='w-11/12'>
  //         <ServicesComponent />
  //         <PackagesComponent />
  //       </div>);
  //       case 'service': 
  //         return (<div className='w-11/12'>
  //         <ServicesComponent  />
  //         </div>);
  //       case 'package':
  //         return (<div className='w-11/12'>
  //         <PackagesComponent  />
  //         </div>);
  //       default:
  //         return <ModalComponent />
  //   }
  // }
  const verifyComponent = () => {
    return (<div className='w-11/12'>
      <ServicesComponent />
      <PackagesComponent />
    </div>);

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
      <div className='flex w-screen itens-center justify-end'>
      <div className='flex flex-col'> 
        <subtotal className="text-gray-500 mr-20">Subtotal R${getTotal()}.00</subtotal>
        <annualtotal className="text-gray-500 mr-20">Annualtotal R${getTotal() * 12}.00</annualtotal>
      </div>
      </div>

    <div className='flex justify-evenly items-center'>

      {verifyComponent()}

      </div>



      </div>
      {<button onClick={() => resetButton()} className=" w-1/12 self-center transition-all bg-drummond-primary text-white hover:bg-drummond-secondary-400 font-bold rounded py-2 px-4 ">Reset</button>}
      </div>

  )
}
