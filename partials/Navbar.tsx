import React from 'react';
import Link from 'next/link';

const Navbar: React.FC<any> = () => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
          SAMINA ZAFAR FOUNDATION
        </Link>
      </div>
      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        <a
          href={`${process.env.ASSET_PREFIX}/`}
          className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Home
        </a>
        <a
          href={`${process.env.ASSET_PREFIX}/#vision`}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Vision
        </a>

        <a
          href={`${process.env.ASSET_PREFIX}/volunteers`}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Volunteer
        </a>

        <a
          href={`${process.env.ASSET_PREFIX}/gallery`}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Gallery
        </a>

        <a
          href={`${process.env.ASSET_PREFIX}/collabration`}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Collabration
        </a>
        <a
          href={`${process.env.ASSET_PREFIX}/free-camp-seminars`}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
          Free Camps &amp; Seminars
        </a>
      </div>
    </div>
  );
};

export default Navbar;
