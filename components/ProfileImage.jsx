import React from 'react';
import Pill from './Pill';

const ProfileImage = (props) => {
  return (
    <div>
      <img src={props.source} alt="Profile Image" className="h-20 w-20 rounded-full mb-2" />
      <Pill className="cursor-pointer text-xs rounded-full px-3 py-1 font-medium leading-tight bg-gray-200 mr-2">
        Upload Image
      </Pill>
      <span className="text-neutral-700 font-light">No file chosen</span>
    </div>
  );
};

export default ProfileImage;
