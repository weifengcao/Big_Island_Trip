
import { TravelItinerary } from './types';

export const INITIAL_ITINERARY: TravelItinerary = {
  tripTitle: "Family Expedition: The Complete Circle",
  startDate: "Dec 25",
  endDate: "Dec 30",
  groupSummary: {
    adults: 2,
    youngAdults: 1,
    kids: [{ age: 9 }, { age: 3 }]
  },
  dailyPlans: [
    {
      day: 1,
      date: "Dec 25",
      title: "The Northern Gate",
      focus: "Kona to Hilo via the Cowboy Country",
      points: [
        {
          name: "KOA Airport & Camry Pickup",
          description: "Arrival at 11:30 AM. Pick up your Camry and begin the scenic drive north toward the lush side of the island.",
          lat: 19.7388,
          lng: -156.0456,
          time: "12:00 PM",
          category: 'logistics'
        },
        {
          name: "Lunch in Waimea",
          description: "High-altitude cowboy country (2,600ft). Cool and misty. Great for a hearty lunch before the coast drive.",
          lat: 20.0192,
          lng: -155.6669,
          time: "1:30 PM",
          category: 'dining'
        },
        {
          name: "Waipiʻo Valley Lookout",
          description: "Panoramic vista of 2,000-ft cliffs. Zero-effort vista right by the parking lot—perfect for the 3yo.",
          lat: 20.1182,
          lng: -155.5847,
          time: "3:00 PM",
          category: 'sightseeing'
        },
        {
          name: "ʻAkaka Falls State Park",
          description: "0.4-mile paved loop through rainforest and bamboo. Leads to the spectacular 442-ft waterfall.",
          lat: 19.8541,
          lng: -155.1534,
          time: "4:30 PM",
          category: 'sightseeing'
        },
        {
          name: "DoubleTree Grand Naniloa",
          description: "Check-in at your Hilo bay-front base. Relax and enjoy the East side vibes.",
          lat: 19.7297,
          lng: -155.0681,
          time: "5:30 PM",
          category: 'logistics'
        }
      ]
    },
    {
      day: 2,
      date: "Dec 26",
      title: "Hilo’s Hidden Gems",
      focus: "Caves, Rainforest Zoos & Tsunami History",
      points: [
        {
          name: "Rainbow Falls",
          description: "Famous for rainbows in the morning mist. Site of the mythological home of goddess Hina.",
          lat: 19.7188,
          lng: -155.1095,
          time: "9:30 AM",
          category: 'sightseeing'
        },
        {
          name: "Kaūmana Caves",
          description: "Descend into a massive lava tube formed in 1881. It looks like a jungle-filled cathedral. Adventurous for the 9yo!",
          lat: 19.6886,
          lng: -155.1276,
          time: "11:00 AM",
          category: 'activity'
        },
        {
          name: "Panaewa Rainforest Zoo",
          description: "The only natural tropical rainforest zoo in the U.S. Great size for the 3yo's attention span.",
          lat: 19.6482,
          lng: -155.0594,
          time: "1:00 PM",
          category: 'activity'
        },
        {
          name: "Laupāhoehoe Point",
          description: "Dramatic lava peninsula. High crashing waves and a quiet grassy area for kids to play safely away from the edge.",
          lat: 19.9917,
          lng: -155.2344,
          time: "3:00 PM",
          category: 'sightseeing'
        },
        {
          name: "Ken’s House of Pancakes",
          description: "A Hilo classic. Huge menu that caters to every age and craving.",
          lat: 19.7153,
          lng: -155.0688,
          time: "6:30 PM",
          category: 'dining'
        }
      ]
    },
    {
      day: 3,
      date: "Dec 27",
      title: "The Volcano & The Sea",
      focus: "Volcanoes NP and Black Sand Turtles",
      points: [
        {
          name: "Volcanoes National Park",
          description: "Explore Thurston Lava Tube (Nāhuku) and the Steam Vents. Walk through a cave where lava once flowed.",
          lat: 19.4194,
          lng: -155.2878,
          time: "9:30 AM",
          category: 'activity'
        },
        {
          name: "Hōlei Sea Arch",
          description: "Located at the end of Chain of Craters Road. A 90-foot natural arch carved from sea cliffs.",
          lat: 19.2947,
          lng: -155.1028,
          time: "1:00 PM",
          category: 'sightseeing'
        },
        {
          name: "Punalu'u Black Sand Beach",
          description: "The most reliable place to see Green Sea Turtles (Honu) basking on the sand. Keep distance!",
          lat: 19.1351,
          lng: -155.5039,
          time: "3:30 PM",
          category: 'sightseeing'
        },
        {
          name: "South End Check-in",
          description: "Settle into your southern base. Unrivaled peace and clear night skies.",
          lat: 19.0167,
          lng: -155.6000,
          time: "6:00 PM",
          category: 'logistics'
        }
      ]
    },
    {
      day: 4,
      date: "Dec 28",
      title: "Southern Tip & Stars",
      focus: "Bakery, Cliffs, and High-Altitude Stargazing",
      points: [
        {
          name: "Punalu'u Bake Shop",
          description: "Southernmost bakery in the USA. Don't miss the fresh Malasadas (donuts).",
          lat: 19.0631,
          lng: -155.5869,
          time: "10:00 AM",
          category: 'dining'
        },
        {
          name: "South Point Park (Ka Lae)",
          description: "Windswept cliffs at the tip of the US. Deep blue ocean views. Supervise children closely.",
          lat: 18.9136,
          lng: -155.6811,
          time: "11:30 AM",
          category: 'sightseeing'
        },
        {
          name: "Greenwell Farms Coffee",
          description: "Working coffee farm since 1850. Free tours to see how Kona coffee is processed.",
          lat: 19.5015,
          lng: -155.9221,
          time: "2:30 PM",
          category: 'activity'
        },
        {
          name: "Maunakea Visitor Station",
          description: "Stargazing at 9,200ft. Paved road is safe for the Camry. Bring heavy winter jackets—it will be 30-40°F!",
          lat: 19.7562,
          lng: -155.4526,
          time: "6:30 PM",
          category: 'sightseeing'
        }
      ]
    },
    {
      day: 5,
      date: "Dec 29",
      title: "Snorkel & Culture",
      focus: "Marine Conservation and Sacred Grounds",
      points: [
        {
          name: "Kahalu’u Beach Park",
          description: "Protected by a rock breakwater. Perfect for family snorkeling in shallow, calm water.",
          lat: 19.5786,
          lng: -155.9669,
          time: "9:30 AM",
          category: 'activity'
        },
        {
          name: "Ocean Rider Seahorse Farm",
          description: "Interactive conservation farm. The 9yo and 3yo can learn about and hold seahorses.",
          lat: 19.7231,
          lng: -156.0353,
          time: "12:30 PM",
          category: 'activity'
        },
        {
          name: "Pu'uhonua O Honaunau",
          description: "Ancient Place of Refuge. Walk among hand-built lava walls and towering Ki’i carvings.",
          lat: 19.4223,
          lng: -155.9103,
          time: "3:00 PM",
          category: 'sightseeing'
        },
        {
          name: "Lava Lava Beach Club",
          description: "Sunset dinner right on the sand. The best way to spend your final island evening.",
          lat: 19.9144,
          lng: -155.8844,
          time: "6:00 PM",
          category: 'dining'
        }
      ]
    },
    {
      day: 6,
      date: "Dec 30",
      title: "White Sands & Home",
      focus: "Final swim and Kona Town farewell",
      points: [
        {
          name: "Kona Town Stroll",
          description: "Last-minute souvenirs and Shave Ice. Relaxed walking along the oceanfront.",
          lat: 19.6397,
          lng: -155.9969,
          time: "10:00 AM",
          category: 'sightseeing'
        },
        {
          name: "Hapuna Beach",
          description: "Iconic white sand. Enjoy a final swim in one of the US's top-voted beaches.",
          lat: 19.9922,
          lng: -155.8247,
          time: "11:30 AM",
          category: 'sightseeing'
        },
        {
          name: "KOA Airport Drop-off",
          description: "Return the Camry and check-in for your 3:30 PM flight home to SFO.",
          lat: 19.7388,
          lng: -156.0456,
          time: "1:30 PM",
          category: 'logistics'
        }
      ]
    }
  ]
};
