// import ContactHero from "../components/ContactHero";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";



// export default function Contact() {
//     return (
//         <div>
//             <Navbar />
//             <ContactHero/>

//             <Footer />
//         </div>
//     );
// }


import Head from "next/head";
import ContactHero from "../components/ContactHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact - AppVersal",
  description:
    "Contact Appversal for personalized app solutions and expert advice. Reach out to our team to discuss how we can help optimize your app's performance and drive growth.",
  keywords:
    "contact Appversal, app solutions, app optimization, reach out, app growth, app performance, mobile app services",
  authors: [{ name: "Appversal", url: "https://www.appversal.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - Appversal | Get in Touch with Our Team",
    description:
      "Contact Appversal for personalized app solutions and expert advice. Reach out to our team to discuss how we can help optimize your app's performance and drive growth.",
    url: "https://www.appversal.com/contact",
    siteName: "Appversal",
    images: [
      {
        url: "/og-image.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Appversal Contact Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Appversal | Get in Touch with Our Team",
    description:
      "Contact Appversal for personalized app solutions and expert advice. Reach out to our team to discuss how we can help optimize your app's performance and drive growth.",
    images: ["/og-image.jpg"], // Replace with your image path
    site: "@appversal",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Contact() {
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
      <Navbar />
      <ContactHero />
      <Footer />
    </div>
  );
}
