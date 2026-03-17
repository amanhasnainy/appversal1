import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Navbar/>
      <HomeHero/>
      <Team/>
      <Footer/>
     
    </div>
  );
}
