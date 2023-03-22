import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProviders, getSession, signIn } from "next-auth/react";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result: any = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      console.log(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>Login | Goodreads Clone</title>
      </Head>

      <div
        style={{
          borderRadius: "4px",
          position: "relative",
          padding: "14px 18px",
        }}
      >
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Goodreads</h1>
          <h1 className="text-2xl font-bold mb-4">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link href="/signup">
              <button className="text-blue-500 hover:underline">Sign Up</button>
            </Link>
          </p>
        </div>

        <div
          id="legalTextRow"
          className="a-row a-spacing-top-medium a-size-small"
        >
          By creating an account, you agree to the Goodreads{" "}
          <a href="https://www.goodreads.com/about/terms">Terms of Service</a>{" "}
          and{" "}
          <a href="https://www.goodreads.com/about/privacy">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}
