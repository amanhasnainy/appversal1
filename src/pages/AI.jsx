import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function AI() {
  return (
    <div className="bg-[#FAFAFA]">
      <Navbar />
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            APPVERSAL AI: PIONEERING ENTERPRISE AI SOLUTIONS
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the next generation of app intelligence with AI agents that redefine user engagement. 
            Automate personalized interactions, drive higher retention, and gain real-time insights into user behavior.
          </p>
          <Link to="/contact">
            <button className="bg-[#D4F771] hover:bg-[#d9ff9e] text-black font-medium py-3 px-8 rounded-full transition-colors">
              GET STARTED
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Intelligent Automation</h3>
            <p className="text-gray-600">
              Leverage AI agents to automate complex tasks and provide intelligent recommendations 
              to your users based on their behavior and preferences.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Analytics</h3>
            <p className="text-gray-600">
              Get actionable insights into user behavior with our advanced AI-powered analytics 
              platform. Make data-driven decisions faster.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalization at Scale</h3>
            <p className="text-gray-600">
              Deliver personalized experiences to millions of users simultaneously. Our AI learns 
              and adapts to individual preferences in real-time.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Predictive Insights</h3>
            <p className="text-gray-600">
              Predict user behavior and market trends before they happen. Stay ahead of the competition 
              with AI-driven forecasting.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
