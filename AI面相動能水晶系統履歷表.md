# 專案經歷：AI 面相動能水晶系統 (CrystalAI)

**角色**：全端開發工程師 (Full Stack Developer)
**技術棧**：React (Hooks), TypeScript, Tailwind CSS, Google Gemini API (GenAI), Vercel Serverless, Vite

## 專案亮點與技術成就

此專案為一款結合「傳統面相學」與「生成式 AI」的創新 Web 應用，透過即時面部影像分析，為用戶提供個人化的能量解讀與水晶產品推薦。

### 🚀 核心貢獻

*   **生成式 AI 深度整合 (GenAI Integration)**
    *   利用 **Google Gemini API** 開發核心分析引擎，透過 **Prompt Engineering** 設計高複雜度的系統提示詞，精準引導 AI 扮演「面相學專家」。
    *   **結構化數據輸出**：強制 LLM 輸出嚴格定義的 JSON 格式數據，包含「五官特徵分析」、「能量場顏色 (Aura)」及「推薦理由」，確保前端能精準渲染 UI，解決了 LLM 輸出不穩定的痛點。
    *   **高可用性設計**：實作 **Model Fallback 策略**（自動在 Gemini 1.5 Pro/Flash 與 3.0 Preview 間切換）與 **API Key Rotation**（多金鑰負載平衡），有效解決 Rate Limit 問題，提升服務穩定性。

*   **現代化前端架構與極致 UX**
    *   採用 **React** 搭配 **Vite** 構建高效能 SPA，運用 `useState` / `useEffect` 管理複雜的應用狀態（相機串流、圖片上傳、分析載入、結果展示）。
    *   **沉浸式 UI 設計**：使用 **Tailwind CSS** 打造「宇宙能量」風格介面，運用 Glassmorphism (毛玻璃)、`backdrop-blur` 及 `animate-in/out` 等進階動畫效果，提供流暢且具神祕感的視覺體驗。
    *   **響應式設計 (RWD)**：完全兼容 Desktop 與 Mobile 裝置，確保在各種螢幕尺寸下皆有最佳的操作體驗。

*   **Serverless 後端架構**
    *   使用 **Vercel Serverless Functions** 部署後端 API，隱藏敏感的 API Key，並處理跨網域資源請求 (CORS) 與錯誤處理。
    *   架構輕量且易於擴展，大幅降低維運成本。

### 💡 解決方案與效益
*   **數位轉型創新**：成功將傳統線下的「命理諮詢」數位化，透過 AI 實現 24/7 的即時服務，解決了傳統服務人力成本高且無法量化的限制。
*   **優化導購流程**：透過 AI 分析結果直接推薦對應的 `CRYSTAL_PRODUCTS` (實作於前端的靜態資料庫)，有效降低用戶的選擇障礙，提升潛在轉化率。
