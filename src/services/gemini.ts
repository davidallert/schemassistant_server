import { GoogleGenerativeAI } from "@google/generative-ai";
import promptBase from "../utils/prompt.js";

const geminiService = {
  generateSchema: async (html: string) => {

    // Make sure the API key is a string, throw an error if it's not.
    const GEMINI_API_KEY: string | undefined = process.env.GEMINI_API_KEY || "";
    if (!GEMINI_API_KEY) {
      throw new Error("Gemini API key is missing.");
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = promptBase + html;
    // console.log(prompt);
    const rawData = await model.generateContent(prompt);

    const cleanData = rawData.response.text().replace(/```(json|html)\n|\n```/g, '');
    console.log(cleanData);
    return cleanData;
  }
};

export default geminiService;