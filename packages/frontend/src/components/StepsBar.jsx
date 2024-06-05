import React, { useContext, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import context from '../context/context';
import { handlePostZohoRequest } from '../requests/handleZohoRequests'



export default function StepsBar() {
  let navigate = useNavigate();
  const {pathname} = useLocation()
  console.log(pathname);
  const {selectOptions, state} = useContext(context)

  const createProposal = async () => {
  
    console.log({selectOptions, state})

    const payload = {
      Name:state.proposalName,
      Contact:[{
      name:state.clientName,
      id:state.clientId}],
      Currency:state.currency,
      Email:state.signatoryEmails,
      Proposal_Services:[{
        asas:selectOptions
      }],
    }
    // const newProposal = await handlePostZohoRequest('create', selectOptions);
    // console.log(newProposal)
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
          <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => createProposal()}>Send</button>
        }
      </div>
    </div>
  )
}
