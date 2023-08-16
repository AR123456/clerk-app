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
  const handleSubmit = async (e) => {
    e.eventDefault();
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        // get from state
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        password,
      });
      // Send mail
    } catch (error) {
      console.log(error);
    }
  };
  //Verify User Email Code
  const onPressVerify = async (e) => {};

  return (
    <>
      <div className="border p-5 rounded" style={{ width: "500px" }}>
        {" "}
        <h1 className="text-2xl mb-4"> Register</h1>
        {/* not the situation where user signed up and has now been sent code to verify */}
        {!pendingVerification && (
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required={true}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
          </form>
        )}
        {/* form to submit verify code */}
        {pendingVerification && (
          <div>
            <form className="space-y-4 md:space-y-6">
              <input
                value={code}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Verification Code..."
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                type="submit"
                onClick={onPressVerify}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Verify Email
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterPage;
