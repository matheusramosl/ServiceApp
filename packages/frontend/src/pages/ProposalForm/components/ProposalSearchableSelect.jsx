import React, {useContext} from 'react'
import Select from 'react-select'

export default function ProposalSearchableSelect(props){

  const MyComponent = () => (
    <Select 
    options = {props.props}
    />
  )
  return (
    <div>{MyComponent()}</div>
  )
}