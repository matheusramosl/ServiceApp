import React, { useContext, useState } from 'react'
import context from '../../context/context'
import ServiceItemModal from '../Services/ServiceItemModal'

function ServiceItem({props}) {
  const {Name, Amount} = props
  const { selectOptions} = useContext(context)
  const {setServiceType} = useContext(context)
  return (
    <div className="bg-white p-4 shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-800 font-semibold">{Name} </div>
        <div className="text-gray-800 font-semibold flex pr-8">
        <button className="w-4 h-4 text-gray-500 hover:text-gray-700 focus:outline-none " onClick={()=>document.getElementById('my_modal_5').showModal()}>More...</button>
        <dialog id="my_modal_5" className="modal items-center justify-items-end ">
              <div className="modal-box h-4/6 ">

                <form className='flex 'method="dialog">
                {selectOptions.filter((i) => i.Type === 'service').length > 0 ? selectOptions.filter((i) => i.Type === 'service').map(({Name, Amount}) => <ServiceItemModal props={{Name, Amount }} />) : <p className='ml-10'>No Service Selected</p>}
                  <button className="w-4 h-4 text-gray-500 hover:text-gray-700 focus:outline-none " onClick={() => setServiceType('service')}>X</button>
                </form>
              </div>
            </dialog>
        </div>
        
      </div>
      <div className="grid grid-cols-8 gap-4 items-center">
        <div className="col-span-3">
          <label htmlFor="service" className="sr-only">Service</label>
          <select id="service" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Parent Account</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="billing" className="sr-only">Billing Mode</label>
          <select id="billing" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Reccurence</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Year</option>
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