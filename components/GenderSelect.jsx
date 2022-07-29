import React from 'react';

const GenderSelect = () => {
  return (
    <div>
      <label>
        Gender:
        <select className="w-20 border-2 border-slate-700 rounded-md focus:outline-none ml-2">
          <option value="male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
    </div>
  );
};

export default GenderSelect;
