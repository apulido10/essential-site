"use client";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";

interface ContactProps { dict: Dictionary; }

export default function Contact({ dict }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(dict.contact.sending);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus(dict.contact.success);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(dict.contact.error);
    }
  };

  return (
    <section id="contact" className="bg-dark py-24 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase text-center mb-3">{dict.contact.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{dict.contact.title}</h2>
        <p className="text-gray-500 text-center mb-12">{dict.contact.subtitle}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-400 text-sm mb-2">{dict.contact.name}</label>
            <input type="text" className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors" placeholder={dict.contact.namePlaceholder} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">{dict.contact.email}</label>
            <input type="email" className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors" placeholder={dict.contact.emailPlaceholder} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">{dict.contact.message}</label>
            <textarea rows={5} className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors resize-none" placeholder={dict.contact.messagePlaceholder} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
          </div>
          <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white py-3.5 rounded-lg font-medium transition-colors">{dict.contact.send}</button>
          {status && (
            <p className={`text-center text-sm ${status === dict.contact.success ? "text-green-400" : status === dict.contact.error ? "text-red-400" : "text-gray-400"}`}>{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
