// // import Navigation from './components/Navigation'
// import "./globals.css";


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* <Navigation /> */}
//         <main>
//           {children}
//         </main>
//       </body>
//     </html>
//   )
// }

import "./globals.css";
import Head from "next/head"; // Importing Head from next/head

export const metadata = {
  title: "AppVersal: Leading App Global AI Powerhouse",
  description:
    "Appversal provides expert App Store Optimization (ASO) services to help apps gain visibility, increase downloads, and drive growth. Learn more about how we help mobile apps succeed in competitive markets.",
  keywords:
    "App Store Optimization, ASO, App Marketing, Mobile Growth, SEO Agency, App Store Visibility, App Optimization, Mobile Apps",
  authors: [{ name: "Appversal", url: "https://www.appversal.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Appversal | Optimize Your App Store Visibility",
    description:
      "Appversal provides expert App Store Optimization (ASO) services to help apps gain visibility, increase downloads, and drive growth.",
    url: "https://www.appversal.com",
    siteName: "Appversal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Appversal Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appversal | Optimize Your App Store Visibility",
    description:
      "Appversal provides expert App Store Optimization (ASO) services to help apps gain visibility, increase downloads, and drive growth.",
    images: ["/og-image.jpg"],
    site: "@appversal",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Next.js Head for SEO Metadata */}
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

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
