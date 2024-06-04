
function Total({props}) {
    const total = props;
    const annualTotal = total * 12;

  return (
        <div className='fixed bottom-0 right-3 flex flex-col bg-white p-4 border shadow mx-12 divide-y-4 divide-neutral-300'> 
            <div className='py-2'>
            <label htmlFor="service" className="col-span-3 px-1 pr-12 text-xl">Subtotal</label>
                <subtotal className="text-gray-500 place-self-end text-xl pl-5"> R${total}.00</subtotal>
            </div>
            <div className='divide-dashed md:divide-solid py-2 '>
            <label htmlFor="service" className="col-span-3 px-1 pr-6 text-xl">Annual Total</label>
                <annualtotal className="text-gray-500 place-self-end text-xl"> R${annualTotal}.00</annualtotal>
            </div>
        </div>
    
  );
}

export default Total;