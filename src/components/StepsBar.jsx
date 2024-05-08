import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
export default function StepsBar() {
  let navigate = useNavigate();
  const {pathname} = useLocation()
console.log(pathname);
  return (
    <div className='flex items-center justify-evenly'>
    <div className="flex w-1/12 ml-10 mb-5 ">
        {
          pathname.includes('services') &&
          <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/")}>Back</button>
        }
      </div>
      <ul className="steps w-full">
        <li className="step step-primary">General</li>
        <li className={pathname.includes('services') ? "step step-primary" : "step"}>Services</li>
        <li className="step">Presentation</li>
        <li className="step">Send</li>
      </ul>
      <div className="w-1/12">
        {
          !pathname.includes('services') &&
          <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/services")}>Next</button>
        }
      </div>
    </div>
  )
}
