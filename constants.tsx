
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
    description: '藍紋瑪瑙與月光石的溫柔交織，輔以藍摩根石。協助釋放焦慮，提升睡眠品質與人際溝通的柔軟度。',
    benefit: '情緒安撫、改善睡眠、提升柔和溝通力。',
    image: import.meta.env.BASE_URL + 'images/IMG_6813.JPG',
    price: 1680,
    tags: ['放鬆', '睡眠', '溝通', '藍色系']
  },
  {
    id: 'c2',
    name: '海洋之眼 (Ocean Eye)',
    description: '海藍寶與天河石帶來的流動，搭配拉長石的直覺守護。適合緊繃的思緒，找回內在清晰與自信表達。',
    benefit: '釋放壓力、提升直覺、增強表達自信。',
    image: import.meta.env.BASE_URL + 'images/IMG_6814.JPG',
    price: 1880,
    tags: ['自信', '直覺', '表達', '藍綠色系']
  },
  {
    id: 'c3',
    name: '天堂之淚 (Teardrop of Heaven)',
    description: '月光石與藍托帕石的理性感性平衡，加上天空藍冰種玉珠。協助在混亂中保持冷靜與溫柔堅定。',
    benefit: '理性思考、心靈覺察、溫柔堅定。',
    image: import.meta.env.BASE_URL + 'images/IMG_6815.JPG',
    price: 1980,
    tags: ['冷靜', '覺察', '堅定', '藍白色系']
  },
  {
    id: 'c4',
    name: '紫羅蘭光 (Violet Light)',
    description: '紫水晶與菫青石的頻率，指引內在方向。在迷惘時淨化雜念，讓靈性直覺帶領你看清前路。',
    benefit: '專注清晰、靈性提升、指引方向。',
    image: import.meta.env.BASE_URL + 'images/IMG_6816.JPG',
    price: 1780,
    tags: ['靈性', '智慧', '決策', '紫色系']
  },
  {
    id: 'c5',
    name: '薔薇之戀 (Rose Romance)',
    description: '紅紋石與草莓晶的愛之能量，點燃生活熱情。自我接納並展現魅力，散發溫暖自信的光芒。',
    benefit: '自我療癒、提升魅力、增強行動力。',
    image: import.meta.env.BASE_URL + 'images/IMG_6817.JPG',
    price: 2280,
    tags: ['愛情', '魅力', '熱情', '紅色系']
  },
  {
    id: 'c6',
    name: '晨曦金光 (Golden Dawn)',
    description: '太陽石與金草莓的耀眼光芒，如初升旭日。驅散陰霾，注入行動力與希望，吸引賞識你的人。',
    benefit: '自信行動、正向樂觀、吸引貴人。',
    image: import.meta.env.BASE_URL + 'images/IMG_6818.JPG',
    price: 1980,
    tags: ['自信', '好運', '行動', '橙金色系']
  },
  {
    id: 'c7',
    name: '森林甦醒 (Forest Awake)',
    description: '葡萄石的療癒綠光與黃水晶的豐盛。像在森林深呼吸，釋放焦慮並注入招財與美好的正能量。',
    benefit: '情緒療癒、招財聚氣、舒緩壓力。',
    image: import.meta.env.BASE_URL + 'images/IMG_6819.JPG',
    price: 1880,
    tags: ['療癒', '財富', '健康', '黃綠色系']
  },
  {
    id: 'c8',
    name: '甜美初戀 (Sweet First Love)',
    description: '粉晶與草莓晶的經典組合。療癒情感印記，重新打開心房，迎接真摯的愛與友誼。',
    benefit: '增進異性緣、穩定感情、療癒創傷。',
    image: import.meta.env.BASE_URL + 'images/IMG_6820.JPG',
    price: 1580,
    tags: ['愛情', '人緣', '甜美', '粉色系']
  },
  {
    id: 'c9',
    name: '智慧與愛 (Wisdom & Love)',
    description: '紫水晶開發智慧，粉晶招來好人緣，月光石帶來平靜。兼顧人際和諧與清晰思緒的完美組合。',
    benefit: '智慧決策、情緒平衡、吸引良緣。',
    image: import.meta.env.BASE_URL + 'images/IMG_6826.JPG',
    price: 1680,
    tags: ['智慧', '人緣', '平衡', '紫粉色系']
  },
  {
    id: 'c10',
    name: '全能開運 (All-Round Luck)',
    description: '太陽石與金草莓增強自信招財，紅膠花招貴人。適合職場衝刺，需要滿滿鬥志與清晰決策的你。',
    benefit: '財運事業、招貴人、正向動力。',
    image: import.meta.env.BASE_URL + 'images/IMG_6827.JPG',
    price: 2380,
    tags: ['財運', '事業', '開運', '暖色系']
  },
  {
    id: 'c11',
    name: '森林希望 (Forest Hope)',
    description: '葡萄石指引希望，綠草莓晶增強正財與親和力。療癒心輪，在追求事業成長中找回內心平靜。',
    benefit: '穩定正財、舒緩壓力、溫柔領導。',
    image: import.meta.env.BASE_URL + 'images/IMG_6828.JPG',
    price: 1880,
    tags: ['事業', '療癒', '希望', '綠色系']
  },
  {
    id: 'c12',
    name: '黑金守護 (Black Gold Guardian)',
    description: '黑骨幹太陽強大避邪，拉長石激發潛能。適合高壓環境或出入複雜場所，展現沉穩內斂的領導氣場。',
    benefit: '避邪擋煞、修復身心、提升領導力。',
    image: import.meta.env.BASE_URL + 'images/IMG_6829.JPG',
    price: 1980,
    tags: ['避邪', '領導', '專注', '深色系']
  },
  {
    id: 'c13',
    name: '除穢安神 (Purify & Calm)',
    description: '茶晶穩固能量，搭配黑骨幹與黑曜石的強力防護。排除雜念與小人，在沉穩中保有月光石的直覺。',
    benefit: '強力防護、排除雜念、深度寧靜。',
    image: import.meta.env.BASE_URL + 'images/IMG_6830.JPG',
    price: 1880,
    tags: ['防護', '安神', '直覺', '深色系']
  },
  {
    id: 'c14',
    name: '鈦金財富 (Titanium Wealth)',
    description: '水晶之王鈦晶與黃水晶的極致招財組合，虎眼石增強勇氣。適合創業者或主管，提升決斷力與領導氣勢。',
    benefit: '正偏財運、事業突破、增強氣場。',
    image: import.meta.env.BASE_URL + 'images/IMG_6831.JPG',
    price: 2580,
    tags: ['財富', '事業', '霸氣', '金黃色系']
  },
  {
    id: 'c15',
    name: '高頻花珀 (High Freq Amber)',
    description: '花珀安神，黃阿賽高頻能量激發靈感。清理思緒負擔，帶來如陽光般的喜悅與財富顯化。',
    benefit: '深層放鬆、激發靈感、顯化財富。',
    image: import.meta.env.BASE_URL + 'images/IMG_6832.JPG',
    price: 2080,
    tags: ['靈感', '放鬆', '財富', '金黃色系']
  },
  {
    id: 'c16',
    name: '洞察溝通 (Insight & Communicate)',
    description: '藍晶石提升洞察，魔鬼海藍寶強化表達與避邪。適合需要頻繁溝通者，提升邏輯說服力並過濾負能量。',
    benefit: '邏輯溝通、淨化磁場、冷靜思考。',
    image: import.meta.env.BASE_URL + 'images/IMG_6833.JPG',
    price: 1780,
    tags: ['溝通', '淨化', '邏輯', '藍白色系']
  },
  {
    id: 'c17',
    name: '溫柔海洋 (Gentle Ocean)',
    description: '海藍寶與月光石的溫柔守護，白玉髓滋潤身心。幫助在對話中展現自信溫柔，守護旅途平安。',
    benefit: '溝通自信、情緒平衡、旅行守護。',
    image: import.meta.env.BASE_URL + 'images/IMG_6834.JPG',
    price: 1680,
    tags: ['溝通', '平衡', '守護', '藍白色系']
  },
  {
    id: 'c18',
    name: '深藍智慧 (Deep Blue Wisdom)',
    description: '海藍寶、拉長石與天河石的智者組合。在壓力下找回自信與希望，提升溝通邏輯與靈性洞察。',
    benefit: '溝通邏輯、激發潛能、找回希望。',
    image: import.meta.env.BASE_URL + 'images/IMG_6835.JPG',
    price: 1880,
    tags: ['智慧', '溝通', '希望', '藍色系']
  },
  {
    id: 'c19',
    name: '天空淨化 (Sky Purification)',
    description: '石膏石極高頻淨化，搭配青金石開啟智慧。快速清理負面磁場，找回純淨平穩與敏銳洞察。',
    benefit: '深層淨化、提升智慧、消除焦慮。',
    image: import.meta.env.BASE_URL + 'images/IMG_6836.JPG',
    price: 1580,
    tags: ['淨化', '智慧', '平靜', '藍白色系']
  },
  {
    id: 'c20',
    name: '盛開桃花 (Blooming Peach Blossom)',
    description: '紅紋石與櫻花瑪瑙的浪漫誓約。療癒心靈創傷，招來真誠伴侶，讓感情生活如花開般絢爛。',
    benefit: '招正緣、療癒情感、提升魅力。',
    image: import.meta.env.BASE_URL + 'images/IMG_6837.JPG',
    price: 1980,
    tags: ['愛情', '正緣', '療癒', '紅粉色系']
  },
  {
    id: 'c21',
    name: '紫幽靈智 (Purple Phantom Wisdom)',
    description: '紫幽靈招正財貴人，紫水晶開發智慧。適合長時間用腦者，提升專注力並淨化內在負能量。',
    benefit: '智慧貴人、正財運、深度放鬆。',
    image: import.meta.env.BASE_URL + 'images/IMG_6838.JPG',
    price: 1880,
    tags: ['智慧', '貴人', '專注', '紫色系']
  },
  {
    id: 'c22',
    name: '紫黑王者 (Purple Black King)',
    description: '紫虎眼石的冷靜決斷，搭配黑瑪瑙的堅毅守護。在職場展現領導力，防小人並排解恐懼。',
    benefit: '職場領導、避邪防小人、冷靜決斷。',
    image: import.meta.env.BASE_URL + 'images/IMG_6839.JPG',
    price: 1980,
    tags: ['領導', '避邪', '氣場', '紫黑色系']
  }
];

export const INTENTS = [
  '事業與野心 (Career)',
  '浪漫愛情 (Romance)',
  '內在寧靜與冥想 (Peace)',
  '財富豐饒 (Wealth)',
  '身體健康與活力 (Health)',
  '創意靈感 (Creativity)',
  '提升人緣與貴人運 (Social Connection & Nobleman Luck)',
  '避邪擋煞與防小人 (Protection & Warding off Evil)',
  '增強自信與領導力 (Confidence & Leadership)',
  '考試順利與智慧增長 (Academic Success & Wisdom)',
  '釋放壓力與情緒療癒 (Stress Relief & Emotional Healing)',
  '家庭和樂與家運 (Family Harmony & Fortune)'
];
