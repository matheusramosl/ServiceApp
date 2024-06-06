import React, {useContext} from 'react'
import Select from 'react-select'
import context from '../../../../context/context'

export default function ServicesSearchableSelect(props){

  const MyComponent = () => (
    <Select 
    options =  {props.props}
    />
  )
  return (
    <div>{MyComponent()}</div>
  )
}
// const options = props.props.map((value, index) => (
//     { value: account.Account_Name?.name , label: account.Account_Name?.name }