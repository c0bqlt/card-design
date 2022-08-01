import React from 'react';
import { useState } from 'react';
import ChangePasswordButton from './ChangePasswordButton';
import CurrentPasswordInput from './CurrentPasswordInput';
import NewPasswordInput from './NewPasswordInput';

const ChangePasswordForm = () => {
  const classes =
    'w-full rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40';
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
