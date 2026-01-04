
import { GoogleGenAI } from "@google/genai";

export const config = {
    runtime: 'edge', // Optional: Use Edge runtime for faster cold starts, or remove for Node.js
};

// Start Translation of types locally to avoid import issues in pure function
interface CrystalProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    benefit: string;
    image: string;
    tags: string[];
}

interface UserInfo {
    name: string;
    gender: string;
    intent: string;
}

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    try {
        const { base64Image, userInfo, availableCrystals } = await req.json() as {
            base64Image: string;
            userInfo: UserInfo;
            availableCrystals: CrystalProduct[];
        };

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'Server configuration error: API Key missing' }), { status: 500 });
        }

        const ai = new GoogleGenAI({ apiKey });

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

        // Note: Using standard fetch/REST or the SDK. 
        // The SDK usage in the previous file was: await ai.models.generateContent({...})
        // To minimize breaking changes, we keep using the SDK if it works in Edge/Node.
        // However, @google/genai might need polyfills in Edge. 
        // Let's stick to Node.js runtime (default) to be safe with the SDK, so I will remove `runtime: 'edge'`.

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: [
                {
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType: "image/jpeg",
                                data: base64Image.split(',')[1] // Ensure we only send the base64 part
                            }
                        }
                    ]
                }
            ],
            config: {
                responseMimeType: "application/json",
                // We can't import Type from @google/genai easily if we want to send a clean JSON back without type issues,
                // but we can manually define the schema structure or just trust the prompt since the SDK handles it.
                // Actually, let's copy the schema object structure to be safe.
                responseSchema: {
                    type: "OBJECT" as any, // Cast to any to avoid type import struggles in this standalone file
                    properties: {
                        faceDetected: { type: "BOOLEAN" as any, description: "是否檢測到清晰的五官" },
                        faceTraits: {
                            type: "ARRAY" as any,
                            items: {
                                type: "OBJECT" as any,
                                properties: {
                                    trait: { type: "STRING" as any, description: "分析的具體面部特徵 (例如：額頭、雙眼、下頷)" },
                                    meaning: { type: "STRING" as any, description: "該特徵在能量閱讀中的意義" }
                                },
                                required: ["trait", "meaning"]
                            }
                        },
                        auraColor: { type: "STRING" as any, description: "代表其當前能量場的顏色名稱" },
                        energyReading: { type: "STRING" as any, description: "對其能量狀態的富有詩意的總結" },
                        recommendationReason: { type: "STRING" as any, description: "說服力強的解釋，說明為何這款水晶對其現在至關重要" },
                        suggestedCrystalId: { type: "STRING" as any, description: "推薦的水晶 ID" }
                    },
                    required: ["faceDetected", "faceTraits", "auraColor", "energyReading", "recommendationReason", "suggestedCrystalId"]
                }
            }
        });

        const result = JSON.parse(response.text || "{}");
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
