// import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
// import "./globals.css";
// import TemplateWrapper from "./_components/layout/TemplateWrapper";
// import { Toaster } from "@/components/ui/toaster";

// export const metadata: Metadata = {
//   title: "OIOT - Your Smart Ride Companion",
//   description: "Experience hassle-free commuting across Karnataka",
// };

// const outfit = Outfit({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${outfit.className} antialiased bg-custom-bg`}>
//         <TemplateWrapper>
//           {children}
//           <Toaster />
//         </TemplateWrapper>
//       </body>
//     </html>
//   );
// }
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TemplateWrapper from "./_components/layout/TemplateWrapper";
import { Toaster } from "@/components/ui/toaster";

// Complete SEO metadata foundation for layout
export const metadata: Metadata = {
  metadataBase: new URL('https://oiot.app'), 
  
  title: {
    default: 'OIOT - Your Smart Ride Companion | Best Taxi Booking App',
    template: '%s | OIOT - Smart Ride Companion'
  },
  
  description: 'Experience hassle-free commuting across Karnataka and India with OIOT. Book reliable, safe and affordable taxi rides with real-time tracking and transparent pricing.',
  
  keywords: [
    'taxi booking India',
    'cab service Karnataka', 
    'ride booking app',
    'OIOT app',
    'smart ride companion',
    'transportation service',
    'Bangalore taxi',
    'safe rides India'
  ],

  authors: [{ name: 'OIOT Team', url: 'https://oiot.app' }],
  creator: 'OIOT - One India One Taxi',
  publisher: 'OIOT',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Default OpenGraph (will be overridden by pages)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://oiot.app',
    siteName: 'OIOT - One India One Taxi',
    title: 'OIOT - Your Smart Ride Companion',
    description: 'Experience hassle-free commuting across Karnataka and India',
    images: [
      {
        url: '/images/oiot-default-og.jpg',
        width: 1200,
        height: 630,
        alt: 'OIOT - Smart Ride Companion',
      },
    ],
  },

  // Default Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@oiot_official',
    creator: '@oiot_official',
  },

  
  applicationName: 'OIOT',
  referrer: 'origin-when-cross-origin',
  
  
  manifest: '/manifest.json',
  
  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'OIOT',
    'application-name': 'OIOT',
    'msapplication-TileColor': '#5546fa',
    'theme-color': '#5546fa',
  },

  // Category for app stores
  category: 'Transportation',
};

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#5546fa',
  colorScheme: 'light',
};


const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={outfit.variable}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        
        {/* Basic Organization Schema for site-wide recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://oiot.app/#LocalBusiness",
              "name": "OIOT - One India One Taxi",
              "url": "https://oiot.app",
              "logo": "https://oiot.app/icons/oiotlogo.png",
              "description": "Leading taxi booking platform in India providing safe, affordable transportation services",
              "sameAs": [
                "https://www.facebook.com/oiot",
                "https://www.twitter.com/Oiottaxi",
                "https://www.instagram.com/oiotofficial",
                "https://www.linkedin.com/company/oiot"
                //https://www.instagram.com/oiotofficial
              ]
            })
          }}
        />
      </head>
      <body className={`${outfit.className} antialiased bg-custom-bg`}>
        <TemplateWrapper>
          {children}
          <Toaster />
        </TemplateWrapper>
      </body>
    </html>
  );
}
