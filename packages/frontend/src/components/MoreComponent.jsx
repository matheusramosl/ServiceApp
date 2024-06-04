import React, { useState } from 'react';
import DrawerServices from '../pages/SetServices/Services/components/DrawerServices'

function DropdownMenu(props) {
    
  const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <div className="absolute inline-block text-left">

      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm bg-gray-400 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v.01M12 12v.01M12 18v.01"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 top-7 left-4 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="pl-2" role="none">
        <div className='pl-1 pt-2 '>
              <DrawerServices props={{...props ,type:'service'}} />
        </div>
     <div className=''>
        <a href="delete" className="text-red-700 block px-1 py-2 text-sm flex items-center" role="menuitem" tabIndex="-1" id="menu-item-0">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12" />
                <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
            </svg>
            <span>Delete</span>
        </a>
    </div>

            
          </div>
        </div>
      )}
    
    </div>

  );
}

export default DropdownMenu;
