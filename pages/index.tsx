import React from 'react';
import { Head, Header, HeroArea, KeyFeatures, Footer } from './partials';

const App: React.FC<any> = () => {
  return (
    <>
      <Head title={'Samina Zafar'} />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <HeroArea />
        <KeyFeatures />
      </div>
      <Footer />
    </>
  );
};

export default App;
