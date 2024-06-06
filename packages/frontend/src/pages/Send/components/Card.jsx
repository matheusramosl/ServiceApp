import context from '../../../context/context';
import React, { useContext } from 'react';
function Card() {

    const { clientName } = useContext(context);
    const { proposalName } = useContext(context);
    const { state } = useContext(context);
    return (
        <div className="flex justify-center">
            <div className="card size-1/2 flex mb-4 py-2 bg-white shadow-lg" >
                <div className="p-6 border-b-2 border-gray-200">
                    <h1 className='font-bold text-lg'>Send proposal for acceptance</h1>
                    <p> We'll send the proposal to all signatories for acceptance!</p>
                </div>

                <div className='p-6'>
                    <div>
                    <p className=''>
                        <span className='font-semibold'>Sending:</span> "{proposalName}" to {clientName}
                    </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <p>
                        <span className='font-semibold'>Signatory: </span> {clientName} - {state.signatoryEmails[0]}
                        </p>
                        <p className='bg-blue-400 w-min h-min text-xs rounded-md font-bold'>Primary</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;