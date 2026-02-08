"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Activity, Clock, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const session = sessionStorage.getItem("arc_session_token");
      if (!session) {
          router.push("/login");
      } else {
          setIsLoading(false);
      }
  }, [router]);

  const handleLogout = (e: React.MouseEvent) => {
      e.preventDefault();
      sessionStorage.removeItem("arc_session_token");
      window.location.href = "/";
  };

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-black/40 text-white pt-24 px-6 md:px-24">
        
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8">
                <div>
                    <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase mb-2 block">Identity Verified</span>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                        Welcome, Boss.
                    </h1>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-widest uppercase">Clearance: OMEGA</span>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* ID Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-1 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-48 h-48 rounded-full border-2 border-white/20 p-1 mb-6 relative group">
                         <div className="w-full h-full rounded-full overflow-hidden relative">
                             <img 
                                src="/sci_fi_commander_avatar.png" 
                                alt="Commander Avatar" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             />
                         </div>
                         <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black"/>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-1">Commander Tony</h2>
                    <p className="text-sm font-mono text-white/40 mb-6">ID: 892-ALPHA-Z</p>
                    
                    <div className="w-full border-t border-white/10 pt-6 mt-auto">
                        <button onClick={handleLogout} className="flex items-center justify-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-bold w-full">
                            <LogOut className="w-4 h-4" /> LOGOUT SESSION
                        </button>
                    </div>
                </motion.div>

                {/* Dashboard Stats */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatCard 
                        icon={Activity}
                        label="Active Sessions"
                        value="1"
                        sub="Location: Malibu, CA"
                    />
                     <StatCard 
                        icon={Clock}
                        label="Last Login"
                        value="Just Now"
                        sub="IP: 192.168.0.1 (Secure)"
                    />
                     <div className="col-span-1 sm:col-span-2 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 relative overflow-hidden group">
                         <div className="absolute right-0 top-0 p-32 bg-blue-500/20 blur-[100px] rounded-full group-hover:bg-blue-500/30 transition-colors" />
                         <h3 className="text-xl font-bold mb-2 relative z-10">Pre-Order Status</h3>
                         <p className="text-white/60 text-sm mb-4 relative z-10 max-w-md">
                             You have <span className="text-white font-bold">0</span> pending orders. The MK-II Arc Reactor is currently available for priority reservation.
                         </p>
                         <Link href="/preorder" className="inline-block bg-white text-black px-6 py-2 rounded-lg font-bold text-sm relative z-10 hover:scale-105 transition-transform">
                             Place New Order
                         </Link>
                     </div>
                </div>

            </div>

        </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub }: { icon: any, label: string, value: string, sub: string }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/5 rounded-lg text-white/60">
                    <Icon className="w-5 h-5" />
                </div>
            </div>
            <div className="mb-1 text-3xl font-bold">{value}</div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">{label}</div>
            <div className="text-xs text-green-400">{sub}</div>
        </div>
    )
}
