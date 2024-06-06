// import React, { useContext } from 'react';
// import context from '../../../../context/context';

// const ServiceBtn = () => {
//     const { setServiceType, serviceType } = useContext(context); 

//     const submitBtn = () => {
//         if(serviceType === ''){
//             setServiceType('service'); 
//         }else{
//             setServiceType('all'); 
//         }
//     };

//   return (
//     <div className="flex items-center justify-end">
//       <button className="bg-drummond-primary hover:bg-drummond-secondary-400 text-white font-bold py-1 px-4 rounded" onClick={() => submitBtn()}>
//         Service
//       </button>
//     </div>
//   );
// };


// export default ServiceBtn;

import React, { useState, useContext, useEffect } from 'react';
import Context from '../../../../context/context';
import { handleZohoRequest } from '../../../../requests/handleZohoRequests'

const AddServiceBtn = () => {
    const { selectOptions, setSelectedOptions, setServiceType } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
        getAllServices();
    }, []);

    const getAllServices = async () => {
        const serviços = await handleZohoRequest('services');
        const servicesMapped = serviços.services.map((service) => ({
            Name: service.Product_Name || 'Name',
            id: service.id || '',
            Amount: service.Unit_Price || '0',
            Type: 'service',
            description: service.Description || '',
            Recurrence: service.Recurrence || 'One Off', 
            Parent: service.Service_Account || 'Service_Account',
            serviceAccount: {} || 'Select Servcie Account',
            paymentTerms: service.Payment_Terms1 || 'Upon delivery of draft report',
            usState: service.US_State || '',
            competenceYear: service.Competence_Year || '2024',
            executionYear: service.Execution_Year || '2024',
            providers: service.Provider_Receiver || 'Drummond CPA LLC',
            quantity: 1
        }));
        setOptions(servicesMapped);
    };

    const openModal = () => {
      if (isModalOpen === true) {
        setIsModalOpen(false);  
      }else{
        setIsModalOpen(true);
      }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUserSelect = (selectedService) => {
        setSelectedOptions([...selectOptions, selectedService]);
        setIsModalOpen(false);
        setServiceType('service');
      console.log('click botão')
      console.log(selectOptions)
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredOptions = options.filter(option =>
        option.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="">
      
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow px-6 "
                onClick={openModal}
            >
                + Add Service
            </button>
            
            {isModalOpen && (
                <div className="flex justify-center">
                    <div className="modal-content">
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-input"
                        />
                        <div className="service-list-container">
                        <ul className="service-list">
                            {filteredOptions.map(service => (
                                <li
                                    key={service.id}
                                    className="service-list-item"
                                    onClick={() => handleUserSelect(service)}
                                >
                                    {service.Name}
                                </li>
                            ))}
                        </ul>
                        </div>
                        {/* <button className="close-modal" onClick={handleCloseModal}>Close</button> */}
                    </div>
                </div>
                
            )}
        </div>
    );
};

export default AddServiceBtn;