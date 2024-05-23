import React from 'react'
import StepsBar from '../../components/StepsBar'
import ProposalForm from '../ProposalForm/ProposalForm'
import NavBar from '../../components/NavBar'


export default function Welcome() {
  return (
    <div className='flex flex-col gap-10'>
        <NavBar />
        <StepsBar />
        <div className='flex justify-center items-center h-full w-full'>
            <ProposalForm />
        </div>
    </div>
  )
}
