import React, { useContext } from 'react';
import context from '../../../../context/context';

const PackageBtn = () => {
  const { setServiceType, serviceType } = useContext(context); 

    const submitBtn = () => {
      if(serviceType === ''){
        setServiceType('package'); 
    }else{
        setServiceType('all'); 
    }
    };
    
  return (
    <div className="flex items-center justify-end">
      <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-1 px-4 rounded" onClick={() => submitBtn()}>
        Package
      </button>
    </div>
  );
};


export default PackageBtn;