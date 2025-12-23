
import React, { useState, useMemo, useEffect } from 'react';
import { INITIAL_ITINERARY } from './constants';
import { DailyPlan, TravelPoint } from './types';
import DayCard from './components/DayCard';
import MapComponent from './components/MapComponent';
import { getTravelTips } from './services/geminiService';

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedPoint, setSelectedPoint] = useState<TravelPoint>(
    INITIAL_ITINERARY.dailyPlans[0].points[0]
  );
  const [dynamicTips, setDynamicTips] = useState<string>("");
  const [loadingTips, setLoadingTips] = useState<boolean>(false);

  const currentPlan = useMemo(() => 
    INITIAL_ITINERARY.dailyPlans.find(p => p.day === activeDay) || INITIAL_ITINERARY.dailyPlans[0],
    [activeDay]
  );

  useEffect(() => {
    const fetchTips = async () => {
      setLoadingTips(true);
      const tips = await getTravelTips(selectedPoint.name);
      setDynamicTips(tips);
      setLoadingTips(false);
    };
    fetchTips();
  }, [selectedPoint]);

  const handleSelectDay = (day: number) => {
    setActiveDay(day);
    const firstPoint = INITIAL_ITINERARY.dailyPlans.find(p => p.day === day)!.points[0];
    setSelectedPoint(firstPoint);
  };

  const handleSelectPoint = (point: TravelPoint) => {
    setSelectedPoint(point);
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-[#f8f7f4]">
      {/* Hero Header */}
      <header className="relative h-[45vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1600" 
          alt="Hawaii Big Island Coast" 
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#f8f7f4]" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="animate-fade-in-up">
              <h1 className="text-slate-900 text-5xl md:text-7xl font-black mb-4 tracking-tighter italic drop-shadow-sm">
                {INITIAL_ITINERARY.tripTitle}
              </h1>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 bg-white/90 backdrop-blur px-5 py-2.5 rounded-2xl shadow-sm border border-slate-200 text-slate-800 font-bold text-sm">
                  🚗 Silver Camry • SFO ✈️ KOA
                </span>
                <span className="flex items-center gap-2 bg-teal-600 px-5 py-2.5 rounded-2xl shadow-lg text-white font-bold text-sm">
                  👨‍👩‍👧‍👦 Group of 5 • Holiday 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Itinerary */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="sticky top-6">
              <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Daily Routes</h2>
                <div className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">LOOP COMPLETED</div>
              </div>
              <div className="max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar space-y-3">
                {INITIAL_ITINERARY.dailyPlans.map(plan => (
                  <DayCard 
                    key={plan.day} 
                    plan={plan} 
                    isActive={activeDay === plan.day}
                    onSelectDay={handleSelectDay}
                    onSelectPoint={handleSelectPoint}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Map & Details */}
          <div className="flex-1">
            <div className="sticky top-6 space-y-6">
              {/* Map & Detail Container */}
              <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden">
                <div className="flex flex-col gap-6">
                  {/* Map */}
                  <div className="h-[350px] md:h-[450px] relative">
                    <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                      <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Active: {selectedPoint.name}</span>
                    </div>
                    <MapComponent 
                      lat={selectedPoint.lat} 
                      lng={selectedPoint.lng} 
                      name={selectedPoint.name} 
                    />
                  </div>

                  {/* Info Panel */}
                  <div className="px-4 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-lg uppercase tracking-wider">
                        {selectedPoint.category}
                      </span>
                      <span className="text-slate-400 font-bold text-xs flex items-center gap-1.5">
                         <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         {selectedPoint.time}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
                      {selectedPoint.name}
                    </h3>
                    
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-teal-500 pl-6 bg-slate-50/50 py-4 rounded-r-2xl">
                      {selectedPoint.description}
                    </p>

                    {/* AI Wisdom Box */}
                    <div className="bg-slate-950 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.2L18.2 21.8L12 17.2L5.8 21.8L8.2 14.2L2 9.6H9.6L12 2Z"/></svg>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1 bg-teal-500 rounded-lg font-black text-[10px] tracking-widest uppercase">AI Travel Guide</div>
                        <div className="h-px flex-1 bg-slate-800"></div>
                      </div>

                      <div className="min-h-[80px]">
                        {loadingTips ? (
                          <div className="space-y-3 animate-pulse">
                            <div className="h-2 bg-slate-800 rounded w-full"></div>
                            <div className="h-2 bg-slate-800 rounded w-2/3"></div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-sm text-slate-400 leading-relaxed font-semibold">
                            {dynamicTips.split('\n').filter(l => l.trim()).map((line, i) => (
                              <div key={i} className="flex gap-4 items-start group">
                                <span className="text-teal-500 mt-1">✦</span>
                                <span className="group-hover:text-white transition-colors">{line.replace(/^\d+\.\s*/, '').replace(/^•\s*/, '')}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Summary Stats */}
              <div className="bg-white rounded-[2rem] p-6 border border-slate-200 flex flex-wrap items-center justify-between gap-6 shadow-sm">
                 <div className="flex gap-12">
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Accommodation</p>
                     <p className="font-bold text-slate-800 text-sm">Hilo & South Point</p>
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Vehicle</p>
                     <p className="font-bold text-slate-800 text-sm">Toyota Camry</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="text-right">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Christmas Trip</p>
                     <p className="font-black text-teal-600 text-sm uppercase">2024 Expedition</p>
                   </div>
                   <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-xl">🌺</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
