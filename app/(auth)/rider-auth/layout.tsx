
import type { Metadata } from 'next'
import AuthClientLayout from './AuthClientLayout'


export const metadata: Metadata = {
  title: 'Sign Up for OIOT - Join Thousands of Happy Riders | One India One Taxi',
  description: 'Create your OIOT account and start booking safe, verified taxis across Karnataka. Government-approved rates, no surge pricing, no hidden fees. Join thousands of satisfied customers today!',
  
  keywords: [
    'OIOT signup',
    'taxi booking registration',
    'ride sharing account',
    'Karnataka taxi signup',
    'verified driver platform',
    'government rate taxi',
    'no surge pricing',
    'safe rides signup',
    'Bangalore taxi registration',
    'OIOT rider account'
  ],

  authors: [{ name: 'OIOT Team' }],
  creator: 'OIOT - One India One Taxi',
  publisher: 'OIOT',

  // Signup pages SHOULD be indexed (unlike dashboards)
  robots: {
    index: true,     
    follow: true,    
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Social sharing optimization (great for referrals!)
  openGraph: {
    title: 'Join OIOT - Sign Up for Safe, Affordable Rides Across Karnataka',
    description: 'Create your account and start booking verified taxis with transparent government-approved pricing. No surge charges, no surprises.',
    url: 'https://oiot.app/signup',
    siteName: 'OIOT',
    images: [
      {
        url: '/images/oiot-signup-social.jpg',
        width: 1200,
        height: 630,
        alt: 'OIOT Signup - Join thousands of satisfied customers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Join OIOT - Safe Rides Across Karnataka',
    description: 'Sign up for OIOT and get access to verified drivers with government-approved rates. No hidden fees, no surge pricing.',
    images: ['/images/oiot-signup-twitter.jpg'],
    creator: '@oiot_official',
  },

  alternates: {
    canonical: 'https://oiot.app/signup',
  },

  // Mobile optimization for signup
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'OIOT Signup',
  }
}


const signupStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://oiot.app/signup#webpage",
      "name": "OIOT User Registration - Join Thousands of Happy Riders",
      "description": "Sign up for OIOT to access safe, affordable taxi booking services across Karnataka with verified drivers and government-approved rates",
      "url": "https://oiot.app/signup",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://oiot.app/#website"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://oiot.app"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Sign Up",
            "item": "https://oiot.app/signup"
          }
        ]
      }
    },
    // Service offering for new users
    {
      "@type": "Service",
      "name": "OIOT User Registration Service",
      "description": "Create an account to access verified taxi drivers with transparent government-approved pricing across Karnataka",
      "provider": {
        "@id": "https://oiot.app/#localbusiness"
      },
      "serviceType": "User Account Registration",
      "areaServed": {
        "@type": "State",
        "name": "Karnataka",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      },
      "offers": {
        "@type": "Offer",
        "name": "OIOT Taxi Booking Service Access",
        "description": "Free access to verified drivers, government-rate pricing, and safe transportation across Karnataka",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "seller": {
          "@id": "https://oiot.app/#localbusiness"
        }
      }
    },
    // FAQ for signup process
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I sign up for OIOT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply fill out the registration form with your phone number, verify with OTP, and complete your profile. You'll get instant access to book verified taxis across Karnataka."
          }
        },
        {
          "@type": "Question",
          "name": "Is OIOT signup free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, creating an OIOT account is completely free. No hidden charges or subscription fees. You only pay for the rides you book at government-approved rates."
          }
        },
        {
          "@type": "Question",
          "name": "What benefits do I get after signing up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Access to verified drivers, government-rate pricing with no surge charges, real-time tracking, 24/7 customer support, and safe rides across Karnataka."
          }
        }
      ]
    }
  ]
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(signupStructuredData)
        }}
      />
      
      {/* Client Component with animations */}
      <AuthClientLayout>
        {children}
      </AuthClientLayout>
    </>
  )
}
