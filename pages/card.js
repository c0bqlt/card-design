import React from 'react';
import ChangePasswordForm from '../components/ChangePasswordForm';
import DeleteAccountButton from '../components/DeleteAccountButton';
import EmailInput from '../components/EmailInput';
import GenderSelect from '../components/GenderSelect';
import Layout from '../components/Layout';
import NameInput from '../components/NameInput';
import ProfileImage from '../components/ProfileImage';
import SaveChangesButton from '../components/SaveChangesButton';

const Page = () => {
  return (
    <div>
      <Layout title="User profile">
        <div className="flex flex-row justify-between">
          <div className="flex flex-column gap-4 w-1/3">
            <label>
              Name:
              <NameInput name="John Doe" />
            </label>
            <label>
              Email:
              <EmailInput email="john_doe69@gmail.com" />
            </label>
            <ProfileImage source="https://imgs.search.brave.com/ixkysHRY5iLmIWyOdSmcmbZzPkRlck3G3XVYZkjr8MM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd2F2eWhh/aXJjdXQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzA3/L3Bpbi1ieS1qb2Fu/bmEta2V5c2Etb24t/aGFpcnN0eWxlcy1p/bi0yMDE5LWhhaXIt/c3R5bGVzLWJveS13/aXRoLWluZGlhbi1i/b3ktaGFpci1zdHls/ZS1zaW1wbGUuanBn/P2ZpdD0xNTc4JTJD/MjM3MCZzc2w9MQ" />
            <GenderSelect />
            <SaveChangesButton />
            <DeleteAccountButton />
          </div>
          <div className="w-1/2">
            <ChangePasswordForm />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page;
