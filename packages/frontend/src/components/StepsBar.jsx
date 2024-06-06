import React, { useContext, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import context from '../context/context';
import { handlePostZohoRequest } from '../requests/handleZohoRequests'
import axios from 'axios';



export default function StepsBar() {
  let navigate = useNavigate();
  const {pathname} = useLocation()
  const {selectOptions, state, clientRequestType} = useContext(context)
  const [sendProposal, setSendProposal] = useState(true)

  const createProposal = async () => {
    const serviceArray = [];
    selectOptions.forEach((item) => {
      const serviceObject = {
        Service: item.id,
        Recurrence1: item.Recurrence,
        Effective_Year: item.competenceYear,
        Execution_Year: item.executionYear,
        Payment_Terms: item.paymentTerms,
        Unit_Price: item.Amount,
        Quantity: item.quantity,
        US_State: item.usState,
        Service_Provider: item.providers,
        Fee_Details: "",
        Description: item.description,
      };

      serviceArray.push(serviceObject);
    });
    
    const payload =  {
      "email": state.signatoryEmails[0],
      "servicesID": serviceArray.map((i) => i.Service),
      "userType": state.clientType
  }
  try {
    await axios.post('http://localhost:3001/proposal/createByEmail', payload)
    setSendProposal(false)
  } catch (error) {
    console.error(error);
  }
  }

const verifyNavigate = (type) => {
  if(type === 'next') {
    return !pathname.includes('services') ? '/services' : '/send'
  } else {
    return pathname.includes('services') ? '/' : '/services'
  }
}
  return (
    <div className='flex items-center justify-evenly'>
    <div className="flex w-1/12 ml-10 mb-5 ">
        {
          pathname !== '/' &&
          <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(verifyNavigate())}>Back</button>
        }
      </div>
      <ul className="steps w-full">
        <li className="step step-primary">General</li>
        <li className={(pathname.includes('services') || pathname.includes('send')) ? "step step-primary" : "step"}>Services</li>
        <li className={pathname.includes('send') ? "step step-primary" : "step"}>Send</li>
        {/* <li className="step">Send</li> */}
      </ul>
      <div className="w-1/12">
          {
            pathname.includes('services') &&
            <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(verifyNavigate('next'))}>Next</button>
          }
        {
          (pathname.includes('send') && selectOptions.length > 0) &&
          (sendProposal && <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => createProposal()}>Send</button>)
        }
      </div>
    </div>
  )
}
