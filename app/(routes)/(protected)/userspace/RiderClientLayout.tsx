// "use client"

// import { useState } from 'react'
// import { RiderSidebar } from '@/app/_components/layout/rider-protected-layout/Sidebar'
// import { Menu } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// export default function RiderClientLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [collapsed, setCollapsed] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Mobile Menu Button */}
//       <div className="md:hidden fixed top-4 right-4 z-50">
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="bg-white shadow-md rounded-full p-2"
//         >
//           <Menu className="h-6 w-6" />
//         </Button>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`
//           fixed inset-0 z-40 transition-all duration-300 md:relative
//           ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
//         `}>
//           <RiderSidebar 
//             collapsed={collapsed} 
//             setCollapsed={setCollapsed}
//             mobileOpen={mobileOpen}
//             setMobileOpen={setMobileOpen}
//           />
          
//           {/* Mobile overlay */}
//           <div 
//             className={`fixed inset-0 bg-black/50 md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
//             onClick={() => setMobileOpen(false)}
//           />
//         </div>

//         {/* Main content */}
//         <main 
//           className={`flex-1 p-4 md:p-8 transition-all duration-300 
//             ${collapsed ? 'md:ml-20' : 'md:ml-64'}
//             ${mobileOpen ? 'ml-0' : 'ml-0'}
//           `}
//         >
//           {children}
//         </main>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from 'react'
import { RiderSidebar } from '@/app/_components/layout/rider-protected-layout/Sidebar'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function RiderClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-white shadow-md rounded-full p-2"
          aria-label="Toggle navigation menu" 
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed inset-0 z-40 transition-all duration-300 md:relative
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <RiderSidebar 
            collapsed={collapsed} 
            setCollapsed={setCollapsed}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
          
          {/* Mobile overlay */}
          <div 
            className={`fixed inset-0 bg-black/50 md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true" 
          />
        </div>

        {/* Main content */}
        <main 
          className={`flex-1 p-4 md:p-8 transition-all duration-300 
            ${collapsed ? 'md:ml-20' : 'md:ml-64'}
            ${mobileOpen ? 'ml-0' : 'ml-0'}
          `}
          role="main" 
        >
          {children}
        </main>
      </div>
    </div>
  )
}
