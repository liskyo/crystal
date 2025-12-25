
import React, { useState } from 'react';
import { UserInfo, AppState, AnalysisResult, CrystalProduct } from './types';
import { CRYSTAL_PRODUCTS, INTENTS } from './constants';
import { analyzeFaceAndCrystal } from './services/geminiService';
import CameraFeed from './components/CameraFeed';
import CrystalCard from './components/CrystalCard';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.IDLE);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', birthDate: '', intent: INTENTS[0] });
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<CrystalProduct | null>(null);

  const recommendedProduct = result 
    ? CRYSTAL_PRODUCTS.find(p => p.id === result.suggestedCrystalId) || CRYSTAL_PRODUCTS[0]
    : null;

  const otherProducts = result 
    ? CRYSTAL_PRODUCTS.filter(p => p.id !== result.suggestedCrystalId)
    : CRYSTAL_PRODUCTS;

  const handleStart = () => setState(AppState.INPUT);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.birthDate) {
      setState(AppState.SCANNING);
    }
  };

  const handleCapture = async (image: string) => {
    setCapturedImage(image);
    setState(AppState.ANALYZING);
    try {
      const analysis = await analyzeFaceAndCrystal(image, userInfo, CRYSTAL_PRODUCTS);
      setResult(analysis);
      setState(AppState.RESULT);
    } catch (err) {
      console.error(err);
      setError("宇宙訊號微弱，請再嘗試一次。");
      setState(AppState.SCANNING);
    }
  };

  const reset = () => {
    setState(AppState.IDLE);
    setResult(null);
    setCapturedImage(null);
    setError(null);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
      {/* 詳情彈窗 Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 aspect-square">
                <img src={selectedProduct.image} className="w-full h-full object-cover" alt={selectedProduct.name} />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col">
                <div className="flex-1">
                  <h2 className="text-3xl font-serif font-bold text-white mb-2">{selectedProduct.name}</h2>
                  <div className="text-amber-400 font-bold text-xl mb-4">NT$ {selectedProduct.price}</div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">靈魂啟示</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedProduct.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">核心功效</h4>
                      <p className="text-indigo-300 text-sm">{selectedProduct.benefit}</p>
                    </div>
                  </div>
                </div>
                <button className="mt-8 w-full bg-white text-slate-950 font-bold py-4 rounded-2xl hover:bg-indigo-50 transition-all">
                  連結此水晶頻率
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
          精準能量場分析系統
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 tracking-tight">
          靈曦水晶 AI
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          結合千年面相學與現代 AI 技術。透過捕捉面部細節，揭示您靈魂此刻正共振的水晶頻率。
        </p>
      </div>

      <main className="w-full">
        {state === AppState.IDLE && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative inline-block mb-8">
              <img 
                src="https://images.unsplash.com/photo-1567016507665-356928ac6679?q=80&w=800&auto=format&fit=crop" 
                alt="Mystical Crystals" 
                className="w-full max-w-2xl h-80 object-cover rounded-[3rem] shadow-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handleStart}
                  className="bg-white text-indigo-950 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all"
                >
                  開始個人能量占卜
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
                <div className="text-indigo-400 text-3xl mb-3">✧</div>
                <h3 className="font-bold mb-2">能量掃描</h3>
                <p className="text-xs text-slate-500">即時分析 142 個面部能量流動點。</p>
              </div>
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
                <div className="text-purple-400 text-3xl mb-3">◈</div>
                <h3 className="font-bold mb-2">運勢解讀</h3>
                <p className="text-xs text-slate-500">結合生辰與面部特徵的深度運勢交互運算。</p>
              </div>
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
                <div className="text-amber-400 text-3xl mb-3">✦</div>
                <h3 className="font-bold mb-2">頻率匹配</h3>
                <p className="text-xs text-slate-500">精準挑選水晶，協調並顯化您的目標願景。</p>
              </div>
            </div>
          </div>
        )}

        {state === AppState.INPUT && (
          <div className="max-w-md mx-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 rounded-3xl animate-in zoom-in-95 duration-500">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">輸入基本資料</h2>
            <form onSubmit={handleInfoSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">您的姓名</label>
                <input 
                  required
                  type="text" 
                  value={userInfo.name}
                  onChange={e => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  placeholder="請輸入您的稱呼"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">出生日期</label>
                <input 
                  required
                  type="date" 
                  value={userInfo.birthDate}
                  onChange={e => setUserInfo(prev => ({ ...prev, birthDate: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">當前期望的能量</label>
                <select 
                  value={userInfo.intent}
                  onChange={e => setUserInfo(prev => ({ ...prev, intent: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  {INTENTS.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all"
              >
                前往靈氣捕捉
              </button>
            </form>
          </div>
        )}

        {state === AppState.SCANNING && (
          <div className="flex flex-col items-center animate-in fade-in duration-500">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">將面部對準能量場中心</h2>
            <CameraFeed onCapture={handleCapture} />
            <p className="mt-8 text-slate-500 text-sm max-w-sm text-center leading-relaxed">
              請在光線充足處進行。您的五官輪廓是解讀靈魂共振頻率的關鍵。
            </p>
          </div>
        )}

        {state === AppState.ANALYZING && (
          <div className="flex flex-col items-center py-20">
            <div className="relative w-32 h-32 mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
              {capturedImage && (
                <img src={capturedImage} className="absolute inset-2 rounded-full object-cover grayscale opacity-50" alt="Scanning" />
              )}
            </div>
            <h3 className="text-xl font-bold text-indigo-400 animate-pulse">正在連結宇宙星圖...</h3>
            <p className="mt-4 text-slate-500 max-w-xs text-center text-sm">
              正在解讀面部特徵點並對應全球能量庫...
            </p>
          </div>
        )}

        {state === AppState.RESULT && result && (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
              {/* Reading Section */}
              <div className="space-y-8 bg-slate-900/30 p-8 rounded-[3rem] border border-slate-800">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-2">能量解讀：{userInfo.name}</h2>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full animate-pulse shadow-[0_0_10px]" style={{ backgroundColor: result.auraColor }}></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-400">主導能量場：{result.auraColor}</span>
                  </div>
                </div>

                <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">靈氣分析報告</h4>
                  <p className="text-slate-300 leading-relaxed italic text-lg font-serif">
                    「{result.energyReading}」
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">面相特徵揭示</h4>
                  {result.faceTraits.map((trait, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="text-indigo-500 font-bold">{idx + 1}</div>
                      <div>
                        <div className="text-sm font-bold text-slate-200">{trait.trait}</div>
                        <div className="text-xs text-slate-500 mt-1">{trait.meaning}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/30">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">能量啓示</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {result.recommendationReason}
                  </p>
                </div>
                
                <button 
                  onClick={reset}
                  className="text-slate-500 text-sm hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  ← 重新諮詢宇宙
                </button>
              </div>

              {/* Main Recommendation Section */}
              <div className="flex flex-col items-center">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-serif font-bold mb-1">您的能量顯化媒介</h3>
                  <p className="text-slate-500 text-sm">與您當前頻率精準匹配的能量水晶</p>
                </div>
                {recommendedProduct && (
                  <div className="w-full max-w-md">
                    <CrystalCard 
                      product={recommendedProduct} 
                      isRecommendation 
                      onAction={setSelectedProduct}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Expanded "Other Frequencies" Section */}
            <div className="mt-20 border-t border-slate-800 pt-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">其他推薦頻率</h3>
                <p className="text-slate-500">探索更多能輔助您的輔助能量</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProducts.map(p => (
                  <div key={p.id} className="relative group">
                    <div 
                      onClick={() => setSelectedProduct(p)}
                      className="cursor-pointer bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all hover:-translate-y-2"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-bold truncate">{p.name}</h4>
                          <div className="text-amber-400 text-xs font-bold">NT$ {p.price}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] text-slate-500 line-clamp-2 mb-3">{p.benefit}</p>
                        <div className="flex gap-1">
                          {p.tags.slice(0, 2).map(t => (
                            <span key={t} className="text-[8px] bg-white/5 text-slate-400 px-1.5 py-0.5 rounded border border-white/10">#{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Social Proof Bar */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-[60]">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 50}/32/32`} 
                  className="w-8 h-8 rounded-full border-2 border-slate-900" 
                  alt="Reviewer" 
                />
              ))}
            </div>
            <div className="text-xs text-slate-400">
              本週已有 <span className="text-white font-bold">1,200+</span> 位有緣人完成頻率匹配
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> 能量實驗室認證
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1">
               加密星際交易
            </span>
          </div>
        </div>
      </footer>

      {error && (
        <div className="fixed top-6 right-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-sm animate-in slide-in-from-right-4 z-[200]">
          {error}
        </div>
      )}
    </div>
  );
};

export default App;
