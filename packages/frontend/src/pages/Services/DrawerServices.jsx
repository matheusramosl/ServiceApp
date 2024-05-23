import React, { useContext } from 'react'
import ServiceItemModal from './ServiceItemModal'
import PackageItemModal from './PackageItemModal'
import context from '../../context/context'

export default function DrawerServices({props}) {
    const {modalInfos, setModalInfos} = useContext(context)
    const {type} = modalInfos
  return (
    <div className="drawer drawer-end ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button w-4 h-4 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setModalInfos(props)}>More...</label>
  </div> 
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    {/* <div className="bg-white shadow-lg rounded-lg p-8 w-3/6   min-h-full  text-base-content">
    <div className="bg-white p-6 shadow w-11/12 ">
      <div className="flex justify-between items-center mb-6 ">
        <div className="text-gray-800 font-semibold">{Name}</div>
        
      </div>
      <div className="items-center ">
        <div className="col-span-11 mb-6">
          <label htmlFor="service" className="sr-only">Service</label>
          <select id="service" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Service Account</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="billing" className="sr-only">Billing Mode</label>
          <select id="billing" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Reccurence</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Payment Terms</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>US State</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Competence Year</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Execution Year</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Service Provider</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>Quantity</option>
          </select>
        </div>

        <div className="col-span-2 text-right">
          <span>R$ {Amount}</span>
        </div>
      </div>

    </div>
    </div> */}
    {type === 'service' &&<ServiceItemModal props={{...modalInfos}}/>}
    {type === 'package' && <PackageItemModal props={{...modalInfos}}/>}

  </div>
</div>
  )
}
