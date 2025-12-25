
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
    name: '靜謐藍月 (Silent Blue Moon)',
    description: '結合藍紋瑪瑙的安撫與月光石的溫柔，輔以藍摩根石的柔軟力量。這款手鍊能協助您釋放深層焦慮，在夜晚獲得寧靜的休息，並提升人際互動的柔和度。',
    benefit: '情緒安撫、改善睡眠、提升柔和溝通力。',
    image: '/images/IMG_6813.JPG',
    price: 1680,
    tags: ['放鬆', '睡眠', '溝通', '藍色系']
  },
  {
    id: 'c2',
    name: '海洋之眼 (Ocean Eye)',
    description: '海藍寶與天河石帶來的勇氣與流動，搭配拉長石的直覺守護。適合思緒容易緊繃的您，幫助找回內在的清晰與自信的表達。',
    benefit: '釋放壓力、提升直覺、增強表達自信。',
    image: '/images/IMG_6814.JPG',
    price: 1880,
    tags: ['自信', '直覺', '表達', '藍綠色系']
  },
  {
    id: 'c3',
    name: '天堂之淚 (Teardrop of Heaven)',
    description: '月光石與藍托帕石的理性與感性交織，加上天空藍冰種玉珠的清透。協助您在混亂中保持冷靜，看見事物的本質，並溫柔地堅定立場。',
    benefit: '理性思考、心靈覺察、溫柔堅定。',
    image: '/images/IMG_6815.JPG',
    price: 1980,
    tags: ['雖然', '冷靜', '覺察', '藍白色系']
  },
  {
    id: 'c4',
    name: '紫羅蘭光 (Violet Light)',
    description: '紫水晶與菫青石的神祕頻率，指引內在方向。當您感到迷惘或需要做決策時，它能淨化雜念，讓靈性的直覺帶領您看清前路。',
    benefit: '專注清晰、靈性提升、指引方向。',
    image: '/images/IMG_6816.JPG',
    price: 1780,
    tags: ['靈性', '智慧', '決策', '紫色系']
  },
  {
    id: 'c5',
    name: '薔薇之戀 (Rose Romance)',
    description: '紅紋石與草莓晶的愛之能量，點燃對生活的熱情。這是一首關於自我接納與展現魅力的頌歌，讓您在人群中散發溫暖而自信的光芒。',
    benefit: '自我療癒、提升魅力、增強行動力。',
    image: '/images/IMG_6817.JPG',
    price: 2280,
    tags: ['愛情', '魅力', '熱情', '紅色系']
  },
  {
    id: 'c6',
    name: '晨曦金光 (Golden Dawn)',
    description: '太陽石與金草莓的耀眼光芒，如同初升旭日。為您驅散內心的陰霾，注入滿滿的行動力與正向希望，吸引能夠賞識您的人。',
    benefit: '自信行動、正向樂觀、吸引貴人。',
    image: '/images/IMG_6818.JPG',
    price: 1980,
    tags: ['自信', '好運', '行動', '橙金色系']
  },
  {
    id: 'c7',
    name: '森林甦醒 (Forest Awake)',
    description: '葡萄石的療癒綠光與黃水晶的豐盛能量。像是在森林中深呼吸，釋放焦慮的同時，也為自己注入吸引財富與美好事物的正能量。',
    benefit: '情緒療癒、招財聚氣、舒緩壓力。',
    image: '/images/IMG_6819.JPG',
    price: 1880,
    tags: ['療癒', '財富', '健康', '黃綠色系']
  },
  {
    id: 'c8',
    name: '甜美初戀 (Sweet First Love)',
    description: '粉晶與草莓晶的經典組合，純粹而美好。協助您療癒過去的情感印記，重新打開心房，迎接真摯的愛與友誼。',
    benefit: '增進異性緣、穩定感情、療癒創傷。',
    image: '/images/IMG_6820.JPG',
    price: 1580,
    tags: ['愛情', '人緣', '甜美', '粉色系']
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
