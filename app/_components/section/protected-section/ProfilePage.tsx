"use client";

import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "@/constant";
import { Loader2, LogOut, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface RiderProfile {
  id: string;
  phone_number: string;
  full_name: string;
  email: string;
  gender: string;
  dob: string | null;
  status: string;
  referral_code: string | null;
  created_at: string;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<RiderProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    
    const handlePopState = (event: PopStateEvent) => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      if (token) {
        window.history.pushState(null, '', window.location.href);

      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("access_token="))
          ?.split("=")[1];

        if (!token) {
          throw new Error("Authentication required. Please login.");
        }

        const response = await fetch(`${BACKEND_BASE_URL}/rider-auth/me`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            // Token expired or invalid
            document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "trip_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            router.push("/rider-auth/verify");
            throw new Error("Session expired. Please login again.");
          }
          throw new Error(result.message || "Failed to fetch profile");
        }

        if (result.success && result.data) {
          setProfile(result.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    // Clear all cookies
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "trip_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "rider_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Clear localStorage
    localStorage.removeItem('rider_info');
    
    toast.success("Logged out successfully");
    router.replace("/rider-auth/verify");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-[#5444FB]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => router.replace("/rider-auth/verify")}
            className="px-6 py-2 bg-[#5444FB] text-white rounded-lg hover:bg-[#4335EA] transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center text-gray-500">No profile data available</div>
      </div>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-[#5444FB] to-[#7A70FE]">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
          <div className="absolute bottom-6 left-8 text-white">
            <h1 className="text-3xl font-bold">
              {profile.full_name || "Update your name"}
            </h1>
            <p className="text-white/90 mt-1">{profile.email}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 py-10">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatsCard
              label="Phone Number"
              value={profile.phone_number || "Not set"}
              icon="📱"
            />
            <StatsCard
              label="Status"
              value={profile.status.charAt(0).toUpperCase() + profile.status.slice(1)}
              icon={profile.status === "active" ? "✅" : "⏸️"}
            />
            <StatsCard
              label="Referral Code"
              value={profile.referral_code || "Not set"}
              icon="🎁"
            />
          </div>

          {/* Personal Information */}
          <div className="bg-gray-50/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <InfoItem 
                icon="" 
                label="Full Name" 
                value={profile.full_name || "Update your name"} 
              />
              <InfoItem 
                icon="" 
                label="Gender" 
                value={profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)} 
              />
              <InfoItem 
                icon="" 
                label="Email" 
                value={profile.email} 
              />
              <InfoItem 
                icon="" 
                label="Date of Birth" 
                value={formatDate(profile.dob)} 
              />
              <InfoItem 
                icon="" 
                label="Member Since" 
                value={formatDate(profile.created_at)} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// StatsCard and InfoItem components remain the same...
const StatsCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#5444FB]/30 transition-all duration-300 hover:shadow-lg">
    <div className="text-3xl mb-3">{icon}</div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-semibold text-gray-900 mt-1 break-words">{value}</p>
  </div>
);

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white transition-all duration-300">
    <span className="text-xl">{icon}</span>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-base font-medium text-gray-900 break-words">{value}</p>
    </div>
  </div>
);

export default ProfilePage;