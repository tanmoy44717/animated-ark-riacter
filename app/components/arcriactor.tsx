"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from "framer-motion";

const FRAME_COUNT = 240;
const IMAGE_PATH = "/animatedarcriacter/ezgif-frame-";

export default function ArcRiactor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll progress for the entire WINDOW
  const { scrollYProgress } = useScroll();

  // Map scroll progress to frame index.
  // We implement a "ping-pong" effect:
  // 0% -> 50%: Disassemble (Frame 0 to 239)
  // 50% -> 100%: Reassemble (Frame 239 to 0)
  const currentFrame = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, FRAME_COUNT - 1, 0]
  );
  
  // Add spring physics to smooth out the frame transition
  const smoothFrame = useSpring(currentFrame, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // Preload Images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          // Pad index with zeros (001, 002, etc.)
          const frameIndex = i.toString().padStart(3, "0");
          img.src = `${IMAGE_PATH}${frameIndex}.jpg`;
          img.onload = () => {
             // Store at i-1 (0-indexed)
            loadedImages[i - 1] = img;
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            resolve(); // Resolve anyway to avoid blocking
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // Render function
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    
    // Safety check: ensure image exists at index
    const img = images[index];

    if (!canvas || !ctx || !img) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate "cover" fit (fill the screen)
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    
    // Draw
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // React to frame changes
  useMotionValueEvent(smoothFrame, "change", (latest) => {
    const frameIndex = Math.round(latest);
    const safeIndex = Math.min(Math.max(frameIndex, 0), FRAME_COUNT - 1);
    if (images.length > 0) {
      renderFrame(safeIndex);
    }
  });

  // Handle Resize & Initial Render
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        const latest = smoothFrame.get();
        const frameIndex = Math.round(latest);
        const safeIndex = Math.min(Math.max(frameIndex, 0), FRAME_COUNT - 1);
        if (images.length > 0) renderFrame(safeIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, smoothFrame]);


  // --- HUD / Data Visuals Logic ---
  const coreTemp = useTransform(scrollYProgress, [0, 0.5, 1], [3000, 50000, 3000]);
  const rpm = useTransform(scrollYProgress, [0, 0.5, 1], [1000, 25000, 0]);
  
  const AnimatedNumber = ({ value, label }: { value: import("framer-motion").MotionValue<number>, label: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useMotionValueEvent(value, "change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return (
      <div className="flex flex-col items-end">
        <span className="text-xs text-blue-400 font-mono tracking-widest uppercase mb-1">{label}</span>
        <span className="text-2xl font-mono text-white/90 tabular-nums">
          {displayValue.toLocaleString()}
        </span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white/80 mb-4"></div>
          <p className="text-white/60 tracking-widest text-xs uppercase animate-pulse">Initializing Core...</p>
        </div>
      )}

      {/* The Canvas */}
      <canvas ref={canvasRef} className="w-full h-full object-cover block" />
      
      {/* --- HUD Layer --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                  backgroundSize: '100px 100px'
                }}>
          </div>

          {/* Scanning Line */}
          <motion.div 
              className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner Data Blocks */}
          <div className="absolute bottom-10 left-10 hidden md:flex gap-8 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
              <AnimatedNumber value={coreTemp} label="CORE TEMP (K)" />
              <AnimatedNumber value={rpm} label="ROTOR RPM" />
              <div className="flex flex-col items-end">
                  <span className="text-xs text-green-400 font-mono tracking-widest uppercase mb-1">SYSTEM STATUS</span>
                  <span className="text-xl font-mono text-white/90">OPTIMAL</span>
              </div>
          </div>

          {/* Right Side Vertical Metrics */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:flex flex-col gap-2">
              {[...Array(20)].map((_, i) => (
                  <motion.div 
                      key={i}
                      className="w-1 h-1 bg-white/20 rounded-full"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity }}
                  />
              ))}
            </div>
      </div>
    </div>
  );
}
