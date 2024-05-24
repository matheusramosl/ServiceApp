import React from 'react'
import DrawerServices from './DrawerServices'

function ServiceItem({props}) {
  const {Name, Amount, Year, Recurrence, Parent} = props

  return (
    <div className="bg-white p-4 shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-800 font-semibold">{Name} </div>
        <div className="text-gray-800 font-semibold flex pr-8">
        <DrawerServices props={{...props, type:'service'}} />
        </div>
        
      </div>
      <div className="grid grid-cols-8 gap-4 items-center">
        <div className="col-span-3">
          <label htmlFor="service" className="sr-only">Service</label>
          <select id="service" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{Parent}</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="billing" className="sr-only">Billing Mode</label>
          <select id="billing" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{Recurrence}</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{Year}</option>
          </select>
        </div>
        <div className="col-span-1 text-center">
          <label htmlFor="quantity" className="sr-only">Quantity</label>
          <input type="number" id="quantity" value="1" className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center"/>
        </div>
        <div className="col-span-2 text-right">
          <span>R$ {Amount}</span>
        </div>
      
      </div>
    </div>
  );
}

export default ServiceItem;