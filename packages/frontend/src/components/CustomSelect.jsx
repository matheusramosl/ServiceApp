import React, { useState } from 'react';

const CustomSelect = (props) => {
  const {options = ["Option 1", "Option 2", "Option 3", "Option 4"]} = props
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);


  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-100 active:text-gray-700"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setButtonClick(!buttonClick)}
          >
            Select Options
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 10.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {buttonClick &&       <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {options.map(option => (
            <div
              key={option}
              onClick={() => handleOptionToggle(option)}
              className={`${
                selectedOptions.includes(option)
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-900'
              } block px-4 py-2 text-sm cursor-pointer`}
              role="menuitem"
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                checked={selectedOptions.includes(option)}
                readOnly
              />
              {option}
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
};

export default CustomSelect;
