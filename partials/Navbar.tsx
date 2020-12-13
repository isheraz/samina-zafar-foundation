import React from 'react';

const Navbar: React.FC<any> = () => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 flex items-center">
        <a href="/">SAMINA ZAFAR FOUNDATION</a>
      </div>
      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        <a
          href="/"
          className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Home
        </a>
        <a
          href="/#vision"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Vision
        </a>

        <a
          href={'/volunteers'}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Volunteer
        </a>

        <a
          href="/gallery"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Gallery
        </a>

        <a
          href="/collabration"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Collabration
        </a>
        <a
          href="/free-camp-seminars"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Free Camps &amp; Seminars
        </a>
      </div>
    </div>
  );
};

export default Navbar;
