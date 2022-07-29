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
        className="border-solid border-b-2 border-slate-700 focus:outline-none"
        onChange={handleNameChange}
      />
    </div>
  );
};

export default NameInput;
