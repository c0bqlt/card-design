import React from 'react';

const CurrentPasswordInput = ({ currentPassword, values, setValues, classes }) => {
  const handleCurrentPasswordChange = (e) => {
    setValues({
      ...values,
      currentPassword: e.target.value,
    });
  };

  return (
    <div className="flex flex-column">
      <label>
        Current password:
        <input
          type="password"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          className={classes}
        />
      </label>
    </div>
  );
};

export default CurrentPasswordInput;
