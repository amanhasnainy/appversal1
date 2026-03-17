import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import TrustedBrands from '../components/TrustedBrands';
import Services from '../components/Services';
import Journey from '../components/Journey';
import ProvenResults from '../components/ProvenResults';
import SuccessStories from '../components/SuccessStories';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-[#53020C] to-[#FF233F]">
      {/* Main Content Layer (Z-10) */}
      <div className="relative z-10 bg-[#FAFAFA] rounded-b-[80px] lg:rounded-b-[90px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <Navbar />
        <HomeHero />
        <TrustedBrands />
        <Services />
        <Journey />
        <ProvenResults />
        <SuccessStories />
      </div>

      {/* Sticky Footer Reveal Layer (Z-0) */}
      <div className="[@media(min-height:750px)]:sticky [@media(min-height:750px)]:bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </div>
  );
}
