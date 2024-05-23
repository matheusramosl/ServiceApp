import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/NavBar'
import StepsBar from '../../components/StepsBar'
import ServiceItem from './ServiceItem'
import context from '../../context/context'
import PackageItem from './PackageItem'
import { handleZohoRequest } from '../../requests/handleZohoRequests'


export default function Services() {
    const {selectOptions} = useContext(context)

    const getTotal = () => {
        const allServices = selectOptions.filter((i) => i.Type === 'service').reduce((acc, curr) => curr.Amount + acc, 0)
        const allPackages = selectOptions.filter((i) => i.Type === 'package').reduce((acc, curr) => curr.Amount + acc, 0)
        return allPackages + allServices
    } 

  return (
    <div className='flex flex-col gap-10'>
    <Navbar />
    <StepsBar />
{  selectOptions.length > 0 ?  <div>

<div className='flex justify-between'>
    <span className='flex ml-20 font-shadow text-drummond-primary'>Services</span>
    <div className='flex flex-col justify-center items-center'>
    <subtotal className="text-gray-500 mr-20">Subtotal R${getTotal()}.00</subtotal>
    <annualtotal className="text-gray-500 mr-20">Annualtotal R${getTotal() * 12}.00</annualtotal>
    </div>
</div>
<div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12'>
            {selectOptions.filter((i) => i.Type === 'service').length > 0 ? selectOptions.filter((i) => i.Type === 'service').map(({Name, Amount}) => <ServiceItem props={{Name, Amount }} />) : <p className='ml-10'>No Service Selected</p>}

        </div>
    </div> 
    

    {/* 
     */}
     <div className='flex justify-between mt-6'>
    <span className='flex ml-20 font-shadow text-drummond-primary'>Packages</span>
</div>
    <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12'>
            {selectOptions.filter((i) => i.Type === 'package').length > 0 ? selectOptions.filter((i) => i.Type === 'package').map(({Name, Amount}) => <PackageItem props={{Name, Amount }} />) : <p className='ml-10'>No Package Selected</p>}

        </div>
    </div>

    </div> : <div className='flex items-center justify-center'>No Services or package selected</div>}
</div>
  )
}
