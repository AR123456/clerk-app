import React from "react";

// using clerks out of box userprofile component
import { UserProfile } from "@clerk/nextjs";
const ProfilePage = () => {
  return (
    <>
      <UserProfile />
    </>
  );
};

export default ProfilePage;
