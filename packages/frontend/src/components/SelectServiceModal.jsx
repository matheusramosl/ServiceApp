import React, { useContext,useState } from 'react'
import context from '../context/context'

export default function ModalComponent({props}) {
    const { selectOptions, setSelectedOptions} = useContext(context)

    const [services, setServices] = useState('')
    const [options, setOptions] = useState([
  ])
  const handleChange = ({value}) => {
    setServices(value)
    setSelectedOptions([...selectOptions, options.find((i) => i.Name === services) ])
    setServices('');
}
  return (
    <div>
        <button className={`btn text-blue-600 hover:scale-105 hover:text-blue-800 py-4`} onClick={()=>document.getElementById('select_service_modal').showModal()}>+ Add service</button>
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Select service type</button> */}
<dialog id="select_service_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

  <div className='flex justify-between w-11/12 self-center'>
    <select className='w-1/4 rounded border border-gray-300 transition-colors hover:scale-105 hover:bg-gray-100' value={services} onChange={(e) => handleChange(e.target) } >
      <option value={''}>Select Service</option>
    {options.map((i) => <option value={i.Name} >{i.Name}</option>)}
    </select>
      
     
      </div>
    
  </div>
</dialog>
    </div>
  )
}
