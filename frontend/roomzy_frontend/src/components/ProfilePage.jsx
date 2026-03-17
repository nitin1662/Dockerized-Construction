import { Mail, MapPin, Home, User } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  // Fetch user profile from DB
  useEffect(() => {
    if (!isLoggedIn || !user?.email) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/roommates/profile/${user.email}`
        );
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };

    fetchProfile();
  }, [isLoggedIn, user]);

  // If not logged in → show Login First message
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-3xl font-bold text-green-800">Please Login First 💚</h1>
      </div>
    );
  }

  // If profile is still loading
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-xl text-green-700">Loading your profile…</p>
      </div>
    );
  }

  // If logged in + profile fetched
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-green-100 p-8 space-y-8">

        {/* Header */}
        <div className="flex items-center space-x-5">
          <div className="h-20 w-20 bg-green-200 rounded-full flex items-center justify-center text-3xl font-bold text-green-700 shadow-inner">
            {profile.name[0]}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-900">{profile.name}</h1>
            <p className="text-green-700 flex items-center space-x-2 mt-1">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </p>
          </div>
        </div>

        {/* Basic Info */}
        <div>
          <h2 className="text-xl font-semibold text-green-900 mb-3">Basic Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem icon={<Home size={18} />} label="Rent" value={profile.rent} />
            <InfoItem icon={<User size={18} />} label="Place" value={profile.place} />
            <InfoItem icon={<Mail size={18} />} label="Email" value={profile.email} />
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-xl font-semibold text-green-900 mb-3">Preferences</h2>
          <div className="space-y-3">
            <PrefItem label="Choosing Factor" value={profile.choosingFactor} />
            <PrefItem label="Daily Routine" value={profile.dailyRoutine} />
            <PrefItem label="Social Activity" value={profile.socialActivity} />
            <PrefItem label="Expense Sharing" value={profile.expenseSharing} />
            <PrefItem label="Deal Breaker" value={profile.dealBreakerQuality} />
            <PrefItem label="Hobbies Importance" value={profile.hobbiesImportance} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-all">
      <span className="text-green-700">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-green-900">{label}</p>
        <p className="text-green-700">{value}</p>
      </div>
    </div>
  );
}

function PrefItem({ label, value }) {
  return (
    <div className="p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-all">
      <p className="text-sm font-semibold text-green-900">{label}</p>
      <p className="text-green-700">{value}</p>
    </div>
  );
}