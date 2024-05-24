import React from 'react';

function PackageItemModal({props}) {
  const {Name, Amount} = props
  console.log('props');
  console.log(props);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/6   min-h-full  text-base-content z-50">
      <div className="flex justify-between items-center mb-6 ">
        <div className="text-gray-800 font-bold">{Name}</div>
        
      </div>
      <div className="items-center ">
        {/* <div className="col-span-11 mb-6">
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
        </div> */}
        <div className="col-span-1 mb-6">
            <span>{props.description}</span>
        </div>
       <span className='w-[300px]'>Services:</span>
        {props.services.map((i) =>         <div className="col-span-1 mb-6 ">
          <div className='flex justify-between'>
          <span className='font-bold'>{i.Name}</span>
          <span>{i.paymentTerm}</span>
          </div>
          <div>{i.Description}</div>
        </div>)}
        <div className="col-span-11 mb-6">
          <label htmlFor="service" className="sr-only">Parent Account</label>
          <select id="service" className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.Parent}</option>
          </select>
        </div>
        <div className="col-span-1 mb-6">
          <label htmlFor="year" className="sr-only">Year</label>
          <select id="year" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.Year}</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="currency" className="sr-only">Currency</label>
          <select id="currency" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.currency}</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="recurrence" className="sr-only">Recurrence</label>
          <select id="recurrence" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.recurrence}</option>
          </select>
        </div>

        <div className="col-span-1 mb-6">
          <label htmlFor="quantity" className="sr-only">Quantity</label>
          <select id="quantity" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.quantity}</option>
          </select>
        </div>

        <div className="col-span-2 text-right">
          <span>R$ {Amount}</span>
        </div>
      </div>

    </div>
  );
}

export default PackageItemModal;