import React, { useState, useContext, useEffect } from 'react';
import Context from '../../../../context/context';
import { handleZohoRequest } from '../../../../requests/handleZohoRequests';

const ServiceBtn = () => {
    const { selectOptions, setSelectedOptions, setServiceType, state } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro
  
    useEffect(() => {
        getAllServices();
    }, []);

    const getAllServices = async () => {
        setLoading(true);
        setError(null);
        try {
            const services = await handleZohoRequest('services');
            if (services && Array.isArray(services.services)) {
                const servicesMapped = services.services.map((service) => ({
                    Name: service.Product_Name || 'Name',
                    id: service.id || '',
                    Amount: service.Unit_Price || '0',
                    Type: 'service',
                    description: service.Description || '',
                    Recurrence: service.Recurrence || 'One Off', 
                    Parent: service.Service_Account || 'Service_Account',
                    serviceAccount: state.serviceAccId[0] ||'',
                    paymentTerms: service.Payment_Terms1 || 'Upon delivery of draft report',
                    usState: service.US_State || '',
                    competenceYear: service.Competence_Year || '2024',
                    executionYear: service.Execution_Year || '2024',
                    providers: service.Provider_Receiver || 'Drummond CPA LLC',
                    quantity: 1
                }));
                setOptions(servicesMapped);
            } else {
                throw new Error('Invalid service data format');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to load services');
        } finally {
            setLoading(false);
        }
    };

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUserSelect = (selectedService) => {
        setSelectedOptions([...selectOptions, selectedService]);
        setIsModalOpen(false);
        setServiceType('service');
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
                            {loading ? (
                                <div role="status" class="flex items-center justify-center">
                                <svg aria-hidden="true" class="flex items-center justify-center w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                <span class="sr-only">Loading...</span>
                                </div>
                            ) : error ? (
                                <div>{error}</div> // Exibir mensagem de erro
                            ) : (
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
                            )}
                        </div>
                        {/* <button className="close-modal" onClick={handleCloseModal}>Close</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceBtn;
