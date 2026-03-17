// import AiHero from "../components/AiHero";
// import AiSection from "../components/AiSection";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import WhatWeDoSection from "../components/WhatWeDo";
// import WhyChooseSection from "../components/WhyChooseSection";


// export default function Ai() {
//     return (
//         <div className="bg-[#FAFAFA]">
//             <Navbar />
//             <AiHero />
//             <WhatWeDoSection/>
//             <WhyChooseSection/>
//             <AiSection/>
//             <Footer/>
//         </div>
//     );
// }


import Head from "next/head";
import AiHero from "../components/AiHero";
import AiSection from "../components/AiSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatWeDoSection from "../components/WhatWeDo";
import WhyChooseSection from "../components/WhyChooseSection";

export const metadata = {
  title: "AppVersal AI - Powering Apps with AI",
  description:
    "Explore Appversal's AI-driven solutions for app growth and optimization. Learn how AI can revolutionize your app's performance, user engagement, and marketing strategies.",
  keywords:
    "AI solutions, Appversal AI, Artificial Intelligence, AI for app growth, AI marketing, mobile app optimization, AI-powered strategies",
  authors: [{ name: "Appversal", url: "https://www.appversal.com" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Solutions - Appversal | Leveraging AI for App Growth",
    description:
      "Explore Appversal's AI-driven solutions for app growth and optimization. Learn how AI can revolutionize your app's performance, user engagement, and marketing strategies.",
    url: "https://www.appversal.com/ai",
    siteName: "Appversal",
    images: [
      {
        url: "/og-image.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Appversal AI Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions - Appversal | Leveraging AI for App Growth",
    description:
      "Explore Appversal's AI-driven solutions for app growth and optimization. Learn how AI can revolutionize your app's performance, user engagement, and marketing strategies.",
    images: ["/og-image.jpg"], // Replace with your image path
    site: "@appversal",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Ai() {
  return (
    <div className="bg-[#FAFAFA]">
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
      <Navbar />
      <AiHero />
      <WhatWeDoSection />
      <WhyChooseSection />
      <AiSection />
      <Footer />
    </div>
  );

}
