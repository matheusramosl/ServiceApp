import React, { useContext, useEffect, useState } from 'react'
import context from '../../context/context'
import ServiceItem from '../Services/ServiceItem'
import DrawerServices from '../Services/DrawerServices'
import { handleZohoRequest } from '../../requests/handleZohoRequests'

export default function ServicesComponent() {
  const { selectOptions, setSelectedOptions} = useContext(context)
  // const {setServiceType} = useContext(context)
  const [services, setServices] = useState('')
  const [options, setOptions] = useState([
])

const getAllServices = async () => {
  const serviços = await handleZohoRequest('services')
  console.log(serviços);
  const servicesMapped = serviços.services.map((i) => ({
    Name: i.Name || 'Name',
    Amount: i.Unit_Price || 'Unit_Price',
    Year: 2024,
    Type: 'service',
    Recurrence: i.Recurrence || 'Recurrence', 
    Parent: i.Service_Account || 'Service_Account',
    serviceAccount: i.Service_Account || 'Service_Account',
    paymentTerms: i.Payment_Terms || 'Payment_Terms',
    usState: i.US_State || 'US_State',
    competenceYear: i.Competence_Year || '2024',
    executionYear: i.Execution_Year || '2024',
    providers: i.Service_Provider1 || ['Drummond CPA LLC'],
    quantity: 1
  }))
  setOptions(servicesMapped)
  }

  useEffect(() => {
    getAllServices()
  }, [])
  const handleChange = ({value}) => {
      setServices(value)
  }
  const handleClick = () => {
      setSelectedOptions([...selectOptions, options.find((i) => i.Name === services) ])
      setServices('');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between w-11/12 self-center'>
    <select className='w-1/4 rounded border border-gray-300 transition-colors hover:scale-105 hover:bg-gray-100' value={services} onChange={(e) => handleChange(e.target) } >
      <option value={''}>Select Service</option>
    {options.map((i) => <option value={i.Name} >{i.Name}</option>)}
    </select>
      
      <button className={`text-blue-600 hover:scale-105 hover:text-blue-800 ${services === '' ? 'cursor-not-allowed' : ''}`} disabled={services === ''} onClick={() => handleClick()}>+ Add service</button>
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12' >
            {selectOptions.filter((i) => i.Type === 'service').length > 0 ? selectOptions.filter((i) => i.Type === 'service').map((i) => <ServiceItem props={i} />) : <p className='ml-10'>No Service Selected</p>}
           
        </div>
    </div> 
    </div>
  )
}
