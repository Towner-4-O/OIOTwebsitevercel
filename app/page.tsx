// import Faq from "./_components/section/Faq";
// import { Hero } from "./_components/section/Hero";
// import Highlights from "./_components/section/Highlights";
// import Info from "./_components/section/Info";
// import MoreAbout from "./_components/section/MoreAbout";
// import Offerings from "./_components/section/Offerings";
// import Testimonials from "./_components/section/Testimonials";
// import Vision from "./_components/section/Vision";
// import DownloadApp from "./_components/section/DownloadApp";
// import EstimationDetails from "./_components/section/EstimationDetails";
// import { Header } from "./_components/layout/Header";
// // import { ProfessionalTransparencyHero } from "./_components/section/ProfessionalTransparencyHero";
// import { SavingsCalculator } from "./_components/section/SavingsCalculator";
// // import TransparencyFeaturesSection from "./_components/section/TransparencyFeaturesSection";
// import LivePriceComparison from "./_components/section/LivePriceComparison";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//               <Header />
//       <Hero />
//       {/* <EstimationDetails/> */}
    
//       <SavingsCalculator />
       
//       <LivePriceComparison />
     
      
     
    
//       {/* <Highlights /> */}
//       <Info />
//       <MoreAbout/>
//       {/* <Offerings/> */}
//       {/* <Highlights/> */}
//       <Vision/>
//       <DownloadApp/>
//       <Testimonials/>
//       <Faq/>

//     </main>
//   );
// }
// verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
import type { Metadata } from 'next'
import Faq from "./_components/section/Faq";
import { Hero } from "./_components/section/Hero";
import Highlights from "./_components/section/Highlights";
import Info from "./_components/section/Info";
import MoreAbout from "./_components/section/MoreAbout";
import Offerings from "./_components/section/Offerings";
import Testimonials from "./_components/section/Testimonials";
import Vision from "./_components/section/Vision";
import DownloadApp from "./_components/section/DownloadApp";
import EstimationDetails from "./_components/section/EstimationDetails";
import { Header } from "./_components/layout/Header";
import { SavingsCalculator } from "./_components/section/SavingsCalculator";
import LivePriceComparison from "./_components/section/LivePriceComparison";


export const metadata: Metadata = {
  title: 'OIOT - One India One Taxi | Safe Taxi & Auto Booking App in Karnataka | Government Approved Rates',
  description: 'Book reliable, safe and affordable taxi rides across Bangalore and India with OIOT. Compare prices, track drivers in real-time, transparent pricing. Download the OIOT app now!',
  keywords: [
    'taxi booking Bangalore',
    'cab service India', 
    'ride booking app',
    'transportation service',
    'OIOT app',
    'One India One Taxi',
    'affordable taxi',
    'safe rides',
    'driver app',
    'ride sharing India'
  ],
  authors: [{ name: 'OIOT Team' }],
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
  openGraph: {
    title: 'OIOT - One India One Taxi | Best Taxi Booking App',
    description: 'Book reliable, safe and affordable taxi rides across Bangalore and India with OIOT. Compare prices, track drivers in real-time.',
    url: 'https://oiot.app',
    siteName: 'OIOT',
    images: [
      {
        url: '/images/oiot-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OIOT - One India One Taxi App Interface',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OIOT - One India One Taxi | Best Taxi Booking App',
    description: 'Book reliable, safe and affordable taxi rides across Bangalore and India with OIOT.',
    images: ['/images/oiot-twitter-image.jpg'],
    creator: '@oiot_official',
  },
   verification: {
      google: 'DNiT1leGQXy30E2XUpBKT6K6_ygxZAJd1IeXt-IEomM',
     
   },
  alternates: {
    canonical: 'https://oiot.app',
  },
}


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness", 
      "@id": "https://oiot.app/#localbusiness",
      "name": "OIOT - One India One Taxi",
      "alternateName": "OIOT",
      "url": "https://oiot.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oiot.app/icons/oiotlogo.png",
        "width": 300,
        "height": 300
      },
      "image": [
        "https://oiot.app/images/oiot-app-interface.jpg",
        "https://oiot.app/icons/oiotlogo.png"
      ],
      "description": "Leading taxi booking and ride-sharing platform in India providing safe, affordable transportation services with transparent government-approved pricing",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BMTC Complex, CA,31 Main 100 Feet Road",
        "addressLocality": "Madivala, Bangalore South",
        "addressRegion": "Karnataka",
        "postalCode": "560068",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9141",
        "longitude": "77.6273"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9364102992",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi", "Kannada"],
        "areaServed": ["Bangalore", "Karnataka", "India"]
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": ["Cash", "Credit Card", "UPI", "Digital Wallet"],
      "hasMap": "https://maps.google.com/?q=12.9141,77.6273",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Karnataka",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        }
      ],
      "serviceType": [
        "Taxi Booking",
        "Ride Sharing",
        "Airport Transfer", 
        "Outstation Travel"
      ],
      "sameAs": [
        "https://facebook.com/oiot",
        "https://twitter.com/Oiottaxi",
        "https://instagram.com/oiotofficial",
        "https://linkedin.com/company/oiot"
      ]
    },
    
    {
      "@type": "Service",
      "@id": "https://oiot.app/#service",
      "name": "Taxi Booking and Ride-Sharing Service",
      "description": "Connect with verified drivers across Karnataka for safe, reliable transportation with transparent government-approved pricing. No surge pricing, no hidden fees.",
      "provider": {
        "@id": "https://oiot.app/#localbusiness"
      },
      "serviceType": "Transportation Service",
      "category": ["Taxi Service", "Ride Sharing", "Transportation", "Auto Booking"],
      "areaServed": [
        {
          "@type": "State",
          "name": "Karnataka",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "OIOT Transportation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "City Taxi Rides",
              "description": "Local taxi booking within city limits with government rates"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport Transfer",
              "description": "Reliable airport pickup and drop services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Outstation Travel", 
              "description": "Long-distance intercity travel services"
            }
          }
        ]
      },
      "offers": {
        "@type": "Offer",
        "description": "Government-rate taxi booking with no surge pricing",
        "priceRange": "₹₹",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://oiot.app/#website",
      "url": "https://oiot.app",
      "name": "OIOT - One India One Taxi",
      "description": "Book reliable taxi rides across India with OIOT - transparent pricing, verified drivers, no surge charges",
      "publisher": {
        "@id": "https://oiot.app/#localbusiness"
      }
      
    },
    
    {
      "@type": "MobileApplication",
      "name": "OIOT - Taxi Booking App",
      "alternateName": "OIOT",
      "operatingSystem": ["Android", "iOS"],
      "applicationCategory": "TransportationApplication",
      "applicationSubCategory": "TaxiApplication",
      "description": "Book reliable taxi rides across Karnataka with real-time tracking, transparent government-approved pricing, and verified drivers. No surge charges, no hidden fees.",
      "downloadUrl": [
        "https://play.google.com/store/apps/details?id=com.oiot.app",
        "https://apps.apple.com/in/app/oiot/id6474858061"
      ],
      "installUrl": [
        "https://play.google.com/store/apps/details?id=com.oiot.app"
      ],
      "url": "https://oiot.app",
      "screenshot": [
        "https://oiot.app/images/app-screenshot-1.jpg",
        "https://oiot.app/images/app-screenshot-2.jpg"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "850",
        "bestRating": "5"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        "Real-time driver tracking",
        "Transparent government pricing",
        "Multiple payment options",
        "24/7 customer support",
        "SOS emergency alerts",
        "Verified drivers",
        "No surge pricing",
        "Live trip sharing"
      ],
      "countriesSupported": "IN",
      "inLanguage": ["en", "hi", "kn"],
      "requiresSubscription": false,
      "isAccessibleForFree": true
    },
    
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is OIOT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OIOT (One India One Taxi) is a mobile app that connects commuters with trusted, verified local taxi and auto drivers across Karnataka, providing safe, reliable, and transparent rides with government-approved pricing."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a taxi with OIOT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Download the OIOT app, register your account, enter your pickup location, choose your destination, select vehicle type, and confirm your booking. All fares are transparent with no hidden charges."
          }
        },
        {
          "@type": "Question",
          "name": "Is OIOT safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, OIOT includes features like live tracking, SOS alerts, and police department integration for added safety. All drivers are fully verified and trained to provide professional services."
          }
        },
        {
          "@type": "Question",
          "name": "Are OIOT fares regulated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all fares on the OIOT platform are set according to government regulations. There are no hidden charges or surge pricing, ensuring transparent and fair pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Where is OIOT available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, OIOT services are available across all regions of Karnataka, connecting you with local verified drivers in your area."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen">
        <Header />
        
        {/* Hero section with proper heading hierarchy */}
        <section aria-label="Hero section">
          <Hero />
        </section>
        
        {/* Savings Calculator */}
        <section aria-label="Savings calculator" id="calculator">
          <SavingsCalculator />
        </section>
        
        {/* Price Comparison */}
        <section aria-label="Live price comparison" id="price-comparison">
          <LivePriceComparison />
        </section>
        
        {/* Company Information */}
        <section aria-label="Company information" id="about">
          <Info />
        </section>
        
        {/* More About OIOT */}
        <section aria-label="About OIOT" id="more-about">
          <MoreAbout />
        </section>
        
        {/* Vision and Mission */}
        <section aria-label="Our vision" id="vision">
          <Vision />
        </section>
        
        {/* Download App Section */}
        <section aria-label="Download mobile app" id="download">
          <DownloadApp />
        </section>
        
        {/* Customer Testimonials */}
        <section aria-label="Customer testimonials" id="testimonials">
          <Testimonials />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Frequently asked questions" id="Faq">
          <Faq />
        </section>
      </main>
    </>
  );
}
