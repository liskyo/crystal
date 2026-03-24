import React, { useState, useEffect, useRef } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct, uploadProductImage } from '../services/productService';
import { CrystalProduct } from '../types';

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [products, setProducts] = useState<CrystalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [viewingProduct, setViewingProduct] = useState<CrystalProduct | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [formProduct, setFormProduct] = useState({
    name: '',
    description: '',
    benefit: '',
    price: 980,
    tags: '',
    externalLink: '',
    image: ''
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setUploadingImage(true);
    const url = await uploadProductImage(file);
    if (url) {
      setFormProduct(prev => ({ ...prev, image: url }));
    } else {
      alert('圖片上傳失敗，請稍後再試。');
    }
    setUploadingImage(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formProduct.image) {
      alert('請務必上傳商品圖片');
      return;
    }
    
    const tagsArray = formProduct.tags.split(/[,、]/).map(t => t.trim()).filter(Boolean);
    
    setLoading(true);
    const productData = {
      name: formProduct.name,
      description: formProduct.description,
      benefit: formProduct.benefit,
      price: formProduct.price,
      tags: tagsArray,
      image: formProduct.image,
      externalLink: formProduct.externalLink || undefined
    };

    if (editingId) {
      await updateProduct(editingId, productData);
    } else {
      await addProduct(productData);
    }
    
    closeForm();
    await loadProducts();
  };

  const handleEdit = (p: CrystalProduct) => {
    setFormProduct({
      name: p.name,
      description: p.description,
      benefit: p.benefit,
      price: p.price,
      tags: p.tags.join(', '),
      image: p.image,
      externalLink: p.externalLink || ''
    });
    setEditingId(p.id);
    setIsAdding(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormProduct({
      name: '', description: '', benefit: '', price: 980, tags: '', externalLink: '', image: ''
    });
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`確定要刪除「${name}」嗎？這個動作無法還原。`)) {
      setLoading(true);
      await deleteProduct(id);
      await loadProducts();
    }
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md overflow-y-auto outline-none"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">水晶商品管理後台</h1>
            <p className="text-slate-500 text-sm mt-2 font-medium tracking-wide">目前支援雲端同步與照片自動上傳至 Supabase Storage。</p>
          </div>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 font-bold tracking-widest text-xs uppercase"
          >
            退出管理模式
          </button>
        </div>

        {isAdding ? (
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 mb-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm">
                {editingId ? '✎' : '+'}
              </span>
              {editingId ? '編輯商品' : '新增全新商品'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-400 transition-colors">商品名稱 *</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-2xl px-5 py-4 text-white transition-all outline-none shadow-inner" value={formProduct.name} onChange={e => setFormProduct({...formProduct, name: e.target.value})} placeholder="例如：月光女神" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-400 transition-colors">售價 *</label>
                    <input required type="number" className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-2xl px-5 py-4 text-white transition-all outline-none shadow-inner" value={formProduct.price} onChange={e => setFormProduct({...formProduct, price: parseInt(e.target.value)})} />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-400 transition-colors">商品說明 (靈魂啟示) *</label>
                    <textarea required className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-2xl px-5 py-4 text-white h-32 transition-all outline-none shadow-inner resize-none" value={formProduct.description} onChange={e => setFormProduct({...formProduct, description: e.target.value})} />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-400 transition-colors">核心功效 (條列式) *</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-2xl px-5 py-4 text-white transition-all outline-none shadow-inner" value={formProduct.benefit} onChange={e => setFormProduct({...formProduct, benefit: e.target.value})} placeholder="例如：防護、淨化、堅定" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">商品圖片上傳 *</label>
                    
                    {formProduct.image ? (
                      <div className="relative w-full aspect-[4/3] bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 mb-2 shadow-2xl group/img">
                        <img src={formProduct.image} alt="Preview" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <button type="button" onClick={() => setFormProduct({...formProduct, image: ''})} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full px-6 py-2 border border-white/20 transition-all font-bold text-xs uppercase tracking-widest">更換圖片</button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[4/3] bg-slate-950 rounded-3xl border-2 border-dashed border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-center mb-2 group-hover:bg-indigo-500/[0.02]">
                        {uploadingImage ? (
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-indigo-400 text-xs font-bold tracking-widest animate-pulse">UPLOADING...</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-5xl mb-4 grayscale opacity-30">🖼️</span>
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">點擊或拖放圖片</span>
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-400 transition-colors">標籤 Tags (用逗號隔開) *</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-2xl px-5 py-4 text-white transition-all outline-none shadow-inner" value={formProduct.tags} onChange={e => setFormProduct({...formProduct, tags: e.target.value})} placeholder="例如：淨化, 初心, 直覺, 白色系" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-400 transition-colors">外部連結 (可選：IG, 蝦皮)</label>
                    <input type="url" className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-2xl px-5 py-4 text-white transition-all outline-none shadow-inner" value={formProduct.externalLink} onChange={e => setFormProduct({...formProduct, externalLink: e.target.value})} placeholder="https://..." />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-10 border-t border-slate-800/50">
                <button type="button" onClick={closeForm} className="px-8 py-4 rounded-2xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all font-bold text-sm tracking-widest flex-1 md:flex-none uppercase">
                  取消返回
                </button>
                <button type="submit" disabled={loading || uploadingImage} className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] font-bold transition-all flex-1 shadow-xl disabled:opacity-50 uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  {loading ? '儲存中...' : (editingId ? '儲存修改內容' : '確認新增上傳')}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full py-16 mb-16 bg-slate-900/50 border-2 border-dashed border-slate-800 hover:border-indigo-500/50 flex flex-col items-center justify-center text-slate-500 hover:text-indigo-400 rounded-[3rem] transition-all gap-4 group hover:bg-indigo-500/[0.02]"
          >
            <div className="w-16 h-16 rounded-full bg-slate-800 group-hover:bg-indigo-500 group-hover:text-white flex items-center justify-center text-3xl transition-all duration-500 mb-2">+</div>
            <div className="font-bold tracking-[0.3em] text-xs uppercase group-hover:translate-x-1 transition-transform">ADD NEW CRYSTAL PRODUCT</div>
          </button>
        )}

        {/* Product List */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-4">
              目前的資料庫內商品 
              <span className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">{products.length} Items</span>
            </h2>
          </div>
          
          {loading && !isAdding ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="w-12 h-12 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
              <div className="text-slate-500 text-xs font-bold tracking-widest animate-pulse">LOADING ARCHIVES...</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {products.map(p => {
                return (
                  <div key={p.id} className="group/item flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="aspect-[4/5] relative bg-slate-950 rounded-3xl overflow-hidden border border-slate-800/50 shadow-lg group-hover/item:border-indigo-500/30 transition-all duration-500 mb-4">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover md:group-hover/item:scale-110 transition-transform duration-700" />
                      
                      {/* Action Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                        <button 
                          onClick={() => handleEdit(p)}
                          className="w-full py-2 bg-white text-black text-[10px] font-bold rounded-xl hover:bg-indigo-50 transition-colors uppercase tracking-widest"
                        >
                          編輯此商品
                        </button>
                        
                        <div className="w-full flex gap-2">
                          <button 
                            onClick={() => handleEdit(p)}
                            className="flex-1 py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-xl hover:bg-indigo-500 transition-colors uppercase tracking-widest"
                          >
                            修改
                          </button>
                          <button 
                            onClick={() => handleDelete(p.id, p.name)}
                            className="w-10 h-10 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                            title="刪除"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-1">
                      <div className="text-[#A5B4FC] text-[10px] font-bold uppercase tracking-widest mb-1">NT$ {p.price.toLocaleString()}</div>
                      <div className="text-white font-bold group-hover/item:text-indigo-300 transition-colors">{p.name}</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {p.tags.slice(0, 2).map(t => (
                          <span key={t} className="text-[9px] text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">#{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Detail View Modal */}
      {viewingProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-slate-900 w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row relative">
            
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
              <img src={viewingProduct.image} alt={viewingProduct.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/2 p-10 md:p-12 overflow-y-auto max-h-[70vh] md:max-h-none relative">
              <button 
                onClick={() => setViewingProduct(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full flex items-center justify-center transition-all border border-white/10 active:scale-95 shadow-xl md:hidden"
                aria-label="關閉"
              >
                <span className="text-xl">✕</span>
              </button>
              
              {/* Desktop Close Button (Stays at original place if desired, or we can move it too) */}
              <button 
                onClick={() => setViewingProduct(null)}
                className="hidden md:flex absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full items-center justify-center transition-all border border-white/10"
                aria-label="關閉"
              >
                ✕
              </button>

              <div className="text-indigo-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Product Details</div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">{viewingProduct.name}</h3>
              <div className="text-2xl text-slate-400 mb-8 font-light">NT$ {viewingProduct.price.toLocaleString()}</div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">靈魂啟示 / Description</h4>
                  <p className="text-slate-300 leading-relaxed text-sm italic">"{viewingProduct.description}"</p>
                </div>
                
                <div>
                  <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">核心能量 / Benefits</h4>
                  <div className="flex flex-wrap gap-3">
                    {viewingProduct.benefit.split(/[,、]/).map(b => (
                      <span key={b} className="bg-indigo-500/10 text-indigo-300 px-4 py-2 rounded-xl text-xs font-bold border border-indigo-500/20">{b.trim()}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">能量標籤 / Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {viewingProduct.tags.map(t => (
                      <span key={t} className="text-[10px] text-slate-400 border border-slate-800 px-3 py-1 rounded-lg">#{t}</span>
                    ))}
                  </div>
                </div>

                {viewingProduct.externalLink && (
                  <div className="pt-6">
                    <a href={viewingProduct.externalLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-slate-200 transition-all text-xs tracking-widest uppercase shadow-xl">
                      前往外部賣場 ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
