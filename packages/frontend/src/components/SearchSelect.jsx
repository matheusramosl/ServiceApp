import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/context';
import AsyncSelect from 'react-select/async';

const AsyncSearchSelect = ( props ) => {
    const { selectOptions, setSelectedOptions, setServiceType } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
console.log(props)

const option = props.props.map((service, index) => (
    { value: service.Name, label: service.Name }
));

const handleUserSelect = (selectedService) => {
    setSelectedOptions([...selectOptions, selectedService]);
    setIsModalOpen(false);
    setServiceType('service');
  console.log('click botão')
  console.log(selectOptions)
};

// [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]
//   {recValues.map((recurrence) => (
//     <option key={recurrence} value={recurrence}>
//       { selectOptions[props.index].Recurrence}
//     </option>
//   ))}
  const filterColors = (inputValue) => {
    return option.filter((values) =>
      values.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  return (
    <AsyncSelect cacheOptions loadOptions={loadOptions} onClick={() => handleUserSelect(option)} defaultOptions={option} />
  );
};

export default AsyncSearchSelect;