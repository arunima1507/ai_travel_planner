"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Check your email.");
    }
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

        <h1 className="text-4xl font-black text-center">
          Create Account
        </h1>

        <p className="text-center opacity-70 mt-3">
          Start planning your AI-powered journeys
        </p>

        <div className="mt-10 flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email"
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
            >
             {showPassword ? "🙈" : "👁️"}
            </button>
            </div>

          <button
            onClick={handleSignup}
            className="bg-white text-black rounded-2xl py-4 font-bold hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}