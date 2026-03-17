import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Get in touch with our team to discuss how we can help optimize your app's performance and drive growth.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#D4F771] hover:bg-[#c9ff56] text-black font-bold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Email:</strong> support@appversal.com
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> San Francisco, USA
              </p>
              <p className="text-gray-600">
                <strong>Follow us:</strong> LinkedIn - <a href="https://www.linkedin.com/company/appversal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Appversal</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
