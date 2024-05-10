import React, { useContext, useState } from 'react'
import context from '../../context/context'
import PackageItem from '../Services/PackageItem'

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
        setPackages('');
    }
    return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between w-11/12 self-center pt-4'>
        <select className='w-1/4 rounded border border-gray-300 transition-colors hover:scale-105 hover:bg-gray-100' value={packages} onChange={(e) => handleChange(e.target) }>
          <option value={''}>Select Package</option>
          {options2.map((i) => <option value={i.Name}>{i.Name}</option>)}
        </select>
          <button className={`text-blue-600 hover:scale-105 hover:text-blue-800 ${packages === '' ? 'cursor-not-allowed' : ''}`} disabled={packages === ''} onClick={() => handleClick()}>+ Add Package</button>
      </div>
      <div className='flex items-center justify-center'>
        <div className=' bg-white shadow-lg w-11/12'>
            {selectOptions.filter((i) => i.Type === 'package').length > 0 ? selectOptions.filter((i) => i.Type === 'package').map(({Name, Amount}) => <PackageItem props={{Name, Amount }} />) : <p className='ml-10'>No Package Selected</p>}

        </div>
    </div>
    </div>
  )
}
