import React, { useContext,useState } from 'react'
import context from '../../../../context/context'
import ServiceDescriptionItem from './ServiceDescriptionItem';

function ServiceItemModal({props}) {
  
  console.log(props)
  const [modalOptions, setModalOptions] = useState({
    Recurrence: props.props.Recurrence,
    paymentTerms: props.props.paymentTerms,
    usState: props.props.usState || '', 
    competenceYear: props.props.competenceYear || 2024, 
    executionYear: props.props.executionYear || 2024,
    providers: props.props.providers,
    Name:props.props.Name,
    Type:'service',
  });

  const { selectOptions, setSelectedOptions} = useContext(context)
  const {Name, Amount ,Recurrence, paymentTerms,index} = props.props
  const recurrenceValues = ['One Off','Annual','Monthly','Biannual','Quarterly']
  const year= [2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]
  const paymentTerm = [
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
  console.log(selectOptions)

  const handleSave = () => {

    const updatedOptions = [...selectOptions];

    updatedOptions[index] = {
      ...selectOptions[index], 
      ...modalOptions, 
    };

    setSelectedOptions(updatedOptions);

    console.log('new');
    console.log(selectOptions);
  };

  const handleOptionChange = (event) => {
    setModalOptions({
      ...modalOptions,
      [event.target.name]: event.target.value,
    });

  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-5/12 min-h-min flex flex-col self-center  text-base-content z-50">
      <div className="flex justify-between items-center mb-6 ">
        <div className="text-gray-800 font-semibold">{Name}</div>
        <div className=''>

        <button className={`bg-red-500 hover:bg-red-400 text-white font-semibold border border-gray-400 rounded shadow px-1`}>x</button>
        </div>
      </div>

        <div className='flex flex-wrap'>

        <div className="col-span-11 mb-2 w-1/2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Service Account</span>
          </div>
          <select  name='serviceAccount' className="select select-bordered" onChange={handleOptionChange}>
            <option selected>{""}</option>
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recurrence</span>
          </div>
          <select name='Recurrence' defaultValue={Recurrence} className="select select-bordered" onChange={handleOptionChange}>
          {recurrenceValues.map((recurrence) => (
            <option key={recurrence} value={recurrence}>
              {recurrence}
            </option>
          ))}
          </select>
          </label>
        </div>


        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Payment Term</span>
          </div>
          <select name='paymentTerms' defaultValue={paymentTerms} className="select select-bordered" onChange={handleOptionChange}>
          {paymentTerm.map((terms) => (
            <option key={terms} value={terms}>
              {terms}
            </option>
          ))}
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">US State</span>
          </div>
          <select defaultValue={selectOptions[index].usState} name='usState' className="select select-bordered" onChange={handleOptionChange}>
          {usStates.map((states) => (
            <option key={states} value={states}>
              {states}
            </option>
          ))}
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Competence Year</span>
          </div>
          <select defaultValue={selectOptions[index].competenceYear} name='competenceYear' className="select select-bordered" onChange={handleOptionChange}>
          {year.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Execution Year</span>
          </div>
          <select defaultValue={selectOptions[index].executionYear} name='executionYear' className="select select-bordered" onChange={handleOptionChange}>
          {year.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
          </select>
          </label>
        </div>

        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Providers</span>
          </div>
          <select name='providers' defaultValue={props.props.providers} className="select select-bordered" onChange={handleOptionChange}>
          {providers.map((provider) => (
            <option key={provider} value={provider}>
              {provider}
            </option>
          ))}
          </select>
          </label>
        </div>
        <div className="col-span-1 mb-2 w-1/2">

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <label className="input input-bordered flex items-center ">
            $
            <input type="text" name='Amount' className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center" placeholder="Amount" defaultValue={Amount} onChange={handleOptionChange}/>
          </label>
          </label>
        </div>
      </div>
      <div className='pt-4'>

          <ServiceDescriptionItem props={index} />
      </div>
      <div className='p-2 flex justify-end'>

      <button className={`bg-white hover:bg-green-500 text-gray-800 font-semibold border border-gray-400 rounded shadow px-6 `} onClick={handleSave} >Save</button>
      </div>

    </div>
  );
}

export default ServiceItemModal;