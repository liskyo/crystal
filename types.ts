
export interface UserInfo {
  name: string;
  birthDate: string;
  intent: string;
}

export interface CrystalProduct {
  id: string;
  name: string;
  description: string;
  benefit: string;
  image: string;
  price: number;
  tags: string[];
}

export interface AnalysisResult {
  faceTraits: {
    trait: string;
    meaning: string;
  }[];
  auraColor: string;
  energyReading: string;
  recommendationReason: string;
  suggestedCrystalId: string;
}

export enum AppState {
  IDLE = 'IDLE',
  INPUT = 'INPUT',
  SCANNING = 'SCANNING',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT'
}
