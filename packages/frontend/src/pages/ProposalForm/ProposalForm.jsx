import React, { useContext } from 'react';
import context from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { handleZohoRequest } from '../../requests/handleZohoRequests';

function ProposalForm() {

  const {setProposalName,state,setState} = useContext(context)
  const {setClientName} = useContext(context)
  let navigate = useNavigate();
  const submitBtn = () => {
    setProposalName(state.proposalName)
    setClientName(state.clientName)
    navigate('/services')
  }
  const handleChange = async ({target}) => {
    let result = []
    if(target.value === 'Contact'){
      const contacts = await handleZohoRequest('contacts')
      result = contacts.contacts

    }
    if(target.value === "Lead"){
      const leads = await handleZohoRequest('leads')
      result = leads.leads

    }

    if(target.value === 'Lead' || target.value === 'Contact') {
      setState({
        ...state,
        [target.name]: target.value,
        [target.value]: result,

      })
    } else {
      setState({
        ...state,
        [target.name]: target.value,
        
      })
    }
  }
  const addClient = ({target}) => {
    if(state.clientType === 'Lead' || state.clientType === 'Contact' ) {
      setState({
        ...state,
        [target.name]: target.value,
        signatoryEmails: state[state.clientType].find((search) => target.value.includes(search.Last_Name))?.Email ? [state[state.clientType].find((search) => target.value.includes(search.Last_Name)).Email] : [],
        clientName: target.value,
        clientId: state[state.clientType].find((search) => target.value.includes(search.Last_Name))?.Email ? state[state.clientType].find((search) => target.value.includes(search.Last_Name)).id : '',
      })

    } else {
      setState({
        ...state,
        [target.name]: target.value,
      })
    }

  }
  const addSigntory = () => {
    if(state.signatory) {
      setState({
        ...state,
        signatoryEmails: [ state.signatory, ...state.signatoryEmails],
        signatory: ''
      })
    }
  }
  const removeSigaory = (item) => {
    setState({
      ...state,
      signatoryEmails: state.signatoryEmails.filter((stateValue) => stateValue !== item ),
    })
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/6">
      <div className="mb-4">
        <label htmlFor="proposalName" className="block text-sm font-medium text-gray-700">Proposal name</label>
        <input type="text" id="proposalName" name='proposalName' placeholder="Untitled Proposal" value={state.proposalName} onChange={(e) => handleChange(e) } className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Client Type</label>
        <select onChange={(change) => handleChange(change)} name='clientType' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option name='' value=''>Select Client Type</option>
          <option name='lead'>Lead</option>
          <option name='contact' >Contact</option>
        </select>
      </div>

    {state.clientType && (state.clientType === 'Lead' ?       <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Lead</label>
        <select name='client' onChange={(change) => addClient(change)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option value=''>Select Lead</option>
          {state.Lead.map((lead,index) => <option key={index}>{`${lead.First_Name} ${lead.Last_Name}`}</option>)}
        </select>
      </div> : <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Contact</label>
        <select name='client' onChange={(change) => addClient(change)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option value=''>Select Contact</option>
          {state.Contact.map((contact, index) => <option key={index} >{`${contact.First_Name} ${contact.Last_Name}`}</option>)}

        </select>
      </div>)}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Signatory</label>
        {state.signatoryEmails.map((stateValue,index) => <div key={index} className="mb-4 flex justify-between">
        <span className="block text-sm font-medium text-gray-700">{stateValue}</span>
        <button onClick={() => removeSigaory(stateValue)}>x</button>
      </div>)}
        <div className="mb-4 flex justify-between">
          
        <input type="text" id="signatory" name='signatory' placeholder="Signatory Email" value={state.signatory} onChange={(change) => handleChange(change) } className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
        <button onClick={() => addSigntory()} className='text-blue-700'>+</button>
      </div>
      </div>
      

      <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Currency</label>
        <select name='currency' value={state.currency} onChange={(change) => handleChange(change)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
          <option>USD</option>
          <option>BRL</option>
        </select>
      </div>
      

      <div className="flex items-center justify-end">
        <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-2 px-4 rounded" onClick={() => submitBtn()}>Submit</button>
      </div>

    </div>
  );
}

export default ProposalForm;