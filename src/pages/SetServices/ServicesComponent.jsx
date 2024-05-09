import React, { useContext, useState } from 'react'
import context from '../../context/context'
import ServiceItem from '../Services/ServiceItem'

export default function ServicesComponent() {
  const { selectOptions, setSelectedOptions} = useContext(context)
  const [services, setServices] = useState('')
  const handleChange = ({value}) => {
      setServices(value)
  }
  const handleClick = () => {
      setSelectedOptions([...selectOptions, options.find((i) => i.Name === services) ])
  
  }
  const options = [
    {
        Name: `One-off • Billed on acceptance`,
        Amount: 2500,
        Type: 'service'
    },
    {
        Name: `Annual • Billed on acceptance`,
        Amount: 1300,
        Type: 'service'
    }
]
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between w-11/12 self-center'>
    <select className='w-3/4 rounded' onChange={(e) => handleChange(e.target) } >
      <option value={''}>Select Service</option>
    {options.map((i) => <option value={i.Name} >{i.Name}</option>)}
    </select>
      <button className="text-blue-600 hover:text-blue-800" disabled={services === ''} onClick={() => handleClick()}>+ Add service</button>
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12'>
            {selectOptions.filter((i) => i.Type === 'service').length > 0 ? selectOptions.filter((i) => i.Type === 'service').map(({Name, Amount}) => <ServiceItem props={{Name, Amount }} />) : <p className='ml-10'>No Service Selected</p>}

        </div>
    </div> 
    </div>
  )
}
