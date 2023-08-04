import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      {/* this is the clerk.js developed component */}
      <SignIn></SignIn>
    </>
  );
};

export default SignInPage;
