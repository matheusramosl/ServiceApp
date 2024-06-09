import React, { useContext } from 'react'
import context from '../context/context'

function Total({props}) {

    const annualTotalCalc = (arr) =>{
     
        const date = new Date().getMonth();
        let totalAnnual = 0;
        let soma = 0;
        let month = 0;
     
        let annualValue = 0;
     
    arr.forEach(element => {
       const amount = parseFloat(element.amount);
       console.log(amount)
        if(element.recurrence === "One Off" || element.recurrence === "Annual" ){
            totalAnnual = amount
        }
        else if(element.recurrence === "Monthly"){
            month = (11 - date) + 1 ;
              totalAnnual = amount * month;
        }
        else if(element.recurrence === "Quarterly"){
            month = (11 - date) + 1 ;
            totalAnnual = Math.round(month / 3)*amount;
        }
        else if(element.recurrence === "Biannual"){
            console.log(date)
            totalAnnual = date < 5 ? amount * 2 : amount;
        }
        else{
            totalAnnual = amount;
        }
            soma += totalAnnual;
    });
    console.log('soma')
    console.log(soma)
    return parseFloat(soma).toFixed(2);
    }

    const {state} = useContext(context)
    console.log('total')
    console.log(props)
    const total = parseFloat(props.totalSelect).toFixed(2);
    const annualTotal = annualTotalCalc(props.objServices);

  return (
        <div className='fixed bottom-0 right-3 flex flex-col bg-white p-4 border shadow mx-12 divide-y-4 divide-neutral-300'> 
            <div className='py-2'>
            <label htmlFor="service" className="col-span-3 px-1 pr-12 text-xl">Subtotal</label>
                <subtotal className="text-gray-500 place-self-end text-xl pl-5"> {state.currency === 'BRL'? 'R$': '$' }{total}</subtotal>
            </div>
            <div className='divide-dashed md:divide-solid py-2 '>
            <label htmlFor="service" className="col-span-3 px-1 pr-9 text-xl">Annual Total</label>
                <annualtotal className="text-gray-500 place-self-end text-xl"> {state.currency === 'BRL'? 'R$': '$' }{annualTotal}</annualtotal>
            </div>
        </div>
    
  );
}

export default Total;