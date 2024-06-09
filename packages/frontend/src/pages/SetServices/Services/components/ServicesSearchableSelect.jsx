import React, { useContext,useState, useEffect } from 'react'
import Select from 'react-select'
import context from '../../../../context/context'

export default function ServicesSearchableSelect(props){
  const { selectOptions,setSelectedOptions,state} = useContext(context)

  const [modalOptions, setModalOptions] = useState({
    serviceAccount: ''
  });

  const handleOptionChange = (event) => {
    console.log(event)
    console.log(props)
    const updatedServiceAccount = event.value;
    const updatedAccountInput = 'serviceAccount';

    setModalOptions({
      ...modalOptions,
      [updatedAccountInput]: updatedServiceAccount,
    });

    const updatedOptions = [...selectOptions];

    updatedOptions[props.props.index] = {
        ...updatedOptions[props.props.index], 
        [updatedAccountInput]: updatedServiceAccount  
    };

    setSelectedOptions(updatedOptions);

    console.log('new');
    console.log(updatedOptions);

  };

  const MyComponent = () => (
    <Select 
    options =  {props.props.select}
    onChange = {handleOptionChange}
    value = {{value: state.serviceAccId[0], label: state.serviceAccName[0]} }
    />
  )
  return (
    <div>{MyComponent()}</div>
  )
}
