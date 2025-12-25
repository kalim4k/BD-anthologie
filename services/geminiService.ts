import { GoogleGenAI } from "@google/genai";

export const getComicRecommendation = async (userTaste: string) => {
  // L'initialisation doit utiliser process.env.API_KEY directement
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `L'utilisateur aime: "${userTaste}". 
      Dans notre collection de 6 BDs (Les Ombres du Sahel, Abidjan 2077, Koundi & Meba, Le Masque de Sawa, Secret de Famille, Zéro Limite), 
      laquelle devrais-je lui recommander de lire en premier ? Explique brièvement pourquoi en une phrase style marketing.`
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Notre collection complète saura vous séduire, quel que soit votre style !";
  }
};