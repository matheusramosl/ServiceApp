import React, { useContext,useState, useEffect } from 'react'
import DrawerServices from './components/DrawerServices'
import DropdownMenu from '../../../components/MoreComponent'
import context from '../../../context/context'
import { handleZohoRequest } from '../../../requests/handleZohoRequests'

function ServiceItem({props}) {

  const [modalOptions, setModalOptions] = useState({
    Recurrence: props.Recurrence,
    competenceYear: props.competenceYear || 2024, 
    serviceAccount: {}
  });

  const {Name, Amount, Recurrence, Parent,serviceAccount} = props
  const { selectOptions,setSelectedOptions,state} = useContext(context)
  const [isVisible, setIsVisible] = useState(false);
  // console.log(selectOptions);
  const recValues = ['One Off','Annual','Monthly','Biannual', 'Quarterly']
  const year= [2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]
  const [optionsAcc, setOptionsAcc] = useState({accounts:[{}]})

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await handleZohoRequest('accounts');
      setOptionsAcc(accounts);
      console.log(accounts);
    };
    console.log('service item');
    console.log(selectOptions);
    console.log(props);

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
      ...modalOptions, 
    };

    setSelectedOptions(updatedOptions);

    console.log('new');
    console.log(selectOptions);

  };
 

  return (
    <div className="bg-white p-4 border shadow m-3"
       onMouseEnter={() => setIsVisible(true)}
       onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-end mb-4 pr-4">
           
        {/* <div className="text-gray-800 font-semibold ">{Name} </div> */}
        {/* <div className="text-gray-800 font-semibold flex pr-8"> */}
        <div className='pl-6 pr-4"'>
        {isVisible && (
        <DropdownMenu props={props} />
        )}
        </div>
        {/* </div> */}
      </div>
        {/* <div className="grid grid-cols-8 gap-4 items-center  py-2 border ">
          <label htmlFor="service" className="col-span-3 px-1">Servce Account </label>
          <label htmlFor="billing" className="col-span-1">Recurrence</label>
          <label className="col-span-1">Competence Year</label>
          <label htmlFor="quantity" className="col-span-1 text-center">Quantity</label>
        </div> */}
      <div className="grid grid-cols-8 gap-4 items-center  ">
        <div className="col-span-2">
        <div className="text-gray-800 font-semibold ">{Name} </div>
        </div>
        <div className="col-span-2">
          <select id="serviceAcc" name='serviceAccount' className="rounded form-seleict block w-full mt-1 border-gray-300 shadow-sm" >

          {optionsAcc.accounts.map((account, index) => (
              <option key={index} value={account.Account_Name?.name}>
                {account.Account_Name?.name || selectOptions[props.index].serviceAccount[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <select id="rec" name='Recurrence' defaultValue={selectOptions[props.index].Recurrence} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm" onChange={handleOptionChange}>
          {recValues.map((recurrence) => (
            <option key={recurrence} value={recurrence}>
              { selectOptions[props.index].Recurrence}
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1">
          <select id="year" name='competenceYear' defaultValue={selectOptions[props.index].competenceYear|| 2024} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm" onChange={handleOptionChange}>
          {year.map((year) => (
            <option key={year} value={year}>
              {selectOptions[props.index].competenceYear }
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1 text-center">
          <input type="number" name='quantity' defaultValue={selectOptions[props.index].quantity} className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center" onChange={handleOptionChange}/>
        </div>
        <div className="col-span-1 text-right text-xl px-8">
          <span>{state.currency === 'BRL'? 'R$': '$' } {selectOptions[props.index].Amount}</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;