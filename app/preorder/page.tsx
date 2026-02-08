"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PreOrder() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem("arc_session_token");
    if (!session) {
        router.push("/login?redirect=preorder");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black/40 text-white pt-24 px-6 md:px-24 flex items-center justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Product Info */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full text-[10px] font-mono text-blue-400 mb-6 uppercase tracking-widest bg-blue-500/10">
                    Limited Availability
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                    Reserve the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Future.
                    </span>
                </h1>
                <p className="text-xl text-white/60 leading-relaxed mb-8">
                    The MK-II Residential Arc Reactor brings infinite, clean energy to your home. Join the waitlist for the 2029 deployment cycle.
                </p>
                <ul className="space-y-4 mb-10">
                    {["Zero Emissions", "Unlimited Output", "Self-Sustaining", "Lifetime Warranty"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <Check className="w-3 h-3" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
                {submitted ? (
                    <div className="h-[400px] flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                            <Check className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Reservation Confirmed</h3>
                        <p className="text-white/60 mb-6">We have added you to the priority queue. A confirmation signal has been sent to your device.</p>
                        <a href="/" className="text-blue-400 hover:text-white transition-colors text-sm font-mono">RETURN TO HOME</a>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold mb-2">Priority Reservation</h3>
                        <p className="text-white/40 text-sm mb-8">No deposit required for Tier-1 clearance holders.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-white/40 mb-1 ml-1">FIRST_NAME</label>
                                    <input type="text" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="Tony" />
                                </div>
                                 <div>
                                    <label className="block text-xs font-mono text-white/40 mb-1 ml-1">LAST_NAME</label>
                                    <input type="text" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="Stark" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-white/40 mb-1 ml-1">CONTACT_EMAIL</label>
                                <input type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="user@starkindustries.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-white/40 mb-1 ml-1">REGION</label>
                                <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white/80">
                                    <option>North America</option>
                                    <option>Europe</option>
                                    <option>Asia Pacific</option>
                                </select>
                            </div>
                            
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 group transition-all transform hover:scale-[1.02]">
                                RESERVE UNIT
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </>
                )}
            </motion.div>

        </div>
    </div>
  );
}
