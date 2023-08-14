//creating a custom register page - add this to middleware.js public routes
//client side useState ect so use client
"use client";
// react use state
import { useState } from "react";
// clerks signup
import { useSignUp } from "@clerk/nextjs";
// next js router
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  //component state
  // destructure
  const { isLoaded, signUp, setActive } = useSignUp();
  // form fields
  const [email, setEmail] = useState("");
  //   to use first and last name enable them on clerk dashboard
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  // Form submit
  const handleSubmit = async (e) => {};
  //Verify User Email Code
  const onPressVerify = async (e) => {};

  return (
    <>
      <div className="border p-5 rounded" style={{ width: "500px" }}>
        {" "}
        <h1 className="text-2xl mb-4"> Register</h1>
      </div>
    </>
  );
};

export default RegisterPage;
