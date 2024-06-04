import { useState } from 'react';
import context from './context';

export default function Provider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [proposalName, setProposalName] = useState('Untitled Proposal')
  const [clientName, setClientName] = useState('...')
  const [state,setState] = useState({
    proposalName: '',
    clientName:'',
    clientid:'',
    clientType: '',
    signatory: '',
    signatoryEmails: [],
    Lead: [],
    Contact: [],
    currency: 'USD'
  })

  const [recurrenceValues] = useState(['One Off','Annual','Monthly','Biannual','Quarterly'])

  // const recurrenceValues = ['One Off','Annual','Monthly','Biannual','Quarterly'];

  const year= [2021,2022,2023,2024,2025,2026,2027,2028,2029,2030];

  const paymentTerms = [
    'Upon EL Signature',
    'Upon Service Delivery',
    'Upon Initiated Services',
    'Upon delivery of draft report',
    'In 30 days from signature',
    '70% Due upon signature of this Service Order and 30% in 30 days from signature',
    '40% Upon approval of the service order 30% 30 days thereafter 30% 60 days thereafter',
    '50% Due upon signature of this Service Order and 50% in 30 days from signature',
    '50% Due upon signature of this Service Order and 50% in 90 days from signature',
    '50% Due upon signature of this Service Order and 50% in the service delivery',
    '60% Due upon signature of this Service Order and 40% in 30 days from signature',
  ];

  const usStates = [
    "",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  const providers = [
    'Drummond Advisors LLC',
    'Drummond Consulting LLC',
    'Drummond Consultoria CPA Ltda',
    'Drummond CPA LLC',
    'Drummond Legal Advisors PLLC',
    'Drummond Outsourcing Ltda',
    'Drummond Sociedade de Advogados',
    'Drummond Ventures LLC',
  ]



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


  const value = {
    darkMode,
    setDarkMode,
    recurrenceValues,
    options,
    setOptions,
    selectOptions, setSelectedOptions,
    selectOptionsPackage, setselectOptionsPackage,
    serviceType, setServiceType,
    packageType, setpackageType,
    proposalName, setProposalName,
    clientName, setClientName,
    modalInfos, setModalInfos,
    optionsPackage, setOptionsPackage,
    serviceStatePackage, setServiceStatePackage,
    state,setState
  };
  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
}