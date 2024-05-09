import React, { useContext, useState } from 'react';
import context from '../../context/context';
import { useNavigate } from 'react-router-dom';

function ProposalForm() {
  const [state,setState] = useState('')
  const {setProposalName} = useContext(context)
  let navigate = useNavigate();
  const submitBtn = () => {
    setProposalName(state)
    navigate('/services')
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/6">
      <div className="mb-4">
        <label htmlFor="proposalName" className="block text-sm font-medium text-gray-700">Proposal name</label>
        <input type="text" id="proposalName" placeholder="Untitled Proposal" value={state} onChange={({target}) => setState(target.value) } className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Client</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option>Space Ranger (demo client)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Signatory</label>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Space Ranger (demo client)</span>
          <button className="text-indigo-600 hover:text-indigo-900 text-sm">Edit</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Proposal start date</label>
        <div className="flex items-center">
          <input type="radio" name="startDate" value="onAcceptance" className="mr-2"/> On acceptance
          <input type="radio" name="startDate" value="specificDate" className="mr-2 ml-4"/> On a specific date
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Minimum contract length</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option>12 months</option>
        </select>
      </div>

      <div className="flex items-center justify-end">
        <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => submitBtn()}>Submit</button>
      </div>

    </div>
  );
}

export default ProposalForm;