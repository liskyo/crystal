
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
  },
  {
    id: 'n1',
    name: '湛藍財富 (Azure Wealth)',
    description: '藍晶石的洞察力與黃水晶的財富頻率結合，輔以海藍寶的溝通能量。適合渴望事業突破與財富累積的你。',
    benefit: '財富洞察、順暢溝通、事業突破。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/C9B2F937-6AB5-43CA-9594-80BB950C4FE8.jpeg',
    price: 1980,
    tags: ['財富', '事業', '溝通', '藍黃色系'],
    externalLink: 'https://www.instagram.com/p/DKeoBGuyQdk/?igsh=MTNtMjg0ZHY0NHEzeQ=='
  },
  {
    id: 'n2',
    name: '甜蜜豐盛 (Sweet Abundance)',
    description: '黃水晶招財，粉晶與金草莓招人緣，拉長石守護靈魂。全方位的豐盛能量，帶來愛與麵包的完美平衡。',
    benefit: '人際和諧、正偏財運、情感滋潤。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/13F5770F-D6AC-4683-9ED7-B77141B2E6CF.jpeg',
    price: 1980,
    tags: ['財富', '愛情', '人緣', '暖色系'],
    externalLink: 'https://www.instagram.com/p/DAtRucbTS4c/?igsh=MWJ5OXRiZndoY216Ng=='
  },
  {
    id: 'n3',
    name: '日月同輝 (Sun & Moon Glory)',
    description: '集結月光石的溫柔與太陽石的熱情，搭配多種晶石的彩虹能量。平衡陰陽能量，讓你在任何場合都自在發光。',
    benefit: '陰陽平衡、全能開運、自信溫柔。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/2FE255E3-797B-4775-83D6-FCF60FAF2498.jpeg',
    price: 1980,
    tags: ['平衡', '開運', '自信', '彩色系'],
    externalLink: 'https://www.instagram.com/p/DRcGXZnAZfW/?igsh=MWdhY3VzZnp0cjZpcw=='
  },
  {
    id: 'n4',
    name: '溫柔指引 (Gentle Guidance)',
    description: '粉晶療癒心輪，菫青石指引方向，月光石安撫情緒。適合迷惘時佩戴，溫柔地帶領你找到內心的答案。',
    benefit: '療癒創傷、方向指引、情緒安定。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/3CCB631F-04C8-45FB-9731-01E613224386.jpeg',
    price: 1980,
    tags: ['療癒', '指引', '平靜', '粉紫色系'],
    externalLink: 'https://www.instagram.com/p/DLmlsweyfNs/?igsh=MWE2dmR0dGxyNHdiMw=='
  },
  {
    id: 'n5',
    name: '海洋靈光 (Ocean Aura)',
    description: '海藍寶與天河石的流動能量，遇上拉長石的靈性光暈。如海洋般包容，同時保有清晰的靈性界線。',
    benefit: '心靈自由、靈性覺醒、清晰表達。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/E7DF7E8F-8E79-4CD3-8B5D-7A13E72607A9.jpeg',
    price: 1980,
    tags: ['靈性', '自由', '表達', '藍色系'],
    externalLink: 'https://www.instagram.com/p/C-5DH-oPMPK/?igsh=MTR2OGF1cTQwbWY5Zg=='
  },
  {
    id: 'n6',
    name: '寧靜月海 (Serene Moon Sea)',
    description: '藍晶石清理負能量，月光石帶來平靜，白水晶放大能量。像月光灑在寧靜海面，帶給內心深處的安寧。',
    benefit: '深度放鬆、淨化思緒、內在平靜。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/20DDA2A7-E189-41A8-BE37-126D3609C802.jpeg',
    price: 1980,
    tags: ['平靜', '淨化', '放鬆', '藍白色系']
  },
  {
    id: 'n7',
    name: '靈魂行者 (Soul Walker)',
    description: '拉長石與菫青石是靈魂的羅盤，黃水晶與丹泉石提供能量與智慧。適合探索自我、尋找生命藍圖的旅人。',
    benefit: '靈魂探索、智慧開啟、能量補充。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/D0EC1220-F5F1-4AA2-A84A-31924645EDE5.jpeg',
    price: 1980,
    tags: ['靈性', '智慧', '探索', '深色系']
  },
  {
    id: 'n8',
    name: '純淨天空 (Pure Sky)',
    description: '藍紋瑪瑙的安撫力量，搭配藍玉髓與白水晶的純淨。如晴朗天空般，掃除心中的陰霾與壓力。',
    benefit: '釋放壓力、情緒安撫、純淨思緒。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/BA2E1793-ACF6-4158-B2E5-5FA27F4AA481.jpeg',
    price: 1980,
    tags: ['療癒', '純淨', '放鬆', '天藍色系']
  },
  {
    id: 'n9',
    name: '寧靜海域 (Peaceful Waters)',
    description: '藍玉髓與丹泉石的深邃寧靜，月光石溫柔守護。適合需要深度休息、恢復心靈力量的時刻。',
    benefit: '深層修復、寧靜安神、恢復活力。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/55CDB4CB-2508-40A6-AD84-B2C073D867BA.jpeg',
    price: 1980,
    tags: ['修復', '安神', '寧靜', '藍紫色系']
  },
  {
    id: 'n10',
    name: '冰川之息 (Glacial Breath)',
    description: '海藍寶與藍晶石的清涼頻率，白玉髓如冰雪般潔淨。能快速冷靜思緒，提升溝通的清晰度與邏輯。',
    benefit: '冷靜理性、清晰表達、邏輯思考。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/35656BA6-1A4F-433E-A567-4EABEBA3C8AD.jpeg',
    price: 1980,
    tags: ['冷靜', '溝通', '邏輯', '冰藍色系']
  },
  {
    id: 'n11',
    name: '純粹月光 (Pure Moonlight)',
    description: '白水晶的純淨放大，遇上月光石的柔和直覺。最簡單也最強大的組合，回歸內在最純粹的本質。',
    benefit: '淨化磁場、提升直覺、回歸初心。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/EF569B69-4BFF-4932-B708-311D74CBABE1.jpeg',
    price: 1980,
    tags: ['淨化', '初心', '直覺', '白色系']
  },
  {
    id: 'n12',
    name: '光之守護 (Guardian of Light)',
    description: '白水晶淨化，拉長石守護，白玉髓滋養。形成一道溫柔而堅定的光之屏障，阻擋負能量干擾。',
    benefit: '能量防護、淨化磁場、溫柔堅定。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/A04C6188-4FE6-44F9-A99B-95D046A137AF.jpeg',
    price: 1980,
    tags: ['防護', '淨化', '堅定', '白光色系']
  },
  {
    id: 'n13',
    name: '紫霧森林 (Purple Mist Forest)',
    description: '紫水晶開啟智慧，茶晶穩固根基。如迷霧森林中的古樹，充滿智慧且扎實穩重，適合需要決策力的領袖。',
    benefit: '智慧決策、穩重踏實、消除恐懼。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/2F556DAA-5817-4A6C-A8F4-10A38BFE86AB.jpeg',
    price: 1980,
    tags: ['智慧', '穩重', '領袖', '深紫色系']
  },
  {
    id: 'n14',
    name: '白雪公主 (Snow White)',
    description: '白水晶與白玉髓的純潔無瑕。象徵新生的力量，適合想要重新開始、淨化過去印記的人。',
    benefit: '全新開始、淨化身心、純潔能量。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/3435012F-B1CD-4EDC-8681-7DB9F8BE4133.jpeg',
    price: 1980,
    tags: ['新生', '淨化', '純潔', '白色系']
  },
  {
    id: 'n15',
    name: '深海秘境 (Deep Sea Mystery)',
    description: '糖心藍瑪瑙與黑骨幹太陽的獨特組合，加上黑曜石避邪。來自深海的神秘力量，轉化負能量為前進動力。',
    benefit: '強力避邪、轉化能量、深層療癒。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/163DFCDF-3A45-4F87-A4CF-C7A83441E3C9.jpeg',
    price: 1980,
    tags: ['避邪', '轉化', '療癒', '深藍色系'],
    externalLink: 'https://www.instagram.com/p/DADpvYvTmV4/?igsh=enJ3azB2bDg5em0y'
  },
  {
    id: 'n16',
    name: '月光女神 (Goddess of Moonlight)',
    description: '頂級月光石搭配白水晶，散發女神般的柔和光輝。提升女性魅力，緩解情緒波動，帶來幸福感。',
    benefit: '女性魅力、情緒柔和、幸福感。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/7599558B-8646-474B-97D9-66882B981859.jpeg',
    price: 1980,
    tags: ['魅力', '情緒', '幸福', '白月色系'],
    externalLink: 'https://www.instagram.com/p/DIOOZsVy499/?igsh=MW05OGJsNHF3dzRrNQ=='
  },
  {
    id: 'n17',
    name: '夢幻紫海 (Dreamy Purple Sea)',
    description: '紫玉髓與海藍寶的夢幻漸層，點綴黃水晶與草莓晶。像一場甜美的夢境，激發創意與浪漫情懷。',
    benefit: '創意靈感、浪漫情懷、多彩生活。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/92DF0360-7BB5-4F26-A529-C63F53D19E7D.jpeg',
    price: 1980,
    tags: ['創意', '浪漫', '靈感', '彩虹色系'],
    externalLink: 'https://www.instagram.com/p/DMmfeojSriv/?igsh=MXVyM2xjMnZoNWloeg=='
  },
  {
    id: 'n18',
    name: '大地豐收 (Earth Harvest)',
    description: '黃水晶招偏財，茶晶守正財，安德森長石增強氣場。象徵秋收的豐盛，適合創業者與業務人員。',
    benefit: '招財聚氣、穩固事業、豐盛成果。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/1D01BEA6-DA19-401A-B8DB-8CFFC29659D4.jpeg',
    price: 1980,
    tags: ['招財', '事業', '豐盛', '大地色系']
  },
  {
    id: 'n19',
    name: '紫藤花開 (Wisteria Bloom)',
    description: '薰衣草紫水晶與石膏石的優雅搭配。如紫藤花般垂墜的溫柔，提升氣質並淨化周遭磁場。',
    benefit: '優雅氣質、淨化磁場、放鬆舒緩。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/0FC8AE76-2264-493F-B9D1-D4958FB73111.jpeg',
    price: 1980,
    tags: ['氣質', '淨化', '優雅', '紫色系']
  },
  {
    id: 'n20',
    name: '森林之心 (Heart of Forest)',
    description: '綠髮晶招正財，葡萄石療癒，孔雀石轉化。充滿森林生命力的組合，帶來事業生機與健康活力。',
    benefit: '事業正財、健康活力、生機勃勃。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/A20BAA5A-E3E4-4B1C-9F49-153CBB0EE560.jpeg',
    price: 1980,
    tags: ['事業', '健康', '活力', '綠色系'],
    externalLink: 'https://www.instagram.com/p/DBeFJNeyLE3/?igsh=MThycHJ0NHpqMGE1Mw=='
  },
  {
    id: 'n21',
    name: '闇夜王者 (Night King)',
    description: '黑金超七與茶晶、黃水晶的強大氣場。低調奢華，能夠強力避邪防小人，同時招來意外之財。',
    benefit: '強力避邪、霸氣招財、防小人。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/F07C8D62-37CC-4C90-813D-61E9A8ED86C1.jpeg',
    price: 1980,
    tags: ['避邪', '招財', '霸氣', '深色系']
  },
  {
    id: 'n22',
    name: '神秘紫月 (Mystic Purple Moon)',
    description: '紫水晶與月光石的經典靈性組合。開啟眉心輪，提升直覺力與夢境解析能力，適合靈修者。',
    benefit: '靈性提升、直覺開啟、夢境療癒。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/5E77F910-8E1D-4F35-8C2F-5C09785F0253.jpeg',
    price: 1980,
    tags: ['靈性', '直覺', '神秘', '紫白色系'],
    externalLink: 'https://www.instagram.com/p/DC_WvuByoqw/?igsh=YmNtYzZmaHRtOXNk'
  },
  {
    id: 'n23',
    name: '蔚藍海岸 (Azure Coast)',
    description: '海藍寶與藍托帕石的清爽藍調。像漫步在蔚藍海岸，心情開闊，溝通順暢無阻。',
    benefit: '心胸開闊、順暢溝通、心情愉悅。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/A0061730-B35C-46F1-8F22-F7FE786F4C6E.jpeg',
    price: 1980,
    tags: ['開闊', '溝通', '愉悅', '蔚藍色系']
  },
  {
    id: 'n24',
    name: '黑耀星辰 (Obsidian Star)',
    description: '茶晶與黑金超七的深邃光芒。如黑夜中的星辰指引方向，提供最強大的守護能量。',
    benefit: '方向指引、強力守護、消除恐懼。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/58CB7403-AC03-4ED6-BE4D-A8A4B8ABCC25.jpeg',
    price: 1980,
    tags: ['守護', '指引', '勇氣', '黑色系']
  },
  {
    id: 'n25',
    name: '星月交輝 (Star & Moon)',
    description: '月光石與黑金超七的強烈對比，白阿賽放大能量。在溫柔中帶有強大的直覺與行動力。',
    benefit: '直覺行動、陰陽調和、能量放大。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/9646EB7A-AD19-4AAE-82FC-DC31E69C928C.jpeg',
    price: 1980,
    tags: ['行動', '調和', '能量', '黑白色系'],
    externalLink: 'https://www.instagram.com/p/DTDRx1PgRJv/?igsh=MW5vaDA5bWh2aWJpZw=='
  },
  {
    id: 'n26',
    name: '熱情花火 (Passion Spark)',
    description: '紅膠花與太陽石的熱情奔放。點燃生命之火，招來貴人與機遇，讓生活充滿驚喜。',
    benefit: '熱情活力、貴人機遇、正向積極。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/75CB9E0A-DA64-4CEA-B21B-CB31B3711A6B.jpeg',
    price: 1980,
    tags: ['熱情', '機遇', '活力', '紅金色系'],
    externalLink: 'https://www.instagram.com/p/DEm01ZSSjzd/?igsh=MWVoOGtvb2h0Njd5Nw=='
  },
  {
    id: 'n27',
    name: '清新果園 (Fresh Orchard)',
    description: '綠草莓與葡萄石的清新綠意，點綴黃水晶。帶來好心情與正財運，如漫步果園般愜意。',
    benefit: '心情愉悅、正財運、輕鬆自在。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/F93217E4-9CFD-49C2-BFA6-6E2929D17FAE.jpeg',
    price: 1980,
    tags: ['愉悅', '財運', '清新', '綠色系']
  },
  {
    id: 'n28',
    name: '紫粉愛戀 (Purple Pink Love)',
    description: '紫水晶與草莓晶、粉晶的戀愛魔法。增加智慧與魅力，吸引心靈契合的伴侶。',
    benefit: '智慧戀愛、吸引伴侶、提升魅力。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/5A062A34-D9D7-46AE-A4CB-BDC13939913F.jpeg',
    price: 1980,
    tags: ['戀愛', '魅力', '契合', '紫粉色系'],
    externalLink: 'https://www.instagram.com/p/C7tJ2q4B8bl/?igsh=MTF3dGpodm1vemgwcg=='
  },
  {
    id: 'n29',
    name: '紅月傳說 (Red Moon Legend)',
    description: '紅瑪瑙增強體力，月光石調和氣場。帶來健康與美麗的古老守護，適合女性佩戴。',
    benefit: '健康美容、氣場調和、女性守護。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/8788B845-C654-499E-9D44-1522A460E97E.jpeg',
    price: 1980,
    tags: ['健康', '美容', '守護', '紅白色系'],
    externalLink: 'https://www.instagram.com/p/C7kn3c2hKld/?igsh=NjdmbzFpeWhyMDBn'
  },
  {
    id: 'n30',
    name: '幻彩月光 (Iridescent Moonlight)',
    description: '月光石與拉長石的雙重光暈。增強神秘感與魅力，讓人想一探究竟，適合需要展現個人特色者。',
    benefit: '神秘魅力、個人特色、光影流動。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/C906C03A-92E2-4935-83B5-061BFF03E0A2.jpeg',
    price: 1980,
    tags: ['魅力', '特色', '神秘', '幻彩色系'],
    externalLink: 'https://www.instagram.com/p/DKEs5eyScS7/?igsh=MWlzOWNwMmRmMm52eg=='
  },
  {
    id: 'n31',
    name: '戀愛頻率 (Love Frequency)',
    description: '粉晶與草莓晶的純粹粉色能量。調整自身頻率至愛與被愛的狀態，迎接美好的戀情。',
    benefit: '頻率調整、迎接愛情、甜蜜加分。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/EA4314BB-5485-4445-A6E2-9E53909CAE44.jpeg',
    price: 1980,
    tags: ['愛情', '甜蜜', '粉嫩', '粉色系']
  },
  {
    id: 'n32',
    name: '陽光黃金 (Sunny Gold)',
    description: '太陽石、黃水晶與阿魯沙的耀眼組合。像正午陽光般驅散所有陰影，帶來極致的自信與財富。',
    benefit: '極致自信、強力招財、光明燦爛。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/9811803E-4A91-445E-B5FF-1C8863AD1EDC.jpeg',
    price: 1980,
    tags: ['自信', '招財', '陽光', '橘金色系']
  },
  {
    id: 'n33',
    name: '深海探險 (Deep Sea Adventure)',
    description: '海藍寶與藍磷灰石的深邃藍色。激發求知慾與探索精神，適合學生與研究人員。',
    benefit: '求知探索、專注學習、深層智慧。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/18CA3FE4-07B8-4C5C-B08C-7828F58011FF.jpeg',
    price: 1980,
    tags: ['學習', '智慧', '探索', '深藍色系']
  },
  {
    id: 'n34',
    name: '虎膽妙算 (Tiger Wisdom)',
    description: '藍虎眼石增強洞察，黃水晶招財，藍晶石助溝通。在商場上無往不利，精準掌握每個機會。',
    benefit: '商業洞察、精準決策、招財進寶。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/318B6881-FCE0-4C6B-85B2-78450D2AE6A9.jpeg',
    price: 1980,
    tags: ['商業', '決策', '招財', '藍黃色系']
  },
  {
    id: 'n35',
    name: '自然韻律 (Nature Rhythm)',
    description: '綠髮晶主事業，藍晶石助表達，茶晶穩固。讓事業發展如大自然般順暢，充滿生機與節奏感。',
    benefit: '事業順利、表達流暢、穩健發展。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/37C97401-EBFD-4FC2-AEE6-2D9949EEF561.jpeg',
    price: 1980,
    tags: ['事業', '順暢', '穩健', '綠藍色系']
  },
  {
    id: 'n36',
    name: '藍黑守護 (Blue Black Guardian)',
    description: '藍晶石與黑曜石、黑瑪瑙的強大守護網。阻擋負能量與言語攻擊，只留下對你有益的能量。',
    benefit: '阻擋負能、過濾言語、強大守護。',
    image: import.meta.env.BASE_URL + 'images/NEW_20260115/095CA02E-C260-4DF3-901D-117CAC96BE7E.jpeg',
    price: 1980,
    tags: ['守護', '過濾', '防禦', '藍黑色系']
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
