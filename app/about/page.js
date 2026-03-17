// import AboutHero from "../components/AboutHero";
// import BrandCarousel from "../components/BrandCarousel";
// import Footer from "../components/Footer";
// import PartnershipImpact from "../components/PartnershipImpact";
// import ProjectSteps from "../components/ProjectSteps";
// import TestimonialSection from "../components/TestimonialSection";
// import WhyChooseUs from "../components/WhyChooseUs";


// export default function About() {
//     return (
//         <div>

//             <AboutHero />
//             <BrandCarousel />
//             <WhyChooseUs/>
//             <PartnershipImpact/>
//             <ProjectSteps/>
//             <TestimonialSection/>

        


           
//             <Footer />
//         </div>
//     );
// }


import Head from "next/head";
import AboutHero from "../components/AboutHero";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import PartnershipImpact from "../components/PartnershipImpact";
import ProjectSteps from "../components/ProjectSteps";
import TestimonialSection from "../components/TestimonialSection";
import WhyChooseUs from "../components/WhyChooseUs";

export const metadata = {
  title: "About AppVersal - App Marketing Company",
  description:
    "Learn more about Appversal, a leading app store optimization (ASO) agency. We help apps achieve higher visibility, growth, and success in competitive markets.",
  keywords:
    "Appversal, ASO, App Store Optimization, About, Mobile App Growth, App Marketing, Mobile Visibility",
  authors: [{ name: "Appversal", url: "https://www.appversal.com" }],
  robots: "index, follow",
  openGraph: {
    title: "About Us - Appversal | Leading App Store Optimization Experts",
    description:
      "Learn more about Appversal, a leading app store optimization (ASO) agency. We help apps achieve higher visibility, growth, and success in competitive markets.",
    url: "https://www.appversal.com/about",
    siteName: "Appversal",
    images: [
      {
        url: "/og-image.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "About Appversal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Appversal | Leading App Store Optimization Experts",
    description:
      "Learn more about Appversal, a leading app store optimization (ASO) agency. We help apps achieve higher visibility, growth, and success in competitive markets.",
    images: ["/og-image.jpg"], 
    site: "@appversal",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function About() {
  return (
    <div>
      {/* SEO Metadata */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>

      {/* Page Components */}
      <AboutHero />
      <BrandCarousel />
      <WhyChooseUs />
      <PartnershipImpact />
      <ProjectSteps />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
