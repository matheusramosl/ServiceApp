import React, { useContext } from 'react'
import context from '../../../../context/context'

export default function ServicePackageItem({props}) {
    const {Name, Description, packageName} = props
    const {setServiceStatePackage, serviceStatePackage, selectOptions, setSelectedOptions} = useContext(context)

    const removeService = () => {
        const newServicesObj = serviceStatePackage.filter((state) => state.Name !== Name)
        const find = selectOptions.find((finds) => finds.Name === packageName)
        const filtered = selectOptions.filter((filters) => filters.Name !== packageName)
        setSelectedOptions([...filtered, {...find, services:newServicesObj}])
        setServiceStatePackage(newServicesObj);       
    }


  return (
<div className='flex justify-between items-center'>
<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-sm font-medium">
    {Name}
    </div>
    <div className="collapse-content"> 
      <p>{Description}</p>
    </div>
  </div>
</div>
</div>

  )
}
