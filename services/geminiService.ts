
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelTips = async (location: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide 3 very short, bulleted family travel tips for "${location}" on the Big Island of Hawaii. 
      Target: 2 adults, a young adult, a 9yo boy, and a 3yo girl. 
      Focus on: safety for the toddler, engagement for the 9yo, and 'must-see' highlights. Keep it under 50 words total.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching tips:", error);
    return "• Stay hydrated and wear sunblock.\n• Keep the toddler close to shore.\n• Watch for turtles on the rocks.";
  }
};
