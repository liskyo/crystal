
import { GoogleGenAI, Type } from "@google/genai";
import { UserInfo, AnalysisResult, CrystalProduct } from "../types";

export const analyzeFaceAndCrystal = async (
  base64Image: string,
  userInfo: UserInfo,
  availableCrystals: CrystalProduct[]
): Promise<AnalysisResult> => {
  console.log("API Key loaded:", import.meta.env.VITE_GEMINI_API_KEY ? "Yes (Length: " + import.meta.env.VITE_GEMINI_API_KEY.length + ")" : "No");
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const prompt = `
    你是一位精通面相學（Physiognomy）、能量閱讀與水晶療癒的專家。請分析提供的面部圖像和用戶資訊。
    
    用戶資訊：
    姓名：${userInfo.name}
    性別：${userInfo.gender}
    核心意圖：${userInfo.intent}

    現有水晶庫存：
    ${availableCrystals.map(c => `- ID: ${c.id}, 名稱: ${c.name}, 功效: ${c.benefit}`).join('\n')}

    請根據影像中的面部特徵進行「靈氣能量閱讀」。
    **重要檢查**：請首先檢查圖片中是否包含清晰的人類五官。如果無法識別出清晰的面部（例如：圖片模糊、非人像、遮擋嚴重），請將返回 JSON 中的 "faceDetected" 設為 "false"，其餘欄位留空字串或空陣列。如果五官清晰，請將 "faceDetected" 設為 "true" 並繼續分析。

    **分析指引**（僅在 faceDetected 為 true 時）：
    請使用專業的面相學術語（如：天庭、地閣、財帛宮、眉宇間等）解釋特徵與其「${userInfo.intent}」及當前人生運勢的關聯。
    接著，從庫存中挑選一款最適合的水晶，幫助其平衡能量或達成目標。

    **重要性別偏好考量**：
    1. 若用戶為「男」，除非能量閱讀結果顯示其當下極度需要療癒心輪（如需粉晶），否則請傾向避免過於粉嫩、女性化（如全粉晶、草莓晶）的款式。請優先考慮深色系、中性色系（如黑曜石、鈦晶、藍色系、紫色系）或更有力量感的設計。
    2. 若用戶為「女」，則無此限制，依據能量適配度推薦即可。
    3. 若用戶為「其他」，則以能量平衡與個人特質為主，推薦中性或獨特的款式。
    
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
          faceDetected: { type: Type.BOOLEAN, description: "是否檢測到清晰的五官" },
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
        required: ["faceDetected", "faceTraits", "auraColor", "energyReading", "recommendationReason", "suggestedCrystalId"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
