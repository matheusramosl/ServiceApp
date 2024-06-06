import React, { useContext, useEffect, useState } from 'react'
import context from '../../../context/context'
import PackageItem from './PackageItem'
import { handleZohoRequest } from '../../../requests/handleZohoRequests'

export default function PackagesComponent() {
    const { selectOptions, setSelectedOptions, optionsPackage, setOptionsPackage} = useContext(context)
    

  const getAllServices = async () => {
    const packages = await handleZohoRequest('packages')
    const packagesMapped = packages.packages.map((itemPackage) => ({
      Name: itemPackage.Packege_Name || 'Package_Name',
      Amount: itemPackage.Plan_Value || 0,
      Year: [2024,2025,2026,2027,2028,2029,2030],
      Type: 'package',
      recurrence: itemPackage.Recurrence || 'Recurrence',
      description: itemPackage.Description || 'Description',
      currency: itemPackage.Currency || 'USD',
      Parent: itemPackage.Service_Account || 'Service_Account',
      quantity: 1,
      services: itemPackage.Plan_Services.map((itemService) => ({Name: itemService.Service.name, paymentTerm: itemService.Payment_Term, Description: itemService.Description || 'Description' }))
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
        setSelectedOptions([...selectOptions, optionsPackage.find((select) => select.Name === packages) ])
        setPackages('');
    }
    return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between w-11/12 self-center pt-4'>
        <select className='w-1/4 rounded border border-gray-300 transition-colors hover:scale-105 hover:bg-gray-100' value={packages} onChange={(change) => handleChange(change.target) }>
          <option value={''}>Select Package</option>
          {optionsPackage.map((option) => <option value={option.Name}>{option.Name}</option>)}
        </select>
          
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12 p-4 rounded-lg'>
            {selectOptions.filter((select) => select.Type === 'package').length > 0 ? selectOptions.filter((select) => select.Type === 'package').map((item) => <PackageItem props={item} />) : <p className='ml-10 p-8'>No Package Selected</p>}
            <button className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 px-6 rounded shadow ${packages === '' ? 'cursor-not-allowed' : ''}`} disabled={packages === ''} onClick={() => handleClick()}>+ Add Package</button>
        </div>
    </div>
    </div>
  )
}
