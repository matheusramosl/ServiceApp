import React, { useState } from 'react'
import DrawerServices from '../../Services/components/DrawerServices'
import DropdownMenu from '../../../../components/MoreComponent'

function ServiceItemPackage({props}) {
  const [isVisible, setIsVisible] = useState(false);
  const Year= [2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]
  const recValues = ['One Off','Annual','Monthly','Biannual', 'Quarterly']

  return (
    <div className="bg-white p-4 shadow m-3"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
      <div className="flex justify-between items-center">
      </div>
        <div className="grid grid-cols-6 gap-4 items-center  py-2 border ">
          <label htmlFor="service" className="col-span-3 px-1 pl-2">Servce</label>
          {/* <label htmlFor="billing" className="col-span-1">Recurrence</label> */}
          <label className="col-span-1">Year</label>
          <label htmlFor="quantity" className="col-span-1 text-center">Quantity</label>
          <div className="justify-self-end pr-8 pb-6">
          {/* <DrawerServices props={{...props, type:'service'}} /> */}
          {isVisible && (
          <DropdownMenu />
          )}
          </div>
        </div>
      <div className="grid grid-cols-6 gap-4 items-center py-2 border">
        <div className="col-span-3 pl-2">
        {props.service} 
        </div>
        {/* <div className="col-span-1">
          <select id="billing" defaultValue={props.options.Recurrence} className=" rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
          {recValues.map((recurrence) => (
            <option key={recurrence} value={recurrence}>
              {recurrence}
            </option>
          ))}
          </select>
        </div> */}
        <div className="col-span-1">
          <select id="year" defaultValue={2024} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
          {Year.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1 text-center">
          <input type="number" id="quantity" defaultValue="1" className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center"/>
        </div>
        <div className="col-span-2 text-right text-xl px-8">
        </div>
      </div>
    </div>
  );
}

export default ServiceItemPackage;