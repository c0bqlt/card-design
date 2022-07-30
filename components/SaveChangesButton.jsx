import React from 'react';

const SaveChangesButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Changes have been sucessfully saved!');
  };

  return (
    <div className="flex flex-row">
      <button
        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline pr-10"
        onClick={handleClick}
      >
        Save Changes
      </button>
    </div>
  );
};

export default SaveChangesButton;
