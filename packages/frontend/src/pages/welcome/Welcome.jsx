import React, { useEffect } from 'react'
import StepsBar from '../../components/StepsBar'
import ProposalForm from '../ProposalForm/ProposalForm'
import NavBar from '../../components/NavBar'
import { handleZohoRequest } from '../../requests/handleZohoRequests'


export default function Welcome() {

  return (
    <div className='flex flex-col gap-10 bg-gray-100 w-screen h-screen'>
        <NavBar />
        <StepsBar />
        <div className='flex justify-center items-center h-50px w-full '>
            <ProposalForm />
        </div>
    </div>
  )
}
