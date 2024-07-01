import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none rounded w-full py-3 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline bg-primaryDark"
      />
    </div>
  );
};

export default Input;