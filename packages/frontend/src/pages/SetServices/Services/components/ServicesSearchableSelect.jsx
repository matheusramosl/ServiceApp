import React, { useContext,useState, useEffect } from 'react'
import Select from 'react-select'
import context from '../../../../context/context'

export default function ServicesSearchableSelect(props){
  const { selectOptions,setSelectedOptions,state} = useContext(context)

  const [modalOptions, setModalOptions] = useState({
    serviceAccount: ''
  });

  let valueDefault = {value: state.serviceAccId[0], label: state.serviceAccName[0]};

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
    valueDefault = {value: event.value, label: event.label};
    console.log('new');
    console.log(valueDefault);
    console.log(updatedOptions);

  };

  const MyComponent = () => (
    <Select 
    options =  {props.props.select}
    onChange = {handleOptionChange}
    defaultValue = {valueDefault}
    />
  )
  return (
    <div>{MyComponent()}</div>
  )
}
