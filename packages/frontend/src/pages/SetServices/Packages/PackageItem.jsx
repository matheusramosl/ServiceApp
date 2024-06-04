import React, { useContext,useState } from 'react'
import DrawerServices from '../Services/components/DrawerServices'
import DropdownMenu from '../../../components/MoreComponent'
import context from '../../../context/context'
import ServiceItemPackage from './components/ServiceItemPackage'

function PackageItem({props}) {
  const {Name, Amount, Recurrence} = props
  const {selectOptions} = useContext(context)
  const [isVisible, setIsVisible] = useState(false);
  const recValues = ['Annual','Monthly']


  return (
    <div className="bg-white p-4"
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-between items-center mb-4" >
        <div className="text-gray-800 font-bold italic text-xl">Package • {Name}
   
        </div>
        <div className="text-gray-800 font-semibold flex pr-8">
        {isVisible && (
          <DropdownMenu props={{...props, type:'package'}}/>
        // <DrawerServices props={{...props, type:'package'}} />
        )}
        </div>

      </div>
      <div className="grid grid-cols-8 gap-4 items-center border p-6">
        <div className="col-span-3">
          <label htmlFor="service" className="">Service Account</label>
          <select id="service" className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
            <option>{props.Parent}</option>
          </select>
        </div>
        <div className="col-span-3">
          <label htmlFor="billing" className="">Recurrence</label>
          <select id="billing" defaultValue={Recurrence} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
          {recValues.map((recurrence) => (
            <option key={recurrence} value={recurrence}>
              {recurrence}
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-2 text-right">
          <span>R$ {Amount}</span>
        </div>
        
      </div>
      <div className='flex flex-col'>
          {(selectOptions.find((i) => i.Name === Name).services.map((i) => i.Name) || []).map((i) => <ServiceItemPackage props={{service:i, options:props}} />)}
          </div>
    </div>
  );
}

export default PackageItem;