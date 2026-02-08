"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Scan, User, ChevronRight } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    // Auto-redirect if already logged in
    const session = sessionStorage.getItem("arc_session_token");
    if (session) {
        router.push("/profile");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    
    // Simulate biometric scan
    setTimeout(() => {
      setIsScanning(false);
      setAccessGranted(true);
      
      // Set session persistence
      if (typeof window !== 'undefined') {
          sessionStorage.setItem("arc_session_token", "active");
      }

      // In a real app, redirect here
      setTimeout(() => {
          window.location.href = "/profile";
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{
                 backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
                 backgroundSize: "40px 40px"
             }}
        />
        
        {/* Animated Background Blobs */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full"
        />
        <motion.div 
             animate={{ scale: [1, 1.5, 1], rotate: [0, -45, 0] }}
             transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full"
        />

        <div className="relative z-10 w-full max-w-md">
            
            <Link href="/" className="inline-flex items-center text-white/50 hover:text-blue-400 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Observation Deck
            </Link>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
                
                {/* Scan Line Animation */}
                {isScanning && (
                    <motion.div 
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-2 bg-gradient-to-b from-blue-500 to-transparent shadow-[0_0_20px_#3b82f6] z-50 opacity-80"
                    />
                )}

                {accessGranted ? (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                            <Lock className="w-10 h-10 text-green-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">ACCESS GRANTED</h2>
                        <p className="text-green-400/80 font-mono tracking-widest uppercase">Welcome back, Boss.</p>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                                <User className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-1">SECURE LOGIN</h2>
                            <p className="text-white/40 text-sm">Enter command keys for reactor control.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-blue-400 uppercase tracking-widest ml-1">COMMAND_KEY</label>
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 focus:bg-blue-500/10 transition-all font-mono"
                                        placeholder="USR-739-ALPHA"
                                    />
                                    <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-white/10 group-focus-within:bg-blue-500 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-blue-400 uppercase tracking-widest ml-1">ACCESS_TOKEN</label>
                                <div className="relative group">
                                    <input 
                                        type="password" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 focus:bg-blue-500/10 transition-all font-mono"
                                        placeholder="••••••••••••"
                                    />
                                    <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-white/10 group-focus-within:bg-blue-500 transition-colors" />
                                </div>
                            </div>

                            <button 
                                type="submit"
                                disabled={isScanning}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isScanning ? "VERIFYING IDENTITY..." : (
                                        <>
                                            INITIATE HANDSHAKE
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">Forgot Credentials?</Link>
                            <Link href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                                <Scan className="w-3 h-3" />
                                Request Access
                            </Link>
                        </div>
                    </>
                )}
            </div>
            
            <div className="mt-6 text-center text-[10px] text-white/20 font-mono">
                SECURE CONNECTION | END-TO-END ENCRYPTED | V.4.0.2
            </div>

        </div>
    </div>
  );
}
