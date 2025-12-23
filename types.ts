
export interface TravelPoint {
  name: string;
  description: string;
  lat: number;
  lng: number;
  time: string;
  category: 'sightseeing' | 'dining' | 'activity' | 'logistics';
}

export interface DailyPlan {
  day: number;
  date: string;
  title: string;
  focus: string;
  points: TravelPoint[];
}

export interface TravelItinerary {
  tripTitle: string;
  startDate: string;
  endDate: string;
  groupSummary: {
    adults: number;
    youngAdults: number;
    kids: { age: number }[];
  };
  dailyPlans: DailyPlan[];
}
