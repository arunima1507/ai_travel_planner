"use client";

import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/ProtectedRoute";
import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

        <div className="text-center">
          <h1 className="text-6xl font-black">
            Dashboard
          </h1>

          <p className="mt-6 text-xl opacity-70">
            Welcome to your AI travel planner.
          </p>

          <button
            onClick={handleLogout}
            className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >
            Logout
          </button>
        </div>
      </main>
    </ProtectedRoute>
  );
}