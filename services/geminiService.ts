
import { UserInfo, AnalysisResult, CrystalProduct } from "../types";

export const analyzeFaceAndCrystal = async (
  base64Image: string,
  userInfo: UserInfo,
  availableCrystals: CrystalProduct[]
): Promise<AnalysisResult> => {
  // Check if we are in development mode (local) to warn the user
  // In a real Vercel dev environment, this would work, but with plain Vite it might fail.
  // We'll proceed with the fetch and let the error handling in App.tsx catch network errors.

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base64Image,
        userInfo,
        availableCrystals
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Analysis Service Error:", error);
    // Rethrow to allow App.tsx to handle the UI feedback
    throw error;
  }
};
