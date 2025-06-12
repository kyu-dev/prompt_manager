import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(content) {
  // Format attendu : contents est un tableau avec un objet { text: string }
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ text: content }],
  });


  return response.text;
}

export default main;