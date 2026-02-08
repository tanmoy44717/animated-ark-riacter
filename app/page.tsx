"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // --- Animation Helpers ---
  // Create a reusable fade-in/out hook based on scroll ranges
  const useScrollFade = (start: number, end: number) => {
    // Fade in over 5% range, stay visible, fade out over 5% range
    const fadeInStart = start;
    const fadeInEnd = start + 0.03;
    const fadeOutStart = end - 0.03;
    const fadeOutEnd = end;
    
    const opacity = useTransform(scrollYProgress, [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd], [50, 0, 0, -50]);
    return { opacity, y };
  };

  // --- Text Animation Logic (6 Stages) ---
  
  // 0. Hero (0% - 15%) - Starts visible, fades out
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const yHero = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // 1. MK-I Core (17% - 28%)
  const { opacity: opacityStage1, y: yStage1 } = useScrollFade(0.17, 0.28);

  // 2. Thermal Regulation (30% - 41%)
  const { opacity: opacityStage2, y: yStage2 } = useScrollFade(0.30, 0.41);

  // 3. Magnetic Containment (43% - 54%)
  const { opacity: opacityStage3, y: yStage3 } = useScrollFade(0.43, 0.54);

  // 4. Fusion Injection (56% - 67%)
  const { opacity: opacityStage4, y: yStage4 } = useScrollFade(0.56, 0.67);

  // 5. Output Regulation (69% - 80%)
  const { opacity: opacityStage5, y: yStage5 } = useScrollFade(0.69, 0.80);

  // 6. Safety & CTA (85% - 100%) - Fades in, stays visible
  const opacityCTA = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const yCTA = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);


  return (
    // Height determines animation duration (7000vh for a long, 6-stage scroll)
    <div className="relative h-[700vh]">
      
      {/* 0. Hero Section (0%) */}
      <motion.div 
          style={{ opacity: opacityHero, y: yHero }} 
          className="fixed inset-0 flex items-start justify-center p-4 pointer-events-none pt-24 md:pt-32"
      >
          {/* Main Card - Liquid Glass Effect */}
          <div className="text-center backdrop-blur-[2px] bg-white/1 p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
               <h1 className="text-6xl md:text-9xl font-bold text-white/90 tracking-tighter mb-6 drop-shadow-2xl">
                  ARC REACTOR
              </h1>
              <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_10px_#3b82f6]" />
              <p className="text-blue-200/80 tracking-[0.4em] uppercase text-sm font-semibold mb-10">
                  Next Generation Energy
              </p>
              
              {/* Detailed Diagnostics Data Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-left max-w-3xl mx-auto">
                  <div className="bg-black/40 p-3 rounded border border-white/5 backdrop-blur-md">
                      <span className="block text-white/30 mb-1 text-[10px] tracking-widest">NET OUTPUT</span>
                      <div className="flex items-end gap-2">
                          <span className="text-green-400 text-lg font-bold">128.5</span>
                          <span className="text-white/50 mb-1">GW</span>
                      </div>
                  </div>
                  <div className="bg-black/40 p-3 rounded border border-white/5 backdrop-blur-md">
                      <span className="block text-white/30 mb-1 text-[10px] tracking-widest">FUSION EFFICIENCY</span>
                      <div className="flex items-end gap-2">
                          <span className="text-blue-400 text-lg font-bold">99.9</span>
                          <span className="text-white/50 mb-1">%</span>
                      </div>
                  </div>
                  <div className="bg-black/40 p-3 rounded border border-white/5 backdrop-blur-md">
                      <span className="block text-white/30 mb-1 text-[10px] tracking-widest">CORE TEMP</span>
                      <div className="flex items-end gap-2">
                          <span className="text-orange-400 text-lg font-bold">4.2</span>
                          <span className="text-white/50 mb-1">MK</span>
                      </div>
                  </div>
                   <div className="bg-black/40 p-3 rounded border border-white/5 backdrop-blur-md">
                      <span className="block text-white/30 mb-1 text-[10px] tracking-widest">FIELD INTEGRITY</span>
                      <div className="flex items-end gap-2">
                          <span className="text-purple-400 text-lg font-bold">STABLE</span>
                      </div>
                  </div>
              </div>
          </div>
      </motion.div>

      {/* 1. MK-I Core (Left) */}
      <motion.div 
          style={{ opacity: opacityStage1, y: yStage1 }}
          className="fixed inset-0 flex items-center justify-start p-10 md:pl-24 pointer-events-none"
      >
          <div className="max-w-lg backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-blue-400">STAGE 01: CORE EXPANSION</span>
              </div>
              <h2 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                  MK-I Palladium Core
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                  The heart of the system. Disengaging locking mechanisms to reveal the primary ionization chamber.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-4">
                 <div><span className="block text-blue-400">ALLOY</span><span>TI-GOLD</span></div>
                 <div><span className="block text-blue-400">STATUS</span><span>UNLOCKED</span></div>
              </div>
          </div>
      </motion.div>

      {/* 2. Thermal Regulation (Right) */}
      <motion.div 
          style={{ opacity: opacityStage2, y: yStage2 }}
          className="fixed inset-0 flex items-center justify-end p-10 md:pr-24 pointer-events-none"
      >
          <div className="max-w-lg text-right backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-center gap-3 mb-4 justify-end">
                  <span className="text-xs font-mono text-orange-400">STAGE 02: COOLING</span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                  Thermal Regulation
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                 Liquid nitrogen cooling channels maintain optimal operating temperatures even at maximum output.
              </p>
               <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-4 text-right">
                 <div><span className="block text-orange-400">TEMP</span><span>-180 C</span></div>
                 <div><span className="block text-orange-400">FLOW</span><span>OPTIMAL</span></div>
              </div>
          </div>
      </motion.div>

      {/* 3. Magnetic Containment (Left) */}
       <motion.div 
          style={{ opacity: opacityStage3, y: yStage3 }}
          className="fixed inset-0 flex items-center justify-start p-10 md:pl-24 pointer-events-none"
      >
          <div className="max-w-lg backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-purple-400">STAGE 03: STABILITY</span>
              </div>
              <h2 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                  Magnetic Containment
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                  High-yield oscillating fields keep the plasma reaction stable and suspended away from the chassis.
              </p>
               <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-4">
                 <div><span className="block text-purple-400">FIELD</span><span>14.5 T</span></div>
                 <div><span className="block text-purple-400">OSC</span><span>400 Hz</span></div>
              </div>
          </div>
      </motion.div>

      {/* 4. Fusion Injection (Right) */}
      <motion.div 
          style={{ opacity: opacityStage4, y: yStage4 }}
          className="fixed inset-0 flex items-center justify-end p-10 md:pr-24 pointer-events-none"
      >
           <div className="max-w-lg text-right backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-center gap-3 mb-4 justify-end">
                  <span className="text-xs font-mono text-cyan-400">STAGE 04: INJECTION</span>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                  Fusion Injection
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                  Initiating cold fusion. Isotope injectors flood the core, starting the self-sustaining cycle.
              </p>
               <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-4 text-right">
                 <div><span className="block text-cyan-400">ISOTOPE</span><span>PD-106</span></div>
                 <div><span className="block text-cyan-400">RATE</span><span>800 mg/s</span></div>
              </div>
          </div>
      </motion.div>

       {/* 5. Output Regulation (Left) */}
       <motion.div 
          style={{ opacity: opacityStage5, y: yStage5 }}
          className="fixed inset-0 flex items-center justify-start p-10 md:pl-24 pointer-events-none"
      >
          <div className="max-w-lg backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-green-400">STAGE 05: EXTRACTION</span>
              </div>
              <h2 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                  Output Regulation
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                  converting plasma energy into clean electricity. 99.9% efficient energy capture.
              </p>
               <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40 border-t border-white/10 pt-4">
                 <div><span className="block text-green-400">VOLTAGE</span><span>850 kV</span></div>
                 <div><span className="block text-green-400">AMPS</span><span>400 kA</span></div>
              </div>
          </div>
      </motion.div>


      {/* 6. Safety & CTA (Centered) */}
      <motion.div 
          style={{ opacity: opacityCTA, y: yCTA }}
          className="fixed inset-0 flex items-center justify-center pointer-events-auto"
      >
          <div className="w-[800px] text-center backdrop-blur-xl bg-black/70 p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
                  <h2 className="text-3xl font-bold text-white/90 tracking-tight flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                      SYSTEM STATUS
                  </h2>
                  <span className="font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded">ALL SYSTEMS NOMINAL</span>
              </div>

              {/* Advanced Dashboard Grid */}
              <div className="grid grid-cols-3 gap-6 mb-10 text-left">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                      <span className="text-[10px] text-white/40 tracking-widest block mb-2">POWER DISTRIBUTION</span>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                          <div className="h-full bg-blue-500 w-[92%]" />
                      </div>
                      <span className="text-xl font-mono text-white">92.4%</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                      <span className="text-[10px] text-white/40 tracking-widest block mb-2">GRID LOAD BALANCE</span>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                          <div className="h-full bg-purple-500 w-[45%]" />
                      </div>
                      <span className="text-xl font-mono text-white">45.1%</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                      <span className="text-[10px] text-white/40 tracking-widest block mb-2">SYSTEM UPTIME</span>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                          <div className="h-full bg-green-500 w-[99%]" />
                      </div>
                      <span className="text-xl font-mono text-white">99.99%</span>
                  </div>
              </div>

              <div className="mt-8 flex justify-center gap-6">
                <Link href="/login" className="px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    ACCESS CONSOLE
                </Link>
              </div>
          </div>
      </motion.div>

    </div>
  );
}
