import React, { useContext, useEffect, useState } from 'react'
import context from '../../context/context'
import PackageItem from '../Services/PackageItem'
import { handleZohoRequest } from '../../requests/handleZohoRequests'

export default function PackagesComponent() {
    const { selectOptions, setSelectedOptions, optionsPackage, setOptionsPackage} = useContext(context)
    

  const getAllServices = async () => {
    const packages = await handleZohoRequest('packages')
    console.log(packages);
    const packagesMapped = packages.packages.map((i) => ({
      Name: i.Packege_Name || 'Package_Name',
      Amount: i.Plan_Value || 'Plan_Value',
      Year: [2024,2025,2026,2027,2028,2029,2030],
      Type: 'package',
      recurrence: i.Recurrence || 'Recurrence',
      description: i.Description || 'Description',
      currency: i.Currency || 'USD',
      Parent: i.Service_Account || 'Service_Account',
      quantity: 1,
      services: i.Plan_Services.map((i) => ({Name: i.Service.name, paymentTerm: i.Payment_Term, Description: i.Description || 'Description' }))
    }))
  console.log(packagesMapped)
  setOptionsPackage(packagesMapped)
    }
  
    useEffect(() => {
      getAllServices()
    }, [])
    const [packages, setPackages] = useState('')
    const handleChange = ({value}) => {
        setPackages(value)

    }
    const handleClick = () => {
        console.log(packages);
        setSelectedOptions([...selectOptions, optionsPackage.find((i) => i.Name === packages) ])
        setPackages('');
    }
    return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between w-11/12 self-center pt-4'>
        <select className='w-1/4 rounded border border-gray-300 transition-colors hover:scale-105 hover:bg-gray-100' value={packages} onChange={(e) => handleChange(e.target) }>
          <option value={''}>Select Package</option>
          {optionsPackage.map((i) => <option value={i.Name}>{i.Name}</option>)}
        </select>
          <button className={`text-blue-600 hover:scale-105 hover:text-blue-800 ${packages === '' ? 'cursor-not-allowed' : ''}`} disabled={packages === ''} onClick={() => handleClick()}>+ Add Package</button>
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12'>
            {selectOptions.filter((i) => i.Type === 'package').length > 0 ? selectOptions.filter((i) => i.Type === 'package').map((i) => <PackageItem props={i} />) : <p className='ml-10'>No Package Selected</p>}

        </div>
    </div>
    </div>
  )
}
