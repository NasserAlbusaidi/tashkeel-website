"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { getSession, useSession} from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    signIn("credentials", {
      email,
      password,
      callbackUrl: `/profile`,
      redirect: false,
    }).then(function (result) {
      if (result.error !== null) {
        if (result.status === 401) {
          setLoginError(
            "Your username/password combination was incorrect. Please try again"
          );
        } else if (result.status === 403) {
          setLoginError(
            "Your account has been disabled. Please contact support."
          );
        }
        else {
          setLoginError(result.error);
        }
      } else {
        console.log('url is', result.url);
        router.push(result.url);
      }
    });
  };
  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
      <h1 className="m-12 text-4xl text-red-500"> Login </h1>
      <div className="w-full rounded-lg bg-gray-100 shadow sm:max-w-md">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className=" text-xl font-bold leading-tight tracking-tight text-black ">
            {" "}
            Sign in to Your Account
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {loginError && <div className="text-red-500">{loginError}</div>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                Your Email
              </label>
              <input
                className="my-2 w-full px-3 py-2 text-base text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                Password
              </label>
              <input
                className="my-2 w-full px-3 py-2 text-base text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-2 text-sm text-gray-900">
                  <label
                    htmlFor="remember_me"
                    className="font-medium text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}


// export async function getStaticProps(context) {
//   const session = await getSession(context);
//   if (session) {
//     return {
//       redirect: {
//         destination: "/profile",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }