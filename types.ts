
export interface UserInfo {
  name: string;
  gender: string;
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
  externalLink?: string;
}

export interface AnalysisResult {
  faceDetected: boolean;
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

export enum DivinationMode {
  SELF = 'SELF',
  LOVED_ONE = 'LOVED_ONE'
}

