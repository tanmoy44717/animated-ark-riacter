"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/5 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-10 h-10">
             <Image 
                src="/logo.svg" 
                alt="Arc Labs Logo" 
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
             />
        </div>
        <span className="text-xl font-bold tracking-tight text-white/90">
          ARC <span className="text-blue-500">LABS</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        {[
          { name: "Home", path: "/" },
          { name: "Overview", path: "/overview" }, 
          { name: "Specs", path: "/specs" }, 
          { name: "Technology", path: "/technology" }, 
          { name: "Support", path: "/support" }
        ].map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="hover:text-white transition-colors hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/support" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search className="w-5 h-5 text-white/70" />
        </Link>
        <Link href="/profile" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <User className="w-5 h-5 text-white/70" />
        </Link>
        <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-white/70" />
        </button>
        <Link href="/preorder" className="hidden md:block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white/90 text-sm font-semibold transition-all backdrop-blur-sm">
          Pre-Order
        </Link>
      </div>
    </motion.nav>
  );
}

