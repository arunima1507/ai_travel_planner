"use client";

import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/ProtectedRoute";
import { supabase } from "../../lib/supabase";
import TravelForm from "../../components/TravelForm";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

        <div className="w-full px-6 flex justify-center">
          <TravelForm />
        </div>
      </main>
    </ProtectedRoute>
  );
}