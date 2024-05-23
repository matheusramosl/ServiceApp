import { useState } from 'react';
import context from './context';

export default function Provider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [proposalName, setProposalName] = useState('Untitled Proposal')
  const [options, setOptions] = useState([
    'aaaaaa',
    'bbbbbb',
    'ccccccc',
  ]);
  const [selectOptions, setSelectedOptions] = useState([
  ])
  const [selectOptionsPackage, setselectOptionsPackage] = useState([
  ])
  const [serviceType, setServiceType] = useState('')
  const [packageType, setpackageType] = useState('')
  const [modalInfos, setModalInfos] = useState({
    type:'',
    Amount: '',
    Name: ''
  })
  
  const value = {
    darkMode,
    setDarkMode,
    options,
    setOptions,
    selectOptions, setSelectedOptions,
    selectOptionsPackage, setselectOptionsPackage,
    serviceType, setServiceType,
    packageType, setpackageType,
    proposalName, setProposalName,
    modalInfos, setModalInfos
  };
  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
}