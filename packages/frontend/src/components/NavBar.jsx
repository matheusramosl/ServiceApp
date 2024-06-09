import React, { useContext } from 'react';
import context from '../context/context';

function Navbar() {
  const {proposalName} = useContext(context)
  const {clientName} = useContext(context)
  const {saved} = useContext(context)
  console.log('saved!')
  console.log(saved)
  return (
    <div className="bg-white px-4 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-gray-800 text-sm font-semibold">{clientName}</div>
        <div className="text-gray-600 text-sm">{proposalName}</div>
        {saved === true ? <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Saved</span>
: <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</span>}
      </div>
      <div className="flex items-center space-x-4">
        {/* <span className="text-gray-600 text-sm">Not saved</span>
        <button className="text-gray-600 text-sm">Preview</button>
        <button className="text-gray-600 text-sm">Templates</button>
        <div className="relative">
          <button className="text-gray-600 text-sm">Save & close</button>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;