import context from '../../../context/context';
import React, { useContext } from 'react';
function Card() {

    const { clientName } = useContext(context);
    const { proposalName } = useContext(context);
    const { state } = useContext(context);

    const signatoryCondition = (email) => {
        console.log(state)
        if(state.primarySignatory[0] === email){
      
          return <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Primary</span>
          
        }
      }

    return (
        <div className="flex justify-center">
            <div className="card size-1/2 flex mb-4 py-2 bg-white shadow-lg" >
                <div className="p-6 border-b-2 border-gray-200">
                    <h1 className='font-bold text-lg'>Send proposal for acceptance</h1>
                    <p> We'll save the proposal and then in the CRM you can send to all signatories for acceptance!</p>
                </div>

                <div className='p-6'>
                    <div>
                    <p className=''>
                        <span className='font-semibold'>Sending:</span> "{proposalName}" to {clientName}
                    </p>
                    </div>
                    {/* <div className='flex flex-row items-center gap-2'>
                        <span className='font-semibold'>Signatory: </span> {clientName}  
                    </div> */}
                    <div className=''>
                    {state.signatoryEmails.map((sign, index) =>(
                        <p className='flex flex-wrap'>
                             <span className='font-semibold pr-2'>Signatory {index+1}: </span>{clientName} - {sign}
                            <div className='pl-2'>          
                            {signatoryCondition(sign)}
                            </div>
                        </p>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;