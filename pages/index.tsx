import React from 'react';
import { Head, Header, HeroArea, KeyFeatures, Team, Footer } from '../partials';

const App: React.FC<any> = () => {
  return (
    <>
      <Head title={'Samina Zafar'} />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <HeroArea />
        <Team />
        <KeyFeatures id="vision" />
      </div>
      <Footer />
    </>
  );
};

export default App;
