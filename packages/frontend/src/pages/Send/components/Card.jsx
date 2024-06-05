import context from '../../../context/context';
import React, { useContext } from 'react';
function Card() {

    const {clientName} = useContext(context);
    const {proposalName} = useContext(context);
    const {signatoryEmails} = useContext(context);
    const {state} = useContext(context);
    return (
    <div className="carrd flex justify-center">
        <div className="card size-1/2 flex justify-between items-center mb-4 py-2 bg-white shadow-lg" >
            <div className="p-4 border-b-2 border-gray-200">
                <h1>Card</h1>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat harum facere, repellat soluta odit molestias reiciendis tempore natus ipsa nostrum fugiat ipsum unde provident voluptate nemo error possimus ipsam alias!</p>
            </div>

            <div>
                <span className='pb-5'>
                Sending: "{proposalName}" to {clientName}
                </span>
                <span>
                    Signatory: {clientName} - {state.signatoryEmails[0]}
                </span>
            </div>
        </div>
    </div>
    )
}
export default Card;