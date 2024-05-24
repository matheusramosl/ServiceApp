import React from 'react';

function ServiceItemModal({props}) {
  const {Name, Amount} = props
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/6 min-h-min flex flex-col self-center  text-base-content z-50">
      <div className="flex justify-between items-center mb-6 ">
        <div className="text-gray-800 font-semibold">{Name}</div>
        
      </div>
      <div className="items-center ">
        <div className="col-span-11 mb-6">
          <label htmlFor="service" className="sr-only">Service</label>
          <select id="service" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.serviceAccount}</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="billing" className="sr-only">Billing Mode</label>
          <select id="billing" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.Recurrence}</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.paymentTerms}</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.usState}</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.competenceYear}</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.executionYear}</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            {props.providers.map((i) => <option>{i}</option>)}
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="price" className="sr-only">Price</label>
          <select id="price" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.quantity}</option>
          </select>
        </div>

        <div className="col-span-2 text-right">
          <span>{`R$ ${Amount}`}</span>
        </div>
      </div>

    </div>
  );
}

export default ServiceItemModal;