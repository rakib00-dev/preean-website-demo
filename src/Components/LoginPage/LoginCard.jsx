import React from 'react';

const LoginCard = () => {
  return (
    <div className="w-full mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 border border-gray-200 shadow-xl text-gray-800 my-12">
      <div className="mb-8 text-center">
        <h1
          className="my-3 text-4xl font-bold"
          style={{ color: 'var(--black-primary)' }}
        >
          Sign In
        </h1>
        <p className="text-sm text-gray-600">Sign In to access your account</p>
      </div>
      <form noValidate="" action="" className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              required
              type="name"
              name="name"
              id="name"
              placeholder="Mr. Example Smith"
              className="w-full px-3 py-2 border rounded-md border-gray-300  text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300  text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md border-gray-300  text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="transition-all duration-300 w-full cursor-pointer px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50 hover:bg-blue-500"
            >
              Sign In
            </button>
          </div>
          <p className="px-6 text-md pt-2 text-center text-gray-600">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-blue-600"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
