import React from 'react';

const ChangePasswordButton = ({
  newPassword,
  newPasswordConfirm,
  currentPassword,
  values,
  setValues,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (newPassword === '' && newPasswordConfirm === '') {
      return;
    }
    if (currentPassword === '') {
      return alert('You must enter your current password!');
    }
    if (newPassword !== '' && newPasswordConfirm === '') {
      return alert('You must confirm your password!');
    }
    if (newPassword === '' && newPasswordConfirm !== '') {
      return alert('You must fill the "New password" field!');
    }
    if (newPassword !== newPasswordConfirm) {
      return alert('Passwords do not match!');
    }
    if (newPassword === newPasswordConfirm && currentPassword !== '') {
      setValues({
        ...values,
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
      });
      alert('You have succesfully changed your password!');
    }
  };

  return (
    <div className="flex flex-row">
      <button
        className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline mt-2"
        onClick={handleClick}
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePasswordButton;
