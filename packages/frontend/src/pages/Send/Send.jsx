import React from 'react';
import Navbar from '../../components/NavBar'
import StepsBar from '../../components/StepsBar'
import Card from '../Send/components/Card'

function Send() {

    return (
        <div className='flex flex-col gap-10 bg-gray-100 w-screen min-h-screen h-auto'>
            <Navbar />
            <StepsBar />
            <Card/>
        </div>
    )
}
export default Send;