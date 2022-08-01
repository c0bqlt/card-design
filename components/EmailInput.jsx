import React, { useState } from 'react';

const EmailInput = (props) => {
  const [email, setEmail] = useState(props.email);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   alert('Email succesfully changed!');
  // };

  return (
    <div>
      <input
        type="email"
        value={email}
        className="w-full rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
        onChange={handleEmailChange}
      />
      {/* <button
        className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline mt-2"
        onClick={handleClick}
      >
        Change email
      </button> */}
    </div>
  );
};

export default EmailInput;
