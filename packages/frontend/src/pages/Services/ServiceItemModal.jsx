import React from 'react';

function ServiceItemModal({props}) {
  const {Name, Amount} = props
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/6 min-h-min flex flex-col self-center  text-base-content z-50">
      <div className="flex justify-between items-center mb-6 ">
        <div className="text-gray-800 font-semibold">{Name}</div>
        
      </div>

        <div className='flex flex-wrap'>


        <div className="col-span-11 mb-2 w-1/2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Service Account</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.serviceAccount}</option>
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recurrence</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.Recurrence}</option>
          </select>
          </label>
        </div>


        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Payment Term</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.paymentTerms}</option>
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">US State</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.usState}</option>
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Competence Year</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.competenceYear}</option>
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Execution Year</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.executionYear}</option>
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Providers</span>
          </div>
          <select className="select select-bordered">
            {props.providers.map((i) => <option>{i}</option>)}
          </select>
          </label>
        </div>
        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            $
            <input type="text" className="grow" placeholder="Amount" value={Amount} />
          </label>
          </label>
        </div>
      </div>

    </div>
  );
}

export default ServiceItemModal;