"use client";

import { useState } from "react";

type Props = {
  variant?: "hero" | "inline" | "post";
};

export default function OptInForm({ variant = "inline" }: Props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <p className="text-green-800 font-semibold text-lg">🎉 {message}</p>
        <p className="text-green-700 text-sm mt-1">Check your inbox (and spam folder, just in case).</p>
      </div>
    );
  }

  const isHero = variant === "hero";
  const isPost = variant === "post";

  return (
    <div className={`${isHero ? "bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg" : isPost ? "bg-brand-cream border border-brand-pink/20 rounded-2xl p-6 my-8" : "bg-brand-cream rounded-2xl p-6"}`}>
      {isPost && (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-1">Free Resource</p>
      )}
      <h3 className={`font-serif font-bold ${isHero ? "text-2xl text-brand-navy" : "text-xl text-brand-navy"} mb-1`}>
        Download My Free SMART Homeschooling Guide
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        A practical framework for homeschool families who want to plan with confidence. No overwhelm, no guilt.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
        />
        <input
          type="email"
          placeholder="Your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-brand-pink hover:bg-brand-purple text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Me the Free Guide →"}
        </button>
        {status === "error" && <p className="text-red-600 text-xs">{message}</p>}
        <p className="text-gray-400 text-xs text-center">No spam. Unsubscribe anytime.</p>
      </form>
    </div>
  );
}
