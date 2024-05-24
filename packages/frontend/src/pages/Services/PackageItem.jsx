import React, { useContext, useState } from 'react'
import DrawerServices from './DrawerServices'
import context from '../../context/context'

function PackageItem({props}) {
  const {Name, Amount} = props
  const {selectOptions} = useContext(context)
  const [state, setState] = useState({
    recurrence: props.recurrence
  })


  return (
    <div className="bg-white p-4 shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-800 font-semibold">{Name}</div>
        <div className="text-gray-800 font-semibold flex pr-8">
        <DrawerServices props={{...props, type:'package'}} />
        </div>

      </div>
      <div className="grid grid-cols-8 gap-4 items-center">
        <div className="col-span-3">
          <label htmlFor="service" className="sr-only">Service</label>
          <select id="service" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.Parent}</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="billing" className="sr-only">Billing Mode</label>
          <select id="billing" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Annual</option>
            <option>Monthly</option>
            <option>One Off</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
           {props.Year.map((i) => <option>{i}</option> )} 
          </select>
        </div>
        <div className="col-span-1 text-center">
          <label htmlFor="quantity" className="sr-only">Quantity</label>
          <input type="number" id="quantity" value="1" className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center"/>
        </div>
        <div className="col-span-2 text-right">
          <span>R$ {Amount}</span>
        </div>
        <div className='flex flex-col'>
        <ul className='w-[300px]'>Services:</ul>
        {(selectOptions.find((i) => i.Name === Name).services.map((i) => i.Name) || []).map((i) => <li className='w-[300px]'>{i}</li>)}
        </div>
      </div>

    </div>
  );
}

export default PackageItem;