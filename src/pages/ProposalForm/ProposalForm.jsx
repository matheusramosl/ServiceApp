import React, { useContext, useState } from 'react';
import context from '../../context/context';
import { useNavigate } from 'react-router-dom';

function ProposalForm() {
  const [state,setState] = useState({
    proposalName: '',
    clientType: '',
    signatory: '',
    signatoryEmails: []
  })
  const {setProposalName} = useContext(context)
  let navigate = useNavigate();
  const submitBtn = () => {
    setProposalName(state.proposalName)
    navigate('/services')
  }
  const handleChange = ({target}) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }
  const addSigntory = () => {
    if(state.signatory) {
      setState({
        ...state,
        signatoryEmails: [...state.signatoryEmails, state.signatory],
        signatory: ''
      })
    }
  }
  const removeSigaory = (str) => {
    setState({
      ...state,
      signatoryEmails: state.signatoryEmails.filter((i) => i !== str ),
    })
  }
  console.log(state);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/6">
      <div className="mb-4">
        <label htmlFor="proposalName" className="block text-sm font-medium text-gray-700">Proposal name</label>
        <input type="text" id="proposalName" name='proposalName' placeholder="Untitled Proposal" value={state.proposalName} onChange={(e) => handleChange(e) } className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Client Type</label>
        <select onChange={(e) => handleChange(e)} name='clientType' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option name='' value=''>Select Client Type</option>
          <option name='lead'>Lead</option>
          <option name='contact' >Contact</option>
        </select>
      </div>

    {state.clientType && (state.clientType === 'Lead' ?       <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Lead</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option>Select Lead</option>
        </select>
      </div> : <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Contact</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option>Select Contact</option>
        </select>
      </div>)}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Signatory</label>
        <div className="mb-4 flex justify-between">
        <input type="text" id="signatory" name='signatory' placeholder="Signatory Email" value={state.signatory} onChange={(e) => handleChange(e) } className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
        <button onClick={() => addSigntory()} className='text-blue-700'>+</button>
      </div>
      </div>
      {state.signatoryEmails.map((i,index) => <div key={index} className="mb-4 flex justify-between">
        <span className="block text-sm font-medium text-gray-700">{i}</span>
        <button onClick={() => removeSigaory(i)}>x</button>
      </div>)}

      

      <div className="flex items-center justify-end">
        <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => submitBtn()}>Submit</button>
      </div>

    </div>
  );
}

export default ProposalForm;