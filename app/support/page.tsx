"use client";

import { useState } from "react";
import { Search, BookOpen, MessageSquare, Wrench, AlertTriangle, FileText, Terminal, X } from "lucide-react";

// Mock Database
const SEARCH_DB = [
  { id: 1, type: "ERROR_CODE", title: "E-74: Magnetic Field Drift", desc: "Detected asymmetry in the containment torus. Recalibrate magnets." },
  { id: 2, type: "MANUAL", title: "Palladium Core Handling", desc: "Standard operating procedure for ISO-9001 isotope replacement." },
  { id: 3, type: "FIRMWARE", title: "Patch Notes v4.0.2", desc: "Optimized thermal regulation and fixed plasma injector lag." },
  { id: 4, type: "ERROR_CODE", title: "T-99: Thermal Runaway Warning", desc: "Coolant pressure critical. Engage emergency flush immediately." },
  { id: 5, type: "LOG", title: "Incident Report #882", desc: "Unscheduled power surge detected in Sector 7." },
  { id: 6, type: "KB", title: "Community Forum: Modding Guide", desc: "How to safely overclock your MK-II reactor." },
  { id: 7, type: "MANUAL", title: "Emergency Shutdown Protocols", desc: "Step-by-step SCRAM procedure for critical failures." },
  { id: 8, type: "ERROR_CODE", title: "C-12: Containment Breach", desc: "Radiation leak detected. Seal the chamber." }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<typeof SEARCH_DB>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (!searchQuery.trim()) {
          setResults([]);
          setHasSearched(false);
          return;
      }
      
      const filtered = SEARCH_DB.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setHasSearched(true);
  };

  const clearSearch = () => {
      setSearchQuery("");
      setResults([]);
      setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-black/40 text-white pt-24 px-6 md:px-24">
      <h1 className="text-5xl font-bold mb-8 tracking-tight">Support & Diagnostics</h1>
      
      {/* Search Module */}
      <div className="max-w-2xl mb-16 relative z-20">
          <form onSubmit={handleSearch} className="relative group">
              <input 
                 type="text" 
                 placeholder="Search error codes, firmware, or manuals..."
                 className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all pl-12"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-400" />
              
              {searchQuery && (
                  <button type="button" onClick={clearSearch} className="absolute right-20 top-1/2 -translate-y-1/2 p-2 hover:text-white text-white/40">
                      <X className="w-4 h-4" />
                  </button>
              )}

              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold transition-colors">
                  SCAN
              </button>
          </form>
      </div>

      {hasSearched ? (
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <h2 className="text-2xl font-bold">Search Results</h2>
                  <span className="text-sm font-mono text-white/40">{results.length} RECORDS FOUND</span>
              </div>
              
              {results.length > 0 ? (
                  <div className="space-y-4">
                      {results.map((item) => (
                          <div key={item.id} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-500/50 transition-colors group">
                              <div className="flex items-start gap-4">
                                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                      {item.type === "ERROR_CODE" && <AlertTriangle className="w-6 h-6" />}
                                      {item.type === "MANUAL" && <BookOpen className="w-6 h-6" />}
                                      {item.type === "FIRMWARE" && <Terminal className="w-6 h-6" />}
                                      {item.type === "LOG" && <FileText className="w-6 h-6" />}
                                      {item.type === "KB" && <MessageSquare className="w-6 h-6" />}
                                  </div>
                                  <div>
                                      <div className="flex items-center gap-3 mb-1">
                                          <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded text-white/60 uppercase tracking-wider">{item.type}</span>
                                          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                      </div>
                                      <p className="text-white/60">{item.desc}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              ) : (
                  <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
                      <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white/40">No Matching Records</h3>
                      <p className="text-sm text-white/30 mt-2">Try adjusting your search terms or running a full diagnostic.</p>
                  </div>
              )}
          </div>
      ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
                
                {/* Status Panel (Existing) */}
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                        LIVE SYSTEM STATUS
                    </h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-white/60">Global Grid (ArcNet)</span>
                            <span className="text-green-400 text-sm font-mono">OPERATIONAL</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-white/60">Firmware Repository</span>
                            <span className="text-green-400 text-sm font-mono">ONLINE (v4.0.2)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-white/60">Diagnostics API</span>
                            <span className="text-green-400 text-sm font-mono">ACTIVE</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-white/60">Core Stability Index</span>
                            <span className="text-blue-400 text-sm font-mono">98.4%</span>
                        </div>
                        <div className="mt-6 pt-4 text-white/30 leading-relaxed font-mono text-sm">
                            &gt; SYSTEM_MSG: All arc units operating within normal parameters. 
                            <br/>&gt; Firmware patch v4.0.2 rolling out next Tuesday.
                        </div>
                    </div>
                </div>

                {/* Knowledge Base */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Knowledge Base</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { icon: BookOpen, title: "Owner's Manual (MK-I)", desc: "Handling instructions for Palladium cores." },
                            { icon: Wrench, title: "Troubleshooting Guide", desc: "Common error codes: E-74, T-99, and Field Drift." },
                            { icon: MessageSquare, title: "Community Forum", desc: "Connect with other Arc Technicians." }
                        ].map((item, i) => (
                            <button key={i} className="flex items-start gap-4 p-4 border border-white/5 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 text-left transition-all group">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm text-white/50">{item.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Diagnostic Tools Grid (10 Functions) */}
            <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-2 inline-block mt-24">Diagnostic Tools & Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
                {[
                    { label: "Remote Diagnostic", code: "DIA-001", status: "READY" },
                    { label: "Firmware Flash", code: "SYS-UPD", status: "V.4.0.2" },
                    { label: "Core Alignment", code: "CAL-99", status: "AUTO" },
                    { label: "Thermal Flush", code: "COOL-N2", status: "MANUAL" },
                    { label: "Field Harmonics", code: "MAG-X", status: "STABLE" },
                    { label: "Incident Report", code: "LOG-ERR", status: "OPEN" },
                    { label: "Spare Parts", code: "INV-CHK", status: "LINK" },
                    { label: "Warranty Check", code: "WAR-VAL", status: "ACTIVE" },
                    { label: "Technician Chat", code: "LIVE-SUP", status: "OFFLINE" },
                    { label: "Schematics", code: "BLU-PRT", status: "PDF" }
                ].map((item, i) => (
                    <button key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 hover:scale-105 transition-all group text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-50 transition-opacity">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                        <div className="text-[10px] font-mono text-white/40 mb-2">{item.code}</div>
                        <h3 className="font-bold text-white mb-1">{item.label}</h3>
                        <div className="text-xs text-blue-400 font-mono flex items-center gap-1">
                            <span className="w-1 h-1 bg-current rounded-full" />
                            {item.status}
                        </div>
                    </button>
                ))}
            </div>
          </>
      )}
    </div>
  );
}
