import React, { useContext } from 'react';
import context from '../context/context';

function Navbar() {
  const {proposalName} = useContext(context)
  const {clientName} = useContext(context)
  return (
    <div className="bg-white px-4 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-gray-800 text-sm font-semibold">{clientName}</div>
        <div className="text-gray-600 text-sm">{proposalName}</div>
        <div className="text-blue-600 text-sm">New</div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">Not saved</span>
        <button className="text-gray-600 text-sm">Preview</button>
        <button className="text-gray-600 text-sm">Templates</button>
        <div className="relative">
          <button className="text-gray-600 text-sm">Save & close</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;