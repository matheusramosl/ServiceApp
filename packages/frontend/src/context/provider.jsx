import { useState } from 'react';
import context from './context';

export default function Provider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [proposalName, setProposalName] = useState('Untitled Proposal')
  const [clientName, setClientName] = useState('...')
  const [clientRequestType, setClientRequestType] = useState('')
  const [state,setState] = useState({
    proposalName: '',
    clientName:'',
    clientid:'',
    clientType: '',
    signatory: '',
    primarySignatory:'',
    signatoryEmails: [],
    serviceAccName:'',
    serviceAccId:'',
    Lead: [],
    Contact: [],
    currency: 'USD'
  })

  const [recurrenceValues] = useState(['One Off','Annual','Monthly','Biannual','Quarterly'])


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
  const [optionsPackage, setOptionsPackage] = useState([])
  const [serviceStatePackage, setServiceStatePackage] = useState([])
  const [saved, setSaved] = useState(false)


  const value = {
    darkMode,
    setDarkMode,
    recurrenceValues,
    options,
    setOptions,
    selectOptions, setSelectedOptions,
    selectOptionsPackage, setselectOptionsPackage,
    saved, setSaved,
    serviceType, setServiceType,
    packageType, setpackageType,
    proposalName, setProposalName,
    clientName, setClientName,
    modalInfos, setModalInfos,
    optionsPackage, setOptionsPackage,
    serviceStatePackage, setServiceStatePackage,
    state,setState,
    clientRequestType, setClientRequestType
  };
  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
}