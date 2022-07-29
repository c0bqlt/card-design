import React, { useState } from 'react';

const EmailInput = (props) => {
  const [email, setEmail] = useState(props.email);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        className="border-solid border-b-2 border-slate-700 focus:outline-none"
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default EmailInput;
