import React from 'react';

const NewPasswordInput = ({ values, setValues, newPassword, newPasswordConfirm, classes }) => {
  const handleNewPasswordChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-column">
      <label>
        New passsword:
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
          className={classes}
        />
      </label>
      <label>
        Confirm new password:
        <input
          type="password"
          name="newPasswordConfirm"
          value={newPasswordConfirm}
          onChange={handleNewPasswordChange}
          className={classes}
        />
      </label>
    </div>
  );
};

export default NewPasswordInput;
