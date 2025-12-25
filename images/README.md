# 水晶圖片存放區

請將您的水晶商品圖片放入此資料夾。

## 命名建議
建議使用英文與連字號命名，例如：
- `amethyst-bracelet.jpg`
- `rose-quartz.jpg`
- `citrine-pendant.png`

## 如何在程式中使用
在 `src/constants.tsx` 檔案中，將 `image` 欄位設定為：
```typescript
{
  // ... 其他欄位
  image: '/images/您的檔案名稱.jpg',
}
```
