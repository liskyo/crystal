<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# ROPU PON 晶飾 - 個人化面相與水晶能量分析

這是一個結合個人化面相分析與水晶能量推薦的 AI 應用程式。

您可以在 AI Studio 查看此應用程式：[AI Studio Link](https://ai.studio/apps/drive/1Be8OMMxzpbhE2KbXFUGkqQR8Fza5VH5k)

## 本地執行 (Run Locally)

**前置需求:** Node.js (建議 v20 以上)

1. 安裝套件：
   ```bash
   npm install
   ```

2.設定環境變數：
   將 `VITE_GEMINI_API_KEY` 設定於 `.env.local` 檔案中（請填入您的 Gemini API Key）。

3. 啟動應用程式：
   ```bash
   npm run dev
   ```

## 部署 (Deployment)

本專案已設定 GitHub Actions，當推送到 `main` 分支時會自動部署。

### 設定步驟：
1. 確保您的 Repository 可見性為 Public（或若是 Private，需確認 Actions 權限）。
2. 在 GitHub Repository 的 **Settings > Actions > General** 中，確保 "Workflow permissions" 設為 "Read and write permissions"。
3. 推送程式碼到 GitHub。
4. 部署完成後，GitHub Pages 會自動上線。

## 專案結構

- `src/` - 原始碼
- `components/` - React 組件
- `services/` - API 服務
- `public/` - 靜態資源

## 常用指令

- `npm run dev`: 啟動開發伺服器
- `npm run build`: 建置生產版本
- `npm run preview`: 預覽生產版本建置
- `npm run lint`: 檢查程式碼品質
