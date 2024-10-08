import React, { useContext, useEffect, useState } from 'react'
import context from '../../../context/context'
import ServiceItem from './ServiceItem'
import ServiceBtn from './components/ServiceBtn'
import { handleZohoRequest } from '../../../requests/handleZohoRequests'
import AddServiceBtn from './components/AddServiceBtn'


export default function ServicesComponent() {
  const { selectOptions, setSelectedOptions} = useContext(context)
  const [services, setServices] = useState('')
  const [options, setOptions] = useState([
])

const getAllServices = async () => {
  
  //  const servicos = await handleZohoRequest('services')
  // const servicesMapped = servicos.map((service) => ({
  //   Name: service.Product_Name || 'Name',
  //   id: service.id || '',
  //   Amount: service.Unit_Price || '0',
  //   Type: 'service',
  //   description: service.Description || '',
  //   Recurrence: service.Recurrence || 'One Off', 
  //   Parent: service.Service_Account || 'Service_Account',
  //   serviceAccount: {} || 'Select Servcie Account',
  //   paymentTerms: service.Payment_Terms1 || 'Upon delivery of draft report',
  //   usState: service.US_State || '',
  //   competenceYear: service.Competence_Year || '2024',
  //   executionYear: service.Execution_Year || '2024',
  //   providers: service.Provider_Receiver || 'Drummond CPA LLC',
  //   quantity: '1'
  // }))
  // setOptions(servicesMapped)
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
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12 p-4 rounded-lg' >
        <div className="grid grid-cols-8 gap-4 items-center p-2 border text-wrap font-bold">
          <label htmlFor="service" className="col-span-2 pl-10">Servce </label>
          <label htmlFor="service" className="col-span-2 pl-4">Servce Account </label>
          <label htmlFor="billing" className="col-span-1">Recurrence</label>
          <label className="col-span-1">Competence Year</label>
          <label htmlFor="quantity" className="col-span-1 text-center pr-8">Quantity</label>
          <label htmlFor="quantity" className="col-span-1 text-center">Value</label>
        </div>
            {selectOptions.filter((select) => select.Type === 'service').length > 0 ? selectOptions.map((item,index) => <ServiceItem props={{...item,index}} />) : <p className='ml-10 p-8'>No Service Selected</p>}
            <div className='flex justify-center md:flex'>
       <AddServiceBtn />
            </div>
        </div>
    </div> 
    </div>
  )
}
