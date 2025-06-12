import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(content) {
  // Format attendu : contents est un tableau avec un objet { text: string }
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    
    contents: [{ text: `Tu es un assistant expert en prompt engineering.  
Ta tâche est d’évaluer le prompt de l’utilisateur de manière pertinente.  
Tu réponds toujours sous cette forme JSON sans balises de code Markdown  :  
{  
  "note": "note sur 10",  
  "explication": "suggestion d'amélioration claire et concise",  
  "correction": "prompt corrigé et amélioré"  
}  
Voici le prompt de l’utilisateur : "${content}"` }],
  });


  return response.text;
}

export default main;