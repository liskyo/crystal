# 104 履歷亮點指南：AI 水晶面相分析系統 (CrystalAI)

要在 104 或面試中脫穎而出，重點在於從「開發者」轉向「產品工程師」的思考。以下是針對此專案的黃金寫法，直接複製並根據您的需求調整即可。

---

## 1. 專案名稱 (Project Name)
**AI 智能面相導購與動能水晶管理系統 (Crystal-based AI Recommendation & Admin SaaS)**

## 2. 核心技術棧 (Technical Keywords)
> *這些關鍵字是為了通過 HR 的自動篩選系統。*
*   **前端**: React 19, TypeScript, Vite, Tailwind CSS, Canvas API (動畫)
*   **後端/BaaS**: Supabase (PostgreSQL, Storage, REST API), Vercel Serverless Functions
*   **人工智慧**: Google Gemini SDK, Prompt Engineering, LLM JSON Mode
*   **開發工具**: Git, NPM, Postman, SQL Editor

---

## 3. 履歷必寫的「三大亮點」(Bullet Points)

### A. 整合生成式 AI 實作「邏輯導購引擎」
*   **技術說明**：使用 Google Gemini API 實作非結構化影像分析，將抽象的面相特徵轉化為結構化 JSON 數據。
*   **面試點**：強調您如何透過 **Prompt Engineering** 強制 AI 輸出穩定格式，並實作 **Model Fallback (Flash/Pro 降級切換)** 指數退避機制，確保 99.9% 的 API 請求成功率。

### B. 從靜態到動態：實作 Full-Stack 管理後台 (CRUD)
*   **技術說明**：串接 **Supabase BaaS**，讓原本寫死的商品清單變為雲端可動態管理的資料庫，並實作管理員隱藏入口與密碼驗證。
*   **面試點**：展示您具備**資料庫建模 (SQL Table Schema)** 與 **雲端存儲 (Storage)** 的能力。說明您如何實作「本地+雲端」混合式讀取策略 (Hybrid Fetching)，在斷網時仍保有系統可用性。

### C. 極致視覺 UX 與高效能組件開發
*   **技術說明**：利用 **Canvas API** 獨立開發高性能的星空背景與流星星軌組件，避免使用大型第三方動畫庫造成的性能負擔。
    *   **面試點**：強調您對「使用者體驗」的極度追求，從 **Glassmorphism (毛玻璃質感)** 到 **Aura 呼吸燈動畫**，展示您在前端美學與效能平衡上的深度。

---

## 4. 解決了什麼難題？(Interview Q&A)
*面試官最愛問：「你在這個專案遇到最大的困難是什麼？」*

> **標準回答範例：**
> 「在 2.0 升級時，如何將原有 58 項靜態商品無縫搬遷至 Supabase 是一大挑戰。我撰寫了自動化 SQL 遷移腳本並優化了 `productService` 的快取邏輯，確保 C 端用戶在後台更新資料時，系統能即時反應而不影響載入速度。此外，我也解決了 Vercel 部署環境下，環境變數與套件依賴衝突的问题。」

---

## 5. 104 職務類別填寫建議
請將此專案掛在以下職務下：
1.  **前端開發工程師** (重點放在 React/TS, Canvas 動畫)
2.  **全端工程師** (重點放在 Supabase, 資料庫設計, API 整合)
3.  **AI 應用工程師** (重點放在 Gemini API, Prompt 工程)

---

> [!IMPORTANT]
> **給面試者的秘密武器：**
> 如果有平板或手機，面試現場直接展示「連點 5 次標籤進入後台」並「當場拍照上傳一個新商品」。
> 這種 **「即見即所得」的技術展現**，比寫在紙上更有衝擊力，能直接證明您具備產品端到端 (End-to-End) 的開發實力！
