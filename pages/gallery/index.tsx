import React from 'react';
import { Head, Header, HeroArea, KeyFeatures, Footer } from '../../partials';

const App: React.FC<any> = () => {
  return (
    <>
      <Head title={'Samina Zafar'} />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Image Gallery
              </h2>
              <p className="mt-5 text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.In
                elementum, quam ultrices dignissim imperdiet, neque mi fermentum
                felis, at condimentum ligula orci id est. Nulla consectetur
                tortor vel justo efficitur luctus. Sed vel lobortis tortor.
                Donec consequat mi vel dolor laoreet, sed pellentesque turpis
                posuere. Cras ut magna fermentum, tincidunt felis sit amet,
                elementum dui. Aliquam non tincidunt sem. Donec vel vestibulum
                nibh. Ut eu nisi porttitor felis dapibus dignissim eu id lacus.
                Donec commodo purus at scelerisque eleifend.
              </p>
            </div>
            <div className="mt-10 w-full max-w-xs">
              <div className="flex flex-wrap justify-center">
                <img
                  src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                  alt="..."
                  className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 container m-auto p-9">
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4 mb-4">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="demo-images"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
            <div className="w-6/12 sm:w-4/12 px-4 mb-4">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="demo-images"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
            <div className="w-6/12 sm:w-4/12 px-4 mb-4">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="demo-images"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
            <div className="w-6/12 sm:w-4/12 px-4 mb-4">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="demo-images"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
            <div className="w-6/12 sm:w-4/12 px-4 mb-4">
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="demo-images"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
