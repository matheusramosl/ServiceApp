import { useState } from 'react';
import context from './context';

export default function Provider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [options, setOptions] = useState([
    'aaaaaa',
    'bbbbbb',
    'ccccccc',
  ]);
  const [selectOptions, setSelectedOptions] = useState([
  ])
  const [serviceType, setServiceType] = useState('')

  const value = {
    darkMode,
    setDarkMode,
    options,
    setOptions,
    selectOptions, setSelectedOptions,
    serviceType, setServiceType
  };
  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
}