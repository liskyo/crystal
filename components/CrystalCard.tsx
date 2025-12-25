
import React from 'react';
import { CrystalProduct } from '../types';

interface CrystalCardProps {
  product: CrystalProduct;
  isRecommendation?: boolean;
  onAction?: (product: CrystalProduct) => void;
}

const CrystalCard: React.FC<CrystalCardProps> = ({ product, isRecommendation, onAction }) => {
  return (
    <div className={`group bg-slate-900/40 rounded-3xl overflow-hidden border transition-all duration-500 ${isRecommendation ? 'border-amber-400/50 scale-105 shadow-2xl shadow-amber-900/20' : 'border-slate-800 hover:border-slate-600'}`}>
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => onAction?.(product)}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {isRecommendation && (
          <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
            靈魂契合推薦
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-bold border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">查看能量詳情</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-slate-100">{product.name}</h3>
          <span className="text-amber-400 font-bold">NT$ {product.price}</span>
        </div>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 italic">「{product.description}」</p>
        <div className="mb-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">能量功效</h4>
          <p className="text-sm text-slate-200">{product.benefit}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
        <button 
          onClick={() => alert(`已將 ${product.name} 加入能量清單`)}
          className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
        >
          即刻連結此能量
        </button>
        <p className="text-[10px] text-center mt-3 text-slate-500 uppercase tracking-tighter">當前頻率下僅餘 3 件</p>
      </div>
    </div>
  );
};

export default CrystalCard;
