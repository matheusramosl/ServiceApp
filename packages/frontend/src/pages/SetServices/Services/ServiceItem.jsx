import React, { useContext,useState, useEffect } from 'react'
import DrawerServices from './components/DrawerServices'
import DropdownMenu from '../../../components/MoreComponent'
import context from '../../../context/context'
import { handleZohoRequest } from '../../../requests/handleZohoRequests'
import ServicesSearchableSelect from './components/ServicesSearchableSelect'

function ServiceItem({props}) {

  const [modalOptions, setModalOptions] = useState({
    Recurrence: props.Recurrence,
    competenceYear: props.competenceYear || 2024
  });

  const {Name, Amount, Recurrence, Parent,serviceAccount} = props
  const { selectOptions,setSelectedOptions,state} = useContext(context)
  const [isVisible, setIsVisible] = useState(false);
  const recValues = ['One Off','Annual','Monthly','Biannual', 'Quarterly']
  const year= ['2021','2022','2023','2024','2025','2026','2027','2028','2029','2030']
  const [optionsAcc, setOptionsAcc] = useState({accounts:[{}]})
  

  useEffect(() => {
    const fetchAccounts = async () => {
    if(state.clientType === 'Contact'){
      const clients = await handleZohoRequest('accounts');
      setOptionsAcc(clients);
      console.log(clients);
    }else{
        const clients = state.Lead;
        setOptionsAcc(clients);
        console.log(clients);
    };

  }


    fetchAccounts();
  }, []);

  const handleOptionChange = (event) => {
    setModalOptions({
      ...modalOptions,
      [event.target.name]: event.target.value,
    });

    const updatedOptions = [...selectOptions];

    updatedOptions[props.index] = {
      ...selectOptions[props.index], 
      [event.target.name]: event.target.value, 
    };

    setSelectedOptions(updatedOptions);
    console.log("select options")
    console.log(selectOptions)

  };
 
  const select = state.clientType === 'Contact' ? optionsAcc.accounts.map((account, index) => ({value:account.id, label: account.Account_Name})) : state.Lead.map((lead, index) => ({value:lead.id, label: `${lead.First_Name || ""} ${lead.Last_Name}`}))
  
  return (
    <div className="bg-white p-4 border shadow m-3"
       onMouseEnter={() => setIsVisible(true)}
       onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-end mb-4 pr-4">
        <div className='pl-6 pr-4"'>
        {isVisible && (
        <DropdownMenu props={props} />
        )}
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4 items-center  ">
        <div className="col-span-2">
        <div className="text-gray-800 font-semibold ">{Name} </div>
        </div>

      
        <div className="col-span-2">
          <ServicesSearchableSelect
           props = {{select,index:props.index}}
           />
           </div>

        <div className="col-span-1">
          <select id="rec" name='Recurrence' value={selectOptions[props.index].Recurrence} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm" onChange={handleOptionChange}>
          {recValues.map((recurrence) => (
            <option key={recurrence} value={recurrence}>
              { recurrence  }
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1">
          <select id="year" name='competenceYear' value={selectOptions[props.index].competenceYear || 2024} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm" onChange={handleOptionChange}>
          {year.map((year) => (
            <option key={year} value={year}>
              {year }
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1 text-center">
          <input type="number" name='quantity' defaultValue={selectOptions[props.index].quantity} className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center" onChange={handleOptionChange}/>
        </div>
        <div className="col-span-1 text-right text-xl px-8">
          <span>{state.currency === 'BRL'? 'R$': '$' } {parseFloat(selectOptions[props.index].Amount).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;