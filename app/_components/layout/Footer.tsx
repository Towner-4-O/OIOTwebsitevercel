import Image from "next/image";
import Link from "next/link";
import { GoDot } from "react-icons/go";
import { HiArrowSmRight } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { media, social } from "@/constant";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Add a small delay to ensure smooth scrolling
      setTimeout(() => {
        // Calculate offset to account for sticky header
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const sectionPosition = section.offsetTop - headerHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  return (
    <footer className="sticky bg-black text-gray-300 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/oiotlogo.png"
                alt="Logo"
                className="object-cover cursor-pointer rounded-xl"
                width={45}
                height={45}
              />
              <h3 className="text-2xl font-bold text-white">OIOT</h3>
            </div>
            <p className="text-sm">
              BMTC Complex, CA,31 Main 100 Feet Road,
              <br />
              Madivala, Bangalore South,
              <br />
              Bangalore-560068, Karnataka
            </p>
            <div className="flex space-x-4">
              <a
                onClick={() => window.open(
                  social.facebook,
                  '_blank',
                  'noopener,noreferrer'
                )}
                href="#" className="hover:text-[#5546fa] transition-colors">
                <FaFacebookF />
              </a>
              <a
                onClick={() => window.open(
                  social.twitter,
                  '_blank',
                  'noopener,noreferrer'
                )}
                href="#" className="hover:text-[#5546fa] transition-colors">
                <FaTwitter />
              </a>
              <a
                onClick={() => window.open(
                  social.instagram,
                  '_blank',
                  'noopener,noreferrer'
                )}
                href="#" className="hover:text-[#5546fa] transition-colors">
                <FaInstagram />
              </a>
              <a
                onClick={() => window.open(
                  social.linkedin,
                  '_blank',
                  'noopener,noreferrer'
                )}
                href="#" className="hover:text-[#5546fa] transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mt-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <GoDot />
                <Link
                  href="/aboutus"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <GoDot />
                <Link
                  href="/termsandconditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <GoDot />
                <Link
                  href="/privacyandpolicy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <GoDot />
                <a
                  onClick={() => scrollToSection('Faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mt-2">Products</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <GoDot />
                Ride
              </li>
              <li className="flex items-center gap-2">
                <GoDot />
                Drive
              </li>
              <li className="flex items-center gap-2">
                <GoDot />
                Towner for Business
              </li>
              <li className="flex items-center gap-2">
                <GoDot />
                Towner Gift Cards
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mt-2">
              Download App
            </h3>
            <div className="flex gap-4 flex-col">
              <div className="group flex items-center gap-2 bg-white rounded-lg p-2 relative cursor-pointer">
                <Image
                  src="/icons/qr-oiot.png"
                  alt="Driver QR Code"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg shadow-sm"
                />
                <div
                  onClick={() => window.open(
                    media.OIOT_PLAYSTORE,
                    '_blank',
                    'noopener,noreferrer'
                  )}
                  className="text-black">
                  <p className="font-semibold">Download The OIOT App</p>
                  <p className="text-sm">Scan to download</p>
                  <HiArrowSmRight className="absolute right-5 bottom-2 text-xl transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
              <div className="group flex items-center gap-2 bg-white rounded-lg p-2 relative cursor-pointer">
                <Image
                  src="/icons/qr-towner.png"
                  alt="Driver QR Code"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg shadow-sm"
                />
                <div
                  onClick={() => window.open(
                    media.TOWNER_PLAYSTORE,
                    '_blank',
                    'noopener,noreferrer'
                  )}
                  className="text-black">
                  <p className="font-semibold">Download The Driver App</p>
                  <p className="text-sm">Scan to download</p>
                  <HiArrowSmRight className="absolute right-5 bottom-2 text-xl transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <HiLocationMarker className="text-[#5546fa]" />
            <p>Bangalore, India</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold">OIOT</span> One India One Taxi. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
