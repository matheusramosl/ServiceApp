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
                    <h1 className='font-bold text-lg'>Card</h1>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat harum facere, repellat soluta odit molestias reiciendis tempore natus ipsa nostrum fugiat ipsum unde provident voluptate nemo error possimus ipsam alias!</p>
                </div>

                <div className='p-6'>
                    <p className=''>
                        <span className='font-semibold'>Sending:</span> "{proposalName}" to {clientName}
                    </p>
                    <span>
                        <span className='font-semibold'>Signatory:</span> {clientName} - {state.signatoryEmails[0]}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Card;