import React, { useContext } from 'react';
import context from '../../../../context/context';

const ServiceBtn = () => {
    const { setServiceType, serviceType } = useContext(context); 

    const submitBtn = () => {
        if(serviceType === ''){
            setServiceType('service'); 
        }else{
            setServiceType('all'); 
        }
    };

  return (
    <div className="flex items-center justify-end">
      <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-1 px-4 rounded" onClick={() => submitBtn()}>
        Service
      </button>
    </div>
  );
};

// const MyParentComponent = () => {
//   const [serviceType, setServiceType] = useState('initialServiceType');

//   return (
//     <div>
//       <ServiceBtn serviceType={serviceType} setServiceType={setServiceType} />
//     </div>
//   );
// };

export default ServiceBtn;