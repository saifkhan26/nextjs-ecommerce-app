'use client'
import { useState } from 'react';

export const Dropdown = ({ options, onSelect, label, containerStyles }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`${containerStyles} relative`}>
      <div className='ms-2 text-sm mb-1'>
        {label && label}
      </div>
      <button
        className={ `relative w-full block py-2 px-4 bg-white rounded-md text-left text-rich-blue ${selectedOption ? '' : 'text-opacity-30'} font-medium hover:bg-gray-300 focus:outline-none focus:bg-gray-300` }
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : 'Select an option'}
        <span className={ `absolute right-4 top-0 bottom-0 my-auto flex items-center justify-center  ${isOpen && '-scale-y-100'} transition-transform` }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute top-full-10 left-0 w-full bg-white rounded-md shadow-lg text-rich-blue">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

