import React, { useContext,useState, useEffect } from 'react'
import DrawerServices from './components/DrawerServices'
import DropdownMenu from '../../../components/MoreComponent'
import context from '../../../context/context'
import { handleZohoRequest } from '../../../requests/handleZohoRequests'
import ServicesSearchableSelect from './components/ServicesSearchableSelect'

function ServiceItem({props}) {

  // console.log('achando props')
  // console.log(props)

  const {Name, Amount, Recurrence, Parent,serviceAccount} = props
  const { selectOptions} = useContext(context)
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

    fetchAccounts();
  }, []);
 
  const select = optionsAcc.accounts.map((account, index) => ({value:account.Account_Name?.name, label: account.Account_Name?.name}))
  
  return (
    <div className="bg-white p-4 border shadow m-3"
       onMouseEnter={() => setIsVisible(true)}
       onMouseLeave={() => setIsVisible(false)}
    >
      <div className="flex justify-between items-center mb-4 py-2 ">
           
        <div className="text-gray-800 font-semibold ">{Name} </div>
        <div className="text-gray-800 font-semibold flex pr-8">
        <div className='pl-6'>
        {isVisible && (
        <DropdownMenu props={props} />
        )}
        </div>
        </div>
      </div>
        <div className="grid grid-cols-8 gap-4 items-center  py-2 border ">
          <label htmlFor="service" className="col-span-3 px-1">Servce Account </label>
          <label htmlFor="billing" className="col-span-1">Recurrence</label>
          <label className="col-span-1">Competence Year</label>
          <label htmlFor="quantity" className="col-span-1 text-center">Quantity</label>
        </div>
      <div className="grid grid-cols-8 gap-4 items-center py-2 border">
        <div className="col-span-3">
          <ServicesSearchableSelect
           props = {select}
          />
          {/* <select id="service" className="rounded form-seleict block w-full mt-1 border-gray-300 shadow-sm" >

            {optionsAcc.accounts.map((account, index) => (
                <option key={index} value={account.Account_Name?.name}>
                  {account.Account_Name?.name}
                </option>
              ))}
            </select> */}
        </div>
        <div className="col-span-1">
          <select id="billing" defaultValue={selectOptions[props.index].Recurrence} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
          {recValues.map((recurrence) => (
            <option key={recurrence} value={recurrence}>
              {selectOptions[props.index].Recurrence || recurrence}
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1">
          <select id="price"  defaultValue={selectOptions[props.index].competenceYear|| 2024} className="rounded form-select block w-full mt-1 border-gray-300 shadow-sm">
          {year.map((year) => (
            <option key={year} value={year}>
              {selectOptions[props.index].competenceYear || year}
            </option>
          ))}
          </select>
        </div>
        <div className="col-span-1 text-center">
          <input type="number" id="quantity" defaultValue="1" className="rounded form-input mt-1 block w-full border-gray-300 shadow-sm text-center"/>
        </div>
        <div className="col-span-2 text-right text-xl px-8">
          <span>R$ {selectOptions[props.index].Amount}</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;