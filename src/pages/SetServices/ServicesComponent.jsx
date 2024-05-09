import React, { useContext, useState } from 'react'
import context from '../../context/context'

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
      <div className='flex justify-between w-full self-center'>
    <select className='w-3/4 rounded' onChange={(e) => handleChange(e.target) } >
      <option value={''}>Select Service</option>
    {options.map((i) => <option value={i.Name} >{i.Name}</option>)}
    </select>
      <button className="text-blue-600 hover:text-blue-800" disabled={services === ''} onClick={() => handleClick()}>+ Add service</button>
      </div>
      <div className='border-2 bg-white shadow-lg w-[450px] h-[300px] self-center'>
      {selectOptions.filter((i) => i.Type ==='service').map((i) => <p>{i.Name}</p>)}
      </div>
    </div>
  )
}
