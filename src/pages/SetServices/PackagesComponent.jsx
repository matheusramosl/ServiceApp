import React, { useContext, useState } from 'react'
import context from '../../context/context'

export default function PackagesComponent() {
    const { selectOptions, setSelectedOptions} = useContext(context)
    const options2 = [
      {
          Name: `Business Formation Plan`,
          Amount: 2500,
          Type: 'package'
      },
      {
          Name: `Super Tech Plan`,
          Amount: 17500,
          Type: 'package'
      }
  ]
    const [packages, setPackages] = useState('')
    const handleChange = ({value}) => {
        setPackages(value)

    }
    const handleClick = () => {
        console.log(packages);
        setSelectedOptions([...selectOptions, options2.find((i) => i.Name === packages) ])
  
    }
    return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between w-full self-center'>
        <select   className='w-3/4 rounded' onChange={(e) => handleChange(e.target) }>
          <option value={''}>Select Package</option>
          {options2.map((i) => <option value={i.Name}>{i.Name}</option>)}
        </select>
          <button className={`text-blue-600 hover:text-blue-800`} disabled={packages === ''} onClick={() => handleClick()}>+ Add Package</button>
      </div>
      <div className='flex justify-evenly'>
      <div className='border-2 bg-white shadow-lg w-[450px] h-[300px] self-center'>
      {selectOptions.filter((i) => i.Type ==='package').map((i) => <p>{i.Name}</p>)}
      </div>
      </div>
    </div>
  )
}
