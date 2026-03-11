# AI水晶面相分析系統：技術架構與程式碼分析 (Version 2.0)

## 1. 專案升級概述 (Project Evolution v2)

本專案從 1.0 版本（單機/靜態資料）正式進化為 **2.0 版本（雲端串接與動態管理）**。核心目標是將 **ROPU PON 晶飾** 從一個單純的 AI 測驗工具，轉型為具備商務管理能力的小型電商 SaaS。

### v2.0 重大更新：
*   **雲端資料庫整合 (Supabase)**：將商品資料從硬編碼轉移至 PostgreSQL 雲端資料表。
*   **管理員權限系統 (Admin Auth)**：實作隱藏式的管理員登入入口與密碼驗證。
*   **動態商品管理 (CRUD)**：開發後台介面，支援即時上傳商品圖片、新增、編輯與刪除商品。
*   **雲端存儲 (Supabase Storage)**：支援商品實拍照片的雲端上傳與公眾連結生成。
*   **視覺美化升級**：新增 Canvas 星空背景與動態七彩水晶 Icon 原生組件。

---

## 2. 升級後的技術架構 (Enhanced Architecture)

隨者功能擴充，架構層次更加分明：

*   **雲端後端 (BaaS)**: [Supabase](https://supabase.com/)
    *   **PostgreSQL**: 存儲動態商品列表。
    *   **Buckets**: 存放管理者上傳的實體產品照片。
    *   **REST API**: 前端透過 `@supabase/supabase-js` 直接進行高效率資料互動。
*   **人工智慧 (AI Layer)**: Google Gemini API
    *   保持 1.5/3 Flash 模型降級機制，確保在高併發下的穩定性。
*   **前端邏輯 (UI/UX Layer)**: 
    *   **React 19 & Vite 6**: 使用最新的前端框架技術。
    *   **Aura UI System**: 延續 StarrySky 視覺組件與毛玻璃設計。

---

## 3. 目錄結構演進 (Directory Evolution)

```
crystal/
├── services/               # 服務層 (封裝外部 API)
│   ├── supabase.ts         # [NEW] Supabase 客戶端初始化
│   ├── productService.ts   # [NEW] 商品 CRUD 與圖片上傳邏輯
│   └── geminiService.ts    # AI 面相分析邏輯
├── components/             # React 組件層
│   ├── AdminLogin.tsx      # [NEW] 密碼驗證登入介面
│   ├── AdminDashboard.tsx  # [NEW] 商品管理後台
│   ├── StarrySky.tsx       # [NEW] Canvas 流星星空背景
│   └── CrystalIcon.tsx     # [NEW] 七彩 SVG 動態 Icon
├── App.tsx                 # 主程序：整合狀態機與管理員切換觸發器
├── types.ts                # 擴充 AppState (新增 ADMIN_LOGIN, ADMIN_DASHBOARD)
└── .env                    # [NEW] 環境變數 (金鑰管理)
```

---

## 4. 關鍵技術模組深度解析

### 4.1. 隱藏式進入點 (Hidden Entry Trigger)
為了保持 C 端用戶介面的簡潔與神秘感，管理員入口採用 **「密鑰敲擊法」**。
*   **觸發點**：首頁「精準能量場分析系統」標籤。
*   **邏輯**：在 `App.tsx` 監聽點擊次數，連續 5 次觸發 `AppState.ADMIN_LOGIN`。這是一種低成本且有效的管理員入口保護方式。

### 4.2. 動態資料合併策略 (Data Merging Strategy)
`productService.ts` 實作了混合式讀取邏輯：
*   優先從 Supabase 讀取雲端商品。
*   若雲端無資料或斷網，自動降級讀取本地 `constants.tsx` 中的靜態種子資料。
*   確保系統在任何網路環境下都能顯示水晶內容。

### 4.3. 雲端圖片流程 (Cloud Image Workflow)
1.  管理者選取本地照片。
2.  `uploadProductImage` 生成隨機檔名並推送到 Supabase `product_images` 存儲空間。
3.  取得 Public URL 並寫入資料庫 `image_url` 欄位。
4.  前端 Vercel 部署環境可透過 `import.meta.env` 動態切換 Base URL，保持圖片路徑的正確性。

### 4.4. 面相分析與商品綁定 (AI Matching)
Gemini 的 Prompt 已優化為同時接受：
*   面相特徵（眼、眉、口、神態）。
*   動態 ID 列表。
AI 會根據 `availableProducts` 的 Tags 做語義匹配，確保即使管理者新增了全新的商品，AI 也能理解其產品意義並推薦給適合的用戶。

---

## 5. 系統亮點 (System Highlights)

1.  **零基礎後端管理**：使用者不需寫 SQL，透過 Web UI 即可完成資料更新。
2.  **極致視覺美感**：結合廣義相對論式的星光背景與玻璃質感，符合「水晶、玄學」的高層次調性。
3.  **高度擴充性**：目前的架構可以輕易串接金流（如 Stripe/LinePay）或新增更複雜的會員系統。

---

## 6. 未來藍圖 (Strategic Roadmap)

*   **真正的 Auth 授權**：目前為簡單密碼，未來可啟用 Supabase Auth 管理多位員工權限。
*   **數據分析面板**：統計哪些水晶最常被 AI 推薦，作為庫存採購參考。
*   **SEO 優化**：針對動態商品頁面生成 Meta Tags，增加自然搜索曝光。
