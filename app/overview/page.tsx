export default function Overview() {
  return (
    <div className="min-h-screen bg-black/40 text-white pt-24 px-6 md:px-24">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">System Overview</h1>
      <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
        The Arc Riactor represents a paradigm shift in sustainable energy generation. 
        Originally conceived to power autonomous units, it has evolved into a grid-scale solution for clean, infinite energy.
      </p>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
              { title: "Self-Sustaining", desc: "Closed-loop ionization cycle requires zero external fuel input once initialized." },
              { title: "Zero Emissions", desc: "Complete containment of all biproducts. 100% clean energy output." },
              { title: "Modular Core", desc: "Hot-swappable palladium cores allow for continuous uptime during maintenance." }
          ].map((item, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
              </div>
          ))}
      </div>

      {/* Timeline */}
      <h2 className="text-2xl font-bold mb-12 border-b border-white/10 pb-2 inline-block">Development Timeline</h2>
      <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4 relative">
          <div className="relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-black group-hover:scale-110 transition-transform shadow-[0_0_10px_#3b82f6]" />
              <span className="text-xs font-mono text-blue-400 mb-1 block tracking-widest">2023 - PROTOTYPE MK-I</span>
              <h3 className="text-xl font-bold text-white/90">Initial Proof of Concept</h3>
              <p className="text-white/60 mt-2 max-w-xl">First successful miniaturization of the arc technology. Achieved sustained reaction for 40 seconds.</p>
          </div>
          <div className="relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-black group-hover:scale-110 transition-transform shadow-[0_0_10px_#a855f7]" />
              <span className="text-xs font-mono text-purple-400 mb-1 block tracking-widest">2025 - MK-II VARIANT</span>
              <h3 className="text-xl font-bold text-white/90">Stable Fusion Achieved</h3>
              <p className="text-white/60 mt-2 max-w-xl">Solving the icing problem and achieving 300% efficiency output. Thermal regulation systems perfected.</p>
          </div>
           <div className="relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-white/20 rounded-full border-4 border-black" />
              <span className="text-xs font-mono text-white/40 mb-1 block tracking-widest">2028 - GRID DEPLOYMENT</span>
              <h3 className="text-xl font-bold text-white/50">Projected Milestone</h3>
              <p className="text-white/40 mt-2 max-w-xl">Global rollout of arc reactor towers for municipal power. Fossil fuel dependency eliminated.</p>
          </div>
      </div>

      {/* Global Impact & Energy Graphs */}
      <h2 className="text-2xl font-bold mb-12 border-b border-white/10 pb-2 inline-block mt-24">Global Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          <div>
              <p className="text-white/60 leading-relaxed mb-6">
                  The widespread adoption of Arc Technology will reduce global carbon emissions by 45% within the first decade of deployment. 
                  Sectors such as heavy manufacturing, desalination, and data centers will be the first to transition off the fossil grid.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <h4 className="text-sm font-bold text-white mb-4">Projected C02 Reduction (Gt)</h4>
                  <div className="space-y-3">
                      <div className="w-full bg-white/10 h-6 rounded-full overflow-hidden relative group">
                          <div className="h-full bg-red-500/50 w-[100%] flex items-center justify-end px-2 text-[10px] text-white/50">2024 (Baseline)</div>
                      </div>
                      <div className="w-full bg-white/10 h-6 rounded-full overflow-hidden relative group">
                          <div className="h-full bg-orange-500/50 w-[80%] flex items-center justify-end px-2 text-[10px] text-white/50">2026</div>
                      </div>
                      <div className="w-full bg-white/10 h-6 rounded-full overflow-hidden relative group">
                          <div className="h-full bg-green-500/50 w-[45%] flex items-center justify-end px-2 text-[10px] text-white/50">2030 (Arc Grid)</div>
                      </div>
                  </div>
              </div>
          </div>
          <div>
               <h4 className="text-sm font-bold text-white mb-4">Energy Density Comparison (MJ/kg)</h4>
               <div className="space-y-4 font-mono text-xs">
                   <div>
                       <div className="flex justify-between mb-1 text-white/40"><span>Lithium-Ion</span><span>0.875</span></div>
                       <div className="h-2 bg-white/10 rounded-full"><div className="w-[5%] h-full bg-gray-500 rounded-full"/></div>
                   </div>
                   <div>
                       <div className="flex justify-between mb-1 text-white/40"><span>Diesel</span><span>45</span></div>
                       <div className="h-2 bg-white/10 rounded-full"><div className="w-[15%] h-full bg-yellow-600 rounded-full"/></div>
                   </div>
                   <div>
                       <div className="flex justify-between mb-1 text-white/40"><span>Uranium (Fission)</span><span>76,000,000</span></div>
                       <div className="h-2 bg-white/10 rounded-full"><div className="w-[60%] h-full bg-orange-600 rounded-full"/></div>
                   </div>
                    <div>
                       <div className="flex justify-between mb-1 text-white/40"><span>Arc Palladium (Fusion)</span><span>350,000,000+</span></div>
                       <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                           <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"/>
                       </div>
                   </div>
               </div>
          </div>
      </div>

      {/* Global Relay Network (24+ Elements) */}
      <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-2 inline-block mt-24">Global Relay Network Status</h2>
      <p className="text-white/60 mb-8 max-w-3xl">
          Real-time telemetry from the first 24 active Arc Reactor pilot sites. All nodes are reporting nominal fusion stability.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-24">
          {[...Array(24)].map((_, i) => {
             const efficiency = 92 + (i % 8);
             const temp = 3000 + (i * 150);
             const status = i === 14 ? "MAINTENANCE" : (i === 21 ? "OPTIMIZING" : "ONLINE");
             const statusColor = i === 14 ? "text-yellow-500" : (i === 21 ? "text-blue-400" : "text-green-400");
             
             return (
              <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-lg hover:border-white/20 hover:bg-white/10 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-white/30">ARC-{String(i + 1).padStart(3, '0')}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 14 ? "bg-yellow-500" : "bg-green-500"} ${i !== 14 && "animate-pulse"}`} />
                  </div>
                  <div className={`text-xs font-bold font-mono mb-1 ${statusColor}`}>{status}</div>
                  
                  <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-white/50">
                          <span>EFF</span>
                          <span className="text-white">{efficiency}%</span>
                      </div>
                       <div className="flex justify-between text-[10px] text-white/50">
                          <span>TMP</span>
                          <span className="text-white">{temp}K</span>
                      </div>
                       <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                           <div className="h-full bg-blue-500/50" style={{ width: `${efficiency}%` }} />
                       </div>
                  </div>
              </div>
             )
          })}
      </div>
    </div>
  );
}
