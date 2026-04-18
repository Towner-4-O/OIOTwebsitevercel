"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Car,
  User,
  Activity,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export function RiderSidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { icon: User, label: "Profile", path: "/userspace/profile" },
   
  ];

  const handleSignOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to sign out?");

    if (confirmLogout) {
      document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
      document.cookie = "refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
      document.cookie = "rider_id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";


      toast.success("Signed out successfully");


      router.push("/rider-auth/verify");
      router.refresh();
    }
  };

  return (
    <div
      className={`fixed h-screen bg-white border-r border-gray-200 transition-all duration-300 z-50
      ${collapsed ? "w-20" : "w-64"}
      ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >

      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setMobileOpen(false)}
      >
        <X className="h-6 w-6 text-gray-500" />
      </button>

      <div className="flex flex-col h-full">

        <div
          className={`p-6 ${collapsed ? "justify-center" : ""
            } flex items-center`}
        >
          <Image
            src="/icons/oiotlogo.png"
            alt="OIOT Logo"
            width={collapsed ? 40 : 50}
            height={collapsed ? 40 : 50}
            className="object-contain"
          />
          {!collapsed && (
            <span className="ml-3 text-xl font-semibold text-[#5444FB]">
              OIOT Rider
            </span>
          )}
        </div>


        <nav className="flex-1 px-4 mt-6">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors
                    ${isActive
                      ? "bg-[#5444FB] text-white"
                      : "text-gray-600 hover:bg-[#5444FB]/10 hover:text-[#5444FB]"
                    }`}
                >
                  <Icon
                    className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"}`}
                  />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>


        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center px-4 py-3 text-gray-600 hover:bg-[#5444FB]/10 hover:text-[#5444FB] rounded-xl transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5 mx-auto" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5 mr-3" />
                <span>Collapse</span>
              </>
            )}
          </button>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-4 py-3 mt-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"}`} />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
