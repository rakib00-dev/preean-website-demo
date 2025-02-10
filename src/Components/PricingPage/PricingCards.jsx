import { useState } from 'react';

const PricingCards = () => {
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);

  return (
    <section class="bg-white mx-auto w-full max-w-7xl ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto w-fit max-w-screen-md text-center mb-8 lg:mb-12">
          <div className="uppercase gap-2 flex justify-center items-center bg-gray-100 py-2 px-1 rounded-xl">
            <button className="uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg ">
              weekly
            </button>
            <button className=" relative uppercase font-extrabold cursor-pointer text-xs  py-2 px-4 rounded-xl md:text-lg ">
              monthly
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/save-10.svg"
                alt="save 10 percent on monthly purchess"
                className=" absolute hidden -top-13  md:block "
              />
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/small-save-10.svg"
                alt="save 10 percent on monthly purchess"
                className=" absolute -top-6 md:hidden"
              />
            </button>
            <button className=" relative uppercase font-extrabold cursor-pointer text-xs  py-2 px-4 rounded-xl md:text-lg ">
              quarterly
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/save-20.svg"
                alt="save 20 percent on monthly purchess"
                className=" absolute hidden -right-20 -top-13  md:block "
              />
              <img
                loading="lazy"
                src="./images/ourpricingpage/card-images/small-save-20.svg"
                alt="save 20 percent on monthly purchess"
                className=" absolute -top-6 md:hidden"
              />
            </button>
          </div>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  ">
            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
            <p class="font-light text-gray-500 sm:text-lg ">
              Best option for personal use & for your next project.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$29</span>
              <span class="text-gray-500 ">/month</span>
            </div>

            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span class="font-semibold">1 developer</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support: <span class="font-semibold">6 months</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span class="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
              Get started
            </a>
          </div>

          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  ">
            <h3 class="mb-4 text-2xl font-semibold">Company</h3>
            <p class="font-light text-gray-500 sm:text-lg ">
              Relevant for multiple users, extended & premium support.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$99</span>
              <span class="text-gray-500 ">/month</span>
            </div>

            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span class="font-semibold">10 developers</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support: <span class="font-semibold">24 months</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span class="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
              Get started
            </a>
          </div>

          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  ">
            <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p class="font-light text-gray-500 sm:text-lg ">
              Best for large scale uses and extended redistribution rights.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$499</span>
              <span class="text-gray-500 ">/month</span>
            </div>

            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span class="font-semibold">100+ developers</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support: <span class="font-semibold">36 months</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span class="font-semibold">36 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
