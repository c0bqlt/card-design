import React from 'react';

const DeleteAccountButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert('This feature has yet to be implemented!');
  };
  return (
    <button
      className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
      onClick={handleClick}
    >
      Delete Account
    </button>
  );
};

export default DeleteAccountButton;
