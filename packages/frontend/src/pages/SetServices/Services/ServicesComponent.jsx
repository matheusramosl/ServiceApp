import React, { useContext, useEffect, useState } from 'react'
import context from '../../../context/context'
import ServiceItem from './ServiceItem'
import { handleZohoRequest } from '../../../requests/handleZohoRequests'


export default function ServicesComponent() {
  const { selectOptions, setSelectedOptions} = useContext(context)
  const [services, setServices] = useState('')
  const [options, setOptions] = useState([
])

const getAllServices = async () => {
  const serviços = await handleZohoRequest('services')
  
  // console.log(serviços);
  const servicesMapped = serviços.services.map((service) => ({
    Name: service.Product_Name || 'Name',
    id: service.id || '',
    Amount: service.Unit_Price || '0',
    Type: 'service',
    description: service.Description || '',
    Recurrence: service.Recurrence || 'One Off', 
    Parent: service.Service_Account || 'Service_Account',
    serviceAccount: {} || 'Select Servcie Account',
    paymentTerms: service.Payment_Terms1 || 'Upon delivery of draft report',
    usState: service.US_State || '',
    competenceYear: service.Competence_Year || '2024',
    executionYear: service.Execution_Year || '2024',
    providers: service.Provider_Receiver || 'Drummond CPA LLC',
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
    setSelectedOptions([...selectOptions, options.find((option) => option.Name === services) ])
      setServices('');
  }

  return (
    <div className='flex flex-col gap-6 '>
      <div className='flex justify-between w-11/12 self-center '>
    <select className='w-1/4 rounded border border-gray-300 transition-colors hover:scale-105 hover:bg-gray-100 ' value={services} onChange={(change) => handleChange(change.target) } >
      <option value={''}>Select Service</option>
    {options.map((option) => <option value={option.Name} >{option.Name}</option>)}
    </select>
      
     
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12 p-4 rounded-lg' >
            {selectOptions.filter((select) => select.Type === 'service').length > 0 ? selectOptions.map((item,index) => <ServiceItem props={{...item,index}} />) : <p className='ml-10 p-8'>No Service Selected</p>}
            <button className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow px-6 ${services === '' ? 'cursor-not-allowed' : ''}`} disabled={services === ''} onClick={() => handleClick()}>+ Add service</button>
            
        </div>
    </div> 
    </div>
  )
}
