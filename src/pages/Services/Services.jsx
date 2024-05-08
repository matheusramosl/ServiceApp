import React, { useState } from 'react'
import Navbar from '../../components/NavBar'
import StepsBar from '../../components/StepsBar'
import ServiceItem from './ServiceItem'


export default function Services() {
    const [services, serServices] = useState([
        {
            Name: `One-off • Billed on acceptance`,
            Amount: 2500
        },
        {
            Name: `One-off • Billed on acceptance`,
            Amount: 2500
        },
        {
            Name: `One-off • Billed on acceptance`,
            Amount: 2500
        }
    ])
    const [packages, setPackages] = useState([{
        Name: `One-off • Billed on acceptance`,
        Amount: 2500
    },
    {
        Name: `One-off • Billed on acceptance`,
        Amount: 2500
    },
    {
        Name: `One-off • Billed on acceptance`,
        Amount: 2500
    }])

    const getTotal = () => {
        const allServices = services.reduce((acc, curr) => curr.Amount + acc, 0)
        const allPackages = packages.reduce((acc, curr) => curr.Amount + acc, 0)
        return allPackages + allServices
    } 
  return (
    <div className='flex flex-col gap-10'>
    <Navbar />
    <StepsBar />
    <div>
<div className='flex justify-between'>
    <span className='flex ml-20'>Services</span>
    <subtotal className="text-gray-500 mr-20">Subtotal R${getTotal()}.00</subtotal>
</div>
    <div className='flex items-center justify-center'>
        <div className='border-2 border-black w-11/12'>
            {services.map(({Name, Amount}) => <ServiceItem props={{Name, Amount }} />)}

        </div>
    </div>
    <div className="mt-4 flex justify-between ml-16">
        <button className="text-blue-600 hover:text-blue-800">+ Add service</button>
    </div>

    {/* 
     */}
     <div className='flex justify-between mt-6'>
    <span className='flex ml-20'>Packages</span>
</div>
    <div className='flex items-center justify-center'>
        <div className='border-2 border-black w-11/12'>
            {services.map(({Name, Amount}) => <ServiceItem props={{Name, Amount }} />)}

        </div>
    </div>
    <div className="mt-4 flex justify-between ml-16">
        <button className="text-blue-600 hover:text-blue-800">+ Add Package</button>
    </div>
    </div>
</div>
  )
}
