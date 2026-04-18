// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { LuLanguages } from "react-icons/lu";
// import { RiUserSmileFill, RiCloseLine } from "react-icons/ri";
// import { CgMenuRight } from "react-icons/cg";
// import { useRouter } from "next/navigation";
// import { media, social } from "@/constant";

// declare global {
//   interface Window {
//     googleTranslateElementInit: () => void;
//     google: any;
//   }
// }

// export function Header() {
//   const router = useRouter();
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if token exists
//     const token = document.cookie.includes('token=');
//     setIsLoggedIn(token);
//   }, []);

//   const toggleMobileNav = () => {
//     setMobileNavOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     // Add Google Translate script
//     const style = document.createElement("style");
//     style.textContent = `
//       /* Hide Google Translate original elements */
//       .goog-te-gadget-simple {
//         background-color: transparent !important;
//         border: none !important;
//         padding: 0 !important;
//         font-size: 14px !important;
//         display: flex !important;
//         align-items: center !important;
//         color: #4B5563 !important;
//       }
//       .goog-te-gadget-simple img {
//         display: none !important;
//       }
//       .goog-te-gadget-simple .goog-te-menu-value {
//         color: #4B5563 !important;
//         display: flex !important;
//         align-items: center !important;
//         gap: 4px !important;
//         margin: 0 !important;
//       }
//       .goog-te-gadget-simple .goog-te-menu-value span {
//         border: none !important;
//         color: #4B5563 !important;
//       }
//       .goog-te-banner-frame {
//         display: none !important;
//       }
//       body {
//         top: 0 !important;
//       }
//     `;
//     document.head.appendChild(style);
//     const script = document.createElement("script");
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.body.appendChild(script);

//     // Initialize Google Translate
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,hi,kn,ml,ta,te", // Limiting to specific languages
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   return (
//     <header className="sticky top-0 w-full backdrop-blur-md z-50 overflow-hidden bg-white/50 shadow-md">
//       <div className="flex justify-between items-center p-2">
//         <div className="flex items-center gap-2 md:flex p-2">
//           <Link href="/" className="flex-shrink-0">
//             <div className="hidden md:block">
//               <Image
//                 src="/icons/oiotlogo.png"
//                 alt="Logo"
//                 className="object-cover cursor-pointer rounded-xl"
//                 width={50}
//                 height={50}
//                 priority
//               />
//             </div>
//             <div className="block md:hidden">
//               <Image
//                 src="/icons/oiotlogo.png"
//                 alt="Logo"
//                 className="object-cover cursor-pointer rounded-xl"
//                 width={40}
//                 height={40}
//                 priority
//               />
//             </div>
//           </Link>

//           <ul className="flex gap-1 md:gap-3 font-semibold">
//             <li className="hidden md:block">
//               <Button
//                 variant="outline"
//                 onClick={() =>
//                   window.open(social.linkedin, "_blank", "noopener,noreferrer")
//                 }
//                 className="bg-[#4646EA] text-white hover:bg-black hover:text-white border-none rounded-lg py-2 px-4 text-sm transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2"
//               >
//                 <span className="hidden md:inline">Partner with Us?</span>
//               </Button>
//             </li>
//             {/* <li>
//               <Button
//                 variant="outline"
//                 onClick={() => router.push('/about')}
//                 className="text-black hover:text-white hover:bg-black rounded-lg py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
//               >
//                 About
//               </Button>
//             </li> */}
//             <li>
//               <Button
//                 variant="outline"
//                 onClick={() => router.push("/openData")}
//                 className="text-black hover:text-white hover:bg-black rounded-lg py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
//               >
//                 Open Data
//               </Button>
//             </li>
//           </ul>
//         </div>

//         <div className="flex items-center gap-3 p-2">
//           <div className="hidden md:flex items-center gap-4">
//             {/* Language selector */}
//             {/* <div className="relative">
//               <div className="flex items-center gap-2 border hover:border-[#8dc720] bg-white text-black rounded-lg cursor-pointer py-1.5 px-3 transition-colors duration-300">
//                 <LuLanguages className="text-lg text-gray-600" />
//                 <div
//                   id="google_translate_element"
//                   className="!font-medium"
//                 ></div>
//               </div>
//             </div> */}
//             <div>
//               <button onClick={() => window.open(
//                     media.OIOT_PLAYSTORE,
//                     '_blank',
//                     'noopener,noreferrer'
//                   )} className="flex items-center gap-2 border hover:border-[#8dc720] bg-white text-black rounded-lg cursor-pointer py-1.5 px-4 transition-all duration-300">Download</button>
//             </div>

//             {/* Auth buttons - Only show if not logged in */}
//             {!isLoggedIn && (
//               ["Sign Up", "Sign In"].map((item) => (
//                 <Button
//                   key={item}
//                   variant="outline"
//                   onClick={() => {
//                     switch (item) {
//                       case "Sign In":
//                         router.push("/rider-auth/login");
//                         break;
//                       case "Sign Up":
//                         router.push("/rider-auth/signup");
//                         break;
//                       case "Help":
//                         router.push("/help");
//                         break;
//                     }
//                   }}
//                   className="text-black hover:text-white hover:bg-black rounded-lg py-2 px-4 text-sm transition-all duration-300"
//                 >
//                   {item}
//                 </Button>
//               ))
//             )}

//             {/* User icon - Show differently based on login status */}
//             <div
//               onClick={() => router.push(isLoggedIn ? "/userspace/profile" : "/rider-auth/login")}
//               className="flex items-center gap-2 border hover:border-[#8dc720] bg-white text-black rounded-lg cursor-pointer py-1.5 px-3 transition-all duration-300"
//             >
//               <RiUserSmileFill className="text-xl text-gray-600" />
//               <span className="text-sm font-medium">
//                 {isLoggedIn ? "My Account" : "Account"}
//               </span>
//             </div>
//           </div>
//           {/* Mobile menu toggle */}
//           <div className="md:hidden mx-4">
//             <button onClick={toggleMobileNav} className="text-3xl">
//               {mobileNavOpen ? <RiCloseLine /> : <CgMenuRight />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile navigation menu */}
//       {mobileNavOpen && (
//         <nav className="md:hidden bg-white shadow-md">
//           <ul className="flex flex-col gap-2 p-4 font-semibold">
//             {/* Only show auth buttons if not logged in */}
//             {!isLoggedIn && (
//               ["Sign Up", "Sign In", "Help"].map((item) => (
//                 <Link
//                   key={item}
//                   href={
//                     item === "Sign Up"
//                       ? "/rider-auth/signup"
//                       : item === "Sign In"
//                       ? "/rider-auth/login"
//                       : item === "Help"
//                       ? "/help"
//                       : "/openData"
//                   }
//                 >
//                   <li>
//                     <Button
//                       variant="outline"
//                       className="w-full text-black hover:text-white hover:bg-black rounded-full py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
//                     >
//                       {item}
//                     </Button>
//                   </li>
//                 </Link>
//               ))
//             )}
//             <li className="flex justify-start px-2 bg-gray-200 rounded-full py-1">
//               <div
//                 onClick={() => router.push(isLoggedIn ? "/userspace/profile" : "/rider-auth/login")}
//                 className="flex items-center"
//               >
//                 <RiUserSmileFill className="text-4xl cursor-pointer" />
//                 <span className="text-sm">
//                   {isLoggedIn ? "My Account" : "Login your Account"}
//                 </span>
//               </div>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LuLanguages } from "react-icons/lu";
import { RiUserSmileFill, RiCloseLine } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { useRouter, usePathname } from "next/navigation";
import { media, social } from "@/constant";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if user is logged in
  const checkLoginStatus = () => {
    // Check for access_token cookie (set by rider login)
    const hasAccessToken = document.cookie.includes('access_token=');
    // Check for localStorage (used by driver login)
    const hasLocalStorageToken = typeof window !== 'undefined' && localStorage.getItem('access_token');
    
    const loggedIn = hasAccessToken || !!hasLocalStorageToken;
    
    console.log('🔍 Login Check:', {
      hasAccessToken,
      hasLocalStorageToken: !!hasLocalStorageToken,
      isLoggedIn: loggedIn,
      cookies: document.cookie
    });
    
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    // Check login status on mount
    checkLoginStatus();

    // Re-check when pathname changes (for navigation)
    checkLoginStatus();
  }, [pathname]);

  // Re-check periodically (every 2 seconds) to catch login/logout events
  useEffect(() => {
    const interval = setInterval(checkLoginStatus, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  useEffect(() => {
    // Add Google Translate script
    const style = document.createElement("style");
    style.textContent = `
      /* Hide Google Translate original elements */
      .goog-te-gadget-simple {
        background-color: transparent !important;
        border: none !important;
        padding: 0 !important;
        font-size: 14px !important;
        display: flex !important;
        align-items: center !important;
        color: #4B5563 !important;
      }
      .goog-te-gadget-simple img {
        display: none !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value {
        color: #4B5563 !important;
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        margin: 0 !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value span {
        border: none !important;
        color: #4B5563 !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,kn,ml,ta,te",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <header className="sticky top-0 w-full backdrop-blur-md z-50 overflow-hidden bg-white/50 shadow-md">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-2 md:flex p-2">
          <Link href="/" className="flex-shrink-0">
            <div className="hidden md:block">
              <Image
                src="/icons/oiotlogo.png"
                alt="Logo"
                className="object-cover cursor-pointer rounded-xl"
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/icons/oiotlogo.png"
                alt="Logo"
                className="object-cover cursor-pointer rounded-xl"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>

          <ul className="flex gap-1 md:gap-3 font-semibold">
            <li className="hidden md:block">
              <Button
                variant="outline"
                onClick={() =>
                  window.open(social.linkedin, "_blank", "noopener,noreferrer")
                }
                className="bg-[#4646EA] text-white hover:bg-black hover:text-white border-none rounded-lg py-2 px-4 text-sm transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2"
              >
                <span className="hidden md:inline">Partner with Us?</span>
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                onClick={() => router.push("/openData")}
                className="text-black hover:text-white hover:bg-black rounded-lg py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
              >
                Open Data
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 p-2">
          <div className="hidden md:flex items-center gap-4">
            <div>
              <button
                onClick={() =>
                  window.open(media.OIOT_PLAYSTORE, "_blank", "noopener,noreferrer")
                }
                className="flex items-center gap-2 border hover:border-[#8dc720] bg-white text-black rounded-lg cursor-pointer py-1.5 px-4 transition-all duration-300"
              >
                Download
              </button>
            </div>

            {/* Auth buttons - Only show if not logged in */}
            {!isLoggedIn && (
              <>
                {/* <Button
                  variant="outline"
                  onClick={() => router.push("/rider-auth/signup")}
                  className="text-black hover:text-white hover:bg-black rounded-lg py-2 px-4 text-sm transition-all duration-300"
                >
                  Sign Up
                </Button> */}
                <Button
                  variant="outline"
                  onClick={() => router.push("/rider-auth/verify")}
                  className="text-black hover:text-white hover:bg-black rounded-lg py-2 px-4 text-sm transition-all duration-300"
                >
                  Sign In
                </Button>
              </>
            )}

            {/* User icon - Show differently based on login status */}
            <div
              onClick={() =>
                router.push(isLoggedIn ? "/userspace/profile" : "/rider-auth/login")
              }
              className="flex items-center gap-2 border hover:border-[#8dc720] bg-white text-black rounded-lg cursor-pointer py-1.5 px-3 transition-all duration-300"
            >
              <RiUserSmileFill className="text-xl text-gray-600" />
              <span className="text-sm font-medium">
                {isLoggedIn ? "My Account" : "Account"}
              </span>
            </div>
          </div>
          {/* Mobile menu toggle */}
          <div className="md:hidden mx-4">
            <button onClick={toggleMobileNav} className="text-3xl">
              {mobileNavOpen ? <RiCloseLine /> : <CgMenuRight />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 p-4 font-semibold">
            {/* Only show auth buttons if not logged in */}
            {!isLoggedIn && (
              <>
                {/* <li>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/rider-auth/signup")}
                    className="w-full text-black hover:text-white hover:bg-black rounded-full py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
                  >
                    Sign Up
                  </Button>
                </li> */}
                <li>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/rider-auth/login")}
                    className="w-full text-black hover:text-white hover:bg-black rounded-full py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
                  >
                    Sign In
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/help")}
                    className="w-full text-black hover:text-white hover:bg-black rounded-full py-2 px-3 text-sm transition-colors duration-300 ease-in-out cursor-pointer"
                  >
                    Help
                  </Button>
                </li>
              </>
            )}
            <li className="flex justify-start px-2 bg-gray-200 rounded-full py-1">
              <div
                onClick={() =>
                  router.push(isLoggedIn ? "/userspace/profile" : "/rider-auth/login")
                }
                className="flex items-center cursor-pointer"
              >
                <RiUserSmileFill className="text-4xl" />
                <span className="text-sm">
                  {isLoggedIn ? "My Account" : "Login your Account"}
                </span>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
