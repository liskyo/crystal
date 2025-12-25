
import { CrystalProduct } from './types';

/**
 * 圖片管理指南：
 * 1. 本機部署：請在專案根目錄建立 'assets' 資料夾。
 * 2. 放置照片：將您的水晶手鍊照片放入該資料夾。
 * 3. 引用路徑：將 image 欄位改為 './assets/檔名.jpg'。
 * 
 * 目前預設使用高品質的珠寶串珠攝影圖片作為示範。
 */

export const CRYSTAL_PRODUCTS: CrystalProduct[] = [
  {
    id: 'c1',
    name: '極光紫晶 (Amethyst Elite)',
    description: '選用烏拉圭深紫晶原石磨製，對應頂輪能量。這款手鍊能協助您在繁雜的工作中保持冷靜，並在夜晚獲得深層補給。',
    benefit: '開發智慧、穩定情緒、改善睡眠品質。',
    image: 'https://images.unsplash.com/photo-1551121698-45840cb30f04?q=80&w=800&auto=format&fit=crop',
    price: 1680,
    tags: ['智慧', '平靜', '靈性']
  },
  {
    id: 'c2',
    name: '初戀粉晶 (Rose Love)',
    description: '馬達加斯加粉晶，散發柔和的粉紅光波。這不僅是一件飾品，更是溫柔能量的載體，讓您從內而外散發迷人吸引力。',
    benefit: '增進人緣、守護愛情、療癒內在小孩。',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop',
    price: 1200,
    tags: ['愛情', '人際', '療癒']
  },
  {
    id: 'c3',
    name: '招財黃晶 (Wealth Citrine)',
    description: '天然黃水晶被譽為「商人石」。它強大的太陽能量能激發您的自信與顯化力，吸引事業上的貴人與財富。',
    benefit: '凝聚財氣、激發創造力、增強消化系統能量。',
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop',
    price: 2280,
    tags: ['財富', '事業', '自信']
  },
  {
    id: 'c4',
    name: '至尊黑曜 (Obsidian Shield)',
    description: '墨西哥彩虹黑曜石，具有強大的避邪與護身效果。它能吸收您周遭的負面情緒磁場，保護靈魂不受外界干擾。',
    benefit: '辟邪化煞、吸納負能量、排除病氣。',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b1a308c1f1?q=80&w=800&auto=format&fit=crop',
    price: 990,
    tags: ['防護', '穩定', '辟邪']
  },
  {
    id: 'c5',
    name: '深海青金 (Lapis Insight)',
    description: '阿富汗頂級青金石，鑲嵌天然金星。它能幫助您開啟「第三眼」，在迷惘的人生抉擇中看見清澈的真相。',
    benefit: '提升洞察力、加強溝通能量、緩解喉部不適。',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop',
    price: 1850,
    tags: ['直覺', '溝通', '冷靜']
  },
  {
    id: 'c6',
    name: '天河之光 (Amazonite Flow)',
    description: '如翠綠湖水般的 Amazonite，又稱希望之石。它能平定受挫後的心靈，讓能量重新恢復流動，帶來再次嘗試的勇氣。',
    benefit: '增強投機運、平衡情緒、消除悲觀思維。',
    image: 'https://images.unsplash.com/photo-1615484477201-9f4953340fab?q=80&w=800&auto=format&fit=crop',
    price: 1450,
    tags: ['希望', '幸運', '勇氣']
  },
  {
    id: 'c7',
    name: '白水晶簇 (Pure Quartz)',
    description: '萬用療癒之石。純淨的白水晶能放大其他水晶的能量，並淨化您的個人能量場，適合在重要決策前佩戴。',
    benefit: '淨化磁場、集中注意力、放大願望強度。',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop',
    price: 1100,
    tags: ['淨化', '全能', '清晰']
  },
  {
    id: 'c8',
    name: '草莓晶緣 (Strawberry Spirit)',
    description: '獨特的草莓點狀包體，象徵積極與熱情。它能讓佩戴者變得更加主動，在社交場合中散發不經意的魅力。',
    benefit: '提升主動性、增強愛情運、保持心情愉快。',
    image: 'https://images.unsplash.com/photo-1569397270337-9390317b39ca?q=80&w=800&auto=format&fit=crop',
    price: 1380,
    tags: ['魅力', '積極', '人緣']
  }
];

export const INTENTS = [
  '事業與野心 (Career)',
  '浪漫愛情 (Romance)',
  '內在寧靜與冥想 (Peace)',
  '財富豐饒 (Wealth)',
  '身體健康與活力 (Health)',
  '創意靈感 (Creativity)'
];
