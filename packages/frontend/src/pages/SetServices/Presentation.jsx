import React, { useContext } from 'react'
import Navbar from '../../components/NavBar'
import StepsBar from '../../components/StepsBar'
import Total from '../../components/TotalSection'
import context from '../../context/context'
import ServicesComponent from './Services/ServicesComponent'
import PackagesComponent from './Packages/PackagesComponent'
import ServiceBtn from './Services/components/ServiceBtn'
import PackageBtn from './Packages/components/PackageBtn'

export default function Presentation() {
  const {setSelectedOptions,setServiceType,serviceType,selectOptions} = useContext(context)

  const getTotal = () => {
    if (Array.isArray(selectOptions)) {
      console.log(selectOptions)
      const allServices = selectOptions.filter((i) => i.Type === 'service').reduce((acc, curr) => curr.Amount + acc, 0);
      const allPackages = selectOptions.filter((i) => i.Type === 'package').reduce((acc, curr) => curr.Amount + acc, 0);
      return allPackages + allServices;
    } else {
      // Handle the case where selectOptions is not an array (optional)
      console.error('selectOptions is not an array in Presentation component');
      return 0; // Or return a default value
    }
} 

  const verifyComponent = () => {
    switch (serviceType) {
      case 'all': 
          return (<div className='w-11/12'>
          <ServicesComponent  />
          <PackagesComponent  />
          </div>);
        case 'service': 
          return (<div className='w-11/12'>
          <ServicesComponent  />
          <div className='w-11/12 flex justify-start p-4 ps-14'>
          {/* <PackageBtn /> */}
          </div>
          </div>);
        case 'package':
          return (<div className='w-11/12'>
          <PackagesComponent  />
          <div className='w-11/12 flex justify-start p-4 ps-14'>
          <ServiceBtn />
          </div>
          </div>);
        default:
          return (
          
          <div className='w-11/12 flex justify-center align-items-center'> 
            <div className="flex flex-col w-5/12">

              <div className='flex flex-col p-8'>
                <div role="status" class="animate-pulse">
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                    <div class="flex items-center justify-center mt-4">
                        <svg class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                        <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                        <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
              </div>
    
              <label className="text-xl text-center pb-4">Add services to build your proposal</label>
              <div class="md:indent-8">
              <p className="text-center text-sm">Search and select services from your Service library. If you don’t see the one you want, you can create a new one.</p>
              </div>

              <div className='w-12/12 flex justify-center align-items-center py-6 pl-10'>
                <div className='px-8'>
                <ServiceBtn /> 
                </div>
                <div className='px-8'>
                {/* <PackageBtn /> */}
                </div>
              </div>

            </div>  
          </div>
          );
    }
}

const verifyTotal = () => {
  if(serviceType){
    return <Total props={getTotal()}/>
  }
}

const resetBtnCondition = () => {
  if(serviceType !== ''){

    return <button onClick={() => resetButton()} className=" w-1/12 self-center transition-all bg-drummond-primary text-white hover:bg-drummond-secondary-400 font-bold rounded py-2 px-4 ">Reset</button>
    
  }
}

  const resetButton = () => {
    setServiceType('')
    setSelectedOptions([])

  }

  return (
    <div className='flex flex-col gap-10 bg-gray-100 w-screen min-h-screen h-auto'>
      <Navbar />
      <StepsBar />
      <div>
        <div className='flex justify-evenly items-center'>
          {verifyComponent()}
        </div>
      </div>
      {resetBtnCondition()}
      {verifyTotal()}
    </div>
  )
}
