import type { Metadata } from 'next'
import RiderClientLayout from './RiderClientLayout'


export const metadata: Metadata = {
  title: {
    template: '%s | OIOT Rider Dashboard',
    default: 'OIOT Rider Dashboard - Manage Your Rides'
  },
  
  description: 'Access your OIOT rider dashboard to book rides, track trips, manage payments, and view ride history. Your personal transportation hub across Karnataka.',
  
  
  robots: {
    index: false,        
    follow: false,       
    noarchive: true,     
    nosnippet: true,     
    googleBot: {
      index: false,
      follow: false,
      'max-snippet': 0,
      'max-image-preview': 'none',
    },
  },

  
  openGraph: {
    title: 'OIOT Rider Dashboard - Your Transportation Hub',
    description: 'Manage your rides, track trips, and access OIOT services from your personal dashboard.',
    type: 'website',
    locale: 'en_IN',
    
  },

  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },

  
  alternates: {
    canonical: undefined, 
  }
}


const dashboardStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "OIOT Rider Dashboard",
  "applicationCategory": "TransportationApplication",
  "operatingSystem": "Web Browser",
  "description": "Personal dashboard for OIOT riders to manage bookings and track rides",
  "url": "https://oiot.app/rider-dashboard",
  "isAccessibleForFree": false, // Requires account
  "requiresSubscription": false,
  "provider": {
    "@id": "https://oiot.app/#localbusiness"
  },
  "featureList": [
    "Book rides",
    "Track live trips", 
    "View ride history",
    "Manage payments",
    "Update profile",
    "Contact support"
  ],
  // Don't include public-facing details
}

export default function RiderDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Private structured data (limited) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dashboardStructuredData)
        }}
      />
      
      {/* Security headers */}
      <meta httpEquiv="Cache-Control" content="private, no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      
      {/* Client layout with animations */}
      <RiderClientLayout>
        {children}
      </RiderClientLayout>
    </>
  )
}
