import React from 'react';
import { useState } from 'react';
import ChangePasswordButton from './ChangePasswordButton';
import CurrentPasswordInput from './CurrentPasswordInput';
import NewPasswordInput from './NewPasswordInput';

const ChangePasswordForm = () => {
  const classes = 'border-solid border-b-2 border-slate-700 focus:outline-none';
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  return (
    <form>
      <CurrentPasswordInput
        values={values}
        setValues={setValues}
        currentPassword={values.currentPassword}
        classes={classes}
      />
      <NewPasswordInput
        values={values}
        setValues={setValues}
        newPassword={values.newPassword}
        newPasswordConfirm={values.newPasswordConfirm}
        classes={classes}
      />
      <ChangePasswordButton
        currentPassword={values.currentPassword}
        newPassword={values.newPassword}
        newPasswordConfirm={values.newPasswordConfirm}
        values={values}
        setValues={setValues}
      />
    </form>
  );
};

export default ChangePasswordForm;
