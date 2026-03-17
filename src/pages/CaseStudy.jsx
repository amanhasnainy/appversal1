import React from 'react';
import { useParams } from 'react-router-dom';
import BajajFinserv from './case-studies/bajaj-finserv/BajajFinserv';
import VikerGames from './case-studies/viker-games/VikerGames';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CaseStudy = () => {
  const { slug } = useParams();

  let content = null;

  if (!slug) {
    content = <div className="p-8">No case study specified.</div>;
  } else {
    switch (slug) {
      case 'bajaj-finserv':
        content = <BajajFinserv />;
        break;
      case 'viker-games':
        content = <VikerGames />;
        break;
      default:
        content = (
          <div className="p-8">
            <h2 className="text-xl font-semibold">Case study not found</h2>
            <p className="text-sm text-gray-600 mt-2">No case study matches the slug: {slug}</p>
          </div>
        );
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-transparent">
        <div className="max-w-full mx-auto px-2 md:px-2 py-0 pb-0">{content}</div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
