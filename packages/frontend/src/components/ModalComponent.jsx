import React, { useContext } from 'react'
import context from '../context/context'

export default function ModalComponent() {
  const {setServiceType} = useContext(context)
  return (
    <div>
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Select service type</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

      <form className='flex justify-around'  method="dialog">
        <button className="btn" onClick={() => setServiceType('service')}>Service</button>
        <button className="btn" onClick={() => setServiceType('package')}>Package</button>
      </form>
    
  </div>
</dialog>
    </div>
  )
}
