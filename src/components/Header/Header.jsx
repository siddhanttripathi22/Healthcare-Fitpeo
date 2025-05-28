import React from 'react';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import userImage from '../../assets/user.png';

const Header = () => {
  return (
    <header className="bg-white  p-4 flex items-center justify-between">
      
      <div className="flex items-center bg-indigo-50 rounded-lg px-3 py-2 w-full max-w-2xl">
        <FiSearch className="text-indigo-400 mr-2" /> 
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-sm text-indigo-700 w-full" 
        />
         <button className="relative text-indigo-400 hover:text-indigo-700">
          <FiBell className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex items-center space-x-4 md:space-x-5">
        
        <div className="bg-cyan-600 text-cyan rounded-full">
      <img
         src={userImage}
         alt="User Siddhant"
         className="w-8 h-8 md:w-9 md:h-9 object-cover border-cyan-700"
      />
     </div>

        <button
          className="bg-indigo-600 text-white p-2 rounded-lg" 
          aria-label="Add new"
        >
          <FiPlus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
export default Header;