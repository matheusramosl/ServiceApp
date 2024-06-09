import React, {useContext} from 'react'
import Select from 'react-select'
import context from '../../../context/context';
import { handleZohoRequest } from '../../../requests/handleZohoRequests';

export default function ClientSearchableSelect(props){
console.log('props client')
console.log(props)
  const {state,setState} = useContext(context)
  const {setClientName, setClientRequestType} = useContext(context)


  const addClient = (target) => {
    console.log(target)
    // const clientName = 
    if(state.clientType === 'Contact' ) {
      setState({
        ...state,
        // [target.label]: target.label,
        signatoryEmails: state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Email ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Email] : [],
        primarySignatory: state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Email ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Email] : '',
        clientName: target.label,
        clientId: target.value,
        serviceAccName:state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Account_Name?.name ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Account_Name?.name] : '',
        serviceAccId:state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Account_Name?.id ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Account_Name?.id] : '',
      })
      console.log('state')
      console.log(state)
    } else if(state.clientType === 'Lead'){
      setState({
        ...state,
        // [target.label]: target.label,
        signatoryEmails: state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Email ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Email] : [],
        primarySignatory: state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Email ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Email] : '',
        clientName: target.label,
        clientId: target.value,
        serviceAccName:state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Last_Name ? [`${state[state.clientType].find((search) => target.label.includes(search.Last_Name)).First_Name || ""} ${state[state.clientType].find((search) => target.label.includes(search.Last_Name)).Last_Name}`] : '',
        serviceAccId:state[state.clientType].find((search) => target.label.includes(search.Last_Name))?.Last_Name ? [state[state.clientType].find((search) => target.label.includes(search.Last_Name)).id] : '',
      })
      console.log('state')
      console.log(state)
    } 
     else {
      setState({
        ...state,
        [target.label]: target.label,
      })
    }
console.log(state)
  }

  const MyComponent = () => (
    <Select 
    options =  {props.props}
    onChange = {addClient}
    name='clientName'
    value = {{value:state.clientId, label: state.clientName} }
    />
  )
  return (
    <div>{MyComponent()}</div>
  )
}