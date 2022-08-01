import React from 'react';
import { useState } from 'react';

const NameInput = (props) => {
  const [name, setName] = useState(props.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        className="w-full rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
        onChange={handleNameChange}
      />
    </div>
  );
};

export default NameInput;
