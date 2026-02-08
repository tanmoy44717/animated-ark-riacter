export default function Specs() {
  return (
    <div className="min-h-screen bg-black/40 text-white pt-24 px-6 md:px-24 pb-24">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">Technical Specifications</h1>
      
      <div className="grid grid-cols-1 gap-12 max-w-6xl">
        
        {/* Core Metrics Table */}
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
           <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-blue-500 rounded-full"/>
                  PRIMARY SYSTEMS DATA
               </h2>
               <div className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5">
                   DOC_REF: ARC-739-B
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-mono text-sm">
               {/* Left Column */}
               <div className="space-y-4">
                  <SpecRow label="MAX_NET_OUTPUT" value="128.5 GW" unit="GIGAWATTS" />
                  <SpecRow label="IDLE_OUTPUT" value="12.4 GW" unit="GIGAWATTS" />
                  <SpecRow label="CORE_TEMPERATURE" value="5,400 K" unit="KELVIN" />
                  <SpecRow label="MAGNETIC_FIELD" value="14.5 T" unit="TESLA" />
                  <SpecRow label="OSCILLATION_FREQ" value="400.2 Hz" unit="HERTZ" />
                  <SpecRow label="PLASMA_DENSITY" value="10^20 m^-3" unit="PARTICLES" />
                  <SpecRow label="FUEL_EFFICIENCY" value="99.98%" unit="RATING" />
               </div>

               {/* Right Column */}
               <div className="space-y-4">
                  <SpecRow label="CHASSIS_DIAMETER" value="120 mm" unit="MILLIMETERS" />
                  <SpecRow label="CHASSIS_DEPTH" value="80 mm" unit="MILLIMETERS" />
                  <SpecRow label="TOTAL_WEIGHT" value="4.2 kg" unit="KILOGRAMS" />
                  <SpecRow label="COOLING_METHOD" value="LIQUID_N2" unit="ACTIVE" />
                  <SpecRow label="ISOTOPE_TYPE" value="PD-106" unit="STABLE" />
                  <SpecRow label="HALF_LIFE" value="2.4e4 Y" unit="YEARS" />
                  <SpecRow label="SHIELD_RATING" value="CLASS-A" unit="ISO-9001" />
               </div>
           </div>
        </div>

        {/* Material Composition */}
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
           <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-purple-500 rounded-full"/>
              MATERIAL COMPOSITION
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MaterialCard 
                    symbol="Ti" 
                    name="Gold-Titanium Alloy" 
                    usage="Primary Chassis" 
                    desc="Aerospace grade alloy capable of withstanding extreme thermal stress without deformation."
                />
                <MaterialCard 
                    symbol="Pd" 
                    name="Palladium Core" 
                    usage="Ionization Chamber" 
                    desc="Key catalyst for the cold fusion reaction. Breaks down hydrogen isotopes at room temperature."
                />
                <MaterialCard 
                    symbol="Re" 
                    name="Rare Earth Magnets" 
                    usage="Containment Field" 
                    desc="Neodymium-Iron-Boron magnets arranged in a Halbach array to focus magnetic flux inwards."
                />
           </div>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-12 max-w-6xl mt-12">
         {/* Operational Limits */}
         <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
               <span className="w-1.5 h-8 bg-red-500 rounded-full"/>
               OPERATIONAL LIMITS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
                {[
                    { label: "CRITICAL_MASS_THRESHOLD", val: "8.4 kg" },
                    { label: "THERMAL_RUNAWAY", val: "6,200 K" },
                    { label: "FIELD_COLLAPSE_POINT", val: "0.04 T" },
                    { label: "MAX_G_FORCE_LOAD", val: "45 G" },
                    { label: "RADIATION_LEAK_TOLERANCE", val: "0.002 mSv" },
                    { label: "COOLANT_PRESSURE_MAX", val: "4500 PSI" },
                    { label: "STARTUP_ENERGY_REQ", val: "420 MJ" },
                    { label: "MIN_IDLE_TEMP", val: "200 K" },
                    { label: "CORE_LIFESPAN_CYCLES", val: "50,000" },
                    { label: "INJECTOR_LATENCY", val: "4 ms" },
                    { label: "SCRAM_RESPONSE_TIME", val: "0.05 s" },
                    { label: "BATTLE_DAMAGE_THRESHOLD", val: "35%" },
                    { label: "EMP_RESISTANCE", val: "CLASS-IV" },
                    { label: "UNDERWATER_DEPTH_MAX", val: "800 m" },
                    { label: "ATMOSPHERIC_REENTRY", val: "RATED" }
                ].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-white/40">{item.label}</span>
                        <span className="text-red-400 font-bold">{item.val}</span>
                    </div>
                ))}
            </div>
         </div>

         {/* Field Harmonics */}
         <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
               <span className="w-1.5 h-8 bg-cyan-500 rounded-full"/>
               FIELD HARMONICS DATABASE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-mono">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="bg-black/20 p-2 rounded border border-white/5 flex flex-col gap-1">
                        <span className="text-cyan-500/50">WAVEFORM_{String(i*45 + 100)}</span>
                        <span className="text-white text-lg">{Math.floor(Math.random() * 900) + 100} Hz</span>
                        <div className="w-full bg-white/10 h-1 rounded-full"><div style={{width: `${Math.random() * 100}%`}} className="h-full bg-cyan-500/50 rounded-full"/></div>
                    </div>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
}

// Helper Components
function SpecRow({ label, value, unit }: { label: string, value: string, unit: string }) {
    return (
        <div className="flex justify-between items-baseline border-b border-white/5 pb-2 hover:bg-white/5 px-2 rounded-lg transition-colors group cursor-default">
            <span className="text-white/40 group-hover:text-blue-400 transition-colors">{label}</span>
            <div className="text-right">
                <span className="text-white/90 font-bold mr-2">{value}</span>
                <span className="text-[10px] text-white/30">{unit}</span>
            </div>
        </div>
    );
}

function MaterialCard({ symbol, name, usage, desc }: { symbol: string, name: string, usage: string, desc: string }) {
    return (
        <div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-purple-500/50 transition-colors group">
            <div className="flex items-start gap-4 mb-4">
                 <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xl text-white/50 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors font-mono">
                     {symbol}
                 </div>
                 <div>
                     <strong className="block text-white/90 group-hover:text-purple-300 transition-colors">{name}</strong>
                     <span className="text-xs text-white/50 uppercase tracking-wider">{usage}</span>
                 </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
