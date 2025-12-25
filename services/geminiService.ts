
import { GoogleGenAI, Type } from "@google/genai";
import { UserInfo, AnalysisResult, CrystalProduct } from "../types";

export const analyzeFaceAndCrystal = async (
  base64Image: string,
  userInfo: UserInfo,
  availableCrystals: CrystalProduct[]
): Promise<AnalysisResult> => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const prompt = `
    你是一位精通面相學（Physiognomy）、能量閱讀與水晶療癒的專家。請分析提供的面部圖像和用戶資訊。
    
    用戶資訊：
    姓名：${userInfo.name}
    出生日期：${userInfo.birthDate}
    核心意圖：${userInfo.intent}

    現有水晶庫存：
    ${availableCrystals.map(c => `- ID: ${c.id}, 名稱: ${c.name}, 功效: ${c.benefit}`).join('\n')}

    請根據影像中的面部特徵進行「靈氣能量閱讀」。
    請使用專業的面相學術語（如：天庭、地閣、財帛宮、眉宇間等）解釋特徵與其「${userInfo.intent}」及當前人生運勢的關聯。
    接著，從庫存中挑選一款最適合的水晶，幫助其平衡能量或達成目標。
    
    請務必以「繁體中文」回答，並返回符合以下結構的 JSON 對象。
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Image.split(',')[1]
            }
          }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          faceTraits: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                trait: { type: Type.STRING, description: "分析的具體面部特徵 (例如：額頭、雙眼、下頷)" },
                meaning: { type: Type.STRING, description: "該特徵在能量閱讀中的意義" }
              },
              required: ["trait", "meaning"]
            }
          },
          auraColor: { type: Type.STRING, description: "代表其當前能量場的顏色名稱" },
          energyReading: { type: Type.STRING, description: "對其能量狀態的富有詩意的總結" },
          recommendationReason: { type: Type.STRING, description: "說服力強的解釋，說明為何這款水晶對其現在至關重要" },
          suggestedCrystalId: { type: Type.STRING, description: "推薦的水晶 ID" }
        },
        required: ["faceTraits", "auraColor", "energyReading", "recommendationReason", "suggestedCrystalId"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
