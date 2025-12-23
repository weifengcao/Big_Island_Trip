
import React from 'react';
import { DailyPlan, TravelPoint } from '../types';

interface DayCardProps {
  plan: DailyPlan;
  isActive: boolean;
  onSelectDay: (day: number) => void;
  onSelectPoint: (point: TravelPoint) => void;
}

const DayCard: React.FC<DayCardProps> = ({ plan, isActive, onSelectDay, onSelectPoint }) => {
  return (
    <div 
      className={`transition-all duration-300 mb-6 cursor-pointer ${
        isActive ? 'scale-[1.02]' : 'opacity-80'
      }`}
      onClick={() => onSelectDay(plan.day)}
    >
      <div className={`p-6 rounded-3xl ${
        isActive 
          ? 'bg-teal-600 text-white shadow-lg' 
          : 'bg-white text-slate-800 shadow-md hover:shadow-lg'
      }`}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">
            Day {plan.day} • {plan.date}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
        <p className={`text-sm mb-4 ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>
          {plan.focus}
        </p>

        {isActive && (
          <div className="space-y-4 mt-6 border-t border-teal-500/30 pt-4">
            {plan.points.map((point, idx) => (
              <div 
                key={idx} 
                className="group flex gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPoint(point);
                }}
              >
                <div className="flex-shrink-0 w-12 text-sm font-medium opacity-70">
                  {point.time}
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    {point.name}
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCard;
