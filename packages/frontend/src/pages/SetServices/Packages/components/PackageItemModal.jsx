import React, { useContext } from 'react';
import ServicePackageItem from '../../Services/components/ServicePackageItem';
import PackageDescriptionItem from './PackageDescriptionItem';
import context from '../../../../context/context';

function PackageItemModal({props}) {
  const {Name, Amount} = props
  const {serviceStatePackage} = useContext(context)
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-2/6  flex flex-col self-center  min-h-min text-base-content z-50">
      <div className="flex justify-between items-center mb-6 ">
        <div className="text-gray-800 font-extrabold">{Name}</div>
        
      </div>
      <div className="items-center ">
        <div className="col-span-1 mb-6">
            <span>{props.description}</span>
        </div>
       {/* <ul className='w-[300px]'>Services</ul> */}
        {/* {serviceStatePackage.map((state) =>  <ServicePackageItem props={{...state, packageName: Name}} /> )} */}
        <PackageDescriptionItem props={{...props, packageName: Name}} />
        
        <div className='flex justify-between flex-wrap'>

        
        <div className="col-span-11 mb-6 w-1/2">
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Service Account</span>
          </div>
          <select className="select select-bordered">
            <option selected>{props.Parent}</option>
          </select>
          </label>
        </div>
        
        <div className="col-span-1 mb-6 w-1/2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Year</span>
          </div>
          <select className="select select-bordered">
            {props.Year.map((year) => <option>{year}</option>)}
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-6 w-1/2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recurrence</span>
          </div>
          <select className="select select-bordered">
            <option>Monthly</option>
            <option>Annual</option>
            <option>One Off</option>
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

    </div>
  );
}

export default PackageItemModal;