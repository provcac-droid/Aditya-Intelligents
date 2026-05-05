import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateStreamingGemResponse(
  input: string,
  systemPrompt: string,
  onChunk: (chunk: string) => void
) {
  const response = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: input,
    config: {
      systemInstruction: systemPrompt
    }
  });

  for await (const chunk of response) {
    const chunkText = chunk.text;
    if (chunkText) {
      onChunk(chunkText);
    }
  }
}
