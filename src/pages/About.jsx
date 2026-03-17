import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About AppVersal</h1>
          <p className="text-lg text-gray-600 mb-4">
            AppVersal is an award-winning, app-first company, running for over a decade, 
            doing all the heavy lifting required to push the world's biggest app brands 
            to reach their intended goal and beyond.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our mixed team of designers, engineers, writers, and data analysts help companies 
            and clients across borders optimize app visibility while boosting downloads and returns, 
            interchangeably growing their business faster than ever!
          </p>
          <p className="text-lg text-gray-600">
            We specialize in App Store Optimization (ASO), AI-powered solutions, user acquisition, 
            and app monetization strategies that deliver real results.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
