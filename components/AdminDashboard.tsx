import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, deleteProduct, uploadProductImage } from '../services/productService';
import { CrystalProduct } from '../types';

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [products, setProducts] = useState<CrystalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [newProduct, setNewProduct] = useState({
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
      setNewProduct(prev => ({ ...prev, image: url }));
    } else {
      alert('圖片上傳失敗，請稍後再試。');
    }
    setUploadingImage(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.image) {
      alert('請務必上傳商品圖片');
      return;
    }
    
    const tagsArray = newProduct.tags.split(/[,、]/).map(t => t.trim()).filter(Boolean);
    
    setLoading(true);
    await addProduct({
      name: newProduct.name,
      description: newProduct.description,
      benefit: newProduct.benefit,
      price: newProduct.price,
      tags: tagsArray,
      image: newProduct.image,
      externalLink: newProduct.externalLink || undefined
    });
    
    setIsAdding(false);
    setNewProduct({
      name: '', description: '', benefit: '', price: 980, tags: '', externalLink: '', image: ''
    });
    await loadProducts();
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`確定要刪除「${name}」嗎？這個動作無法還原。`)) {
      setLoading(true);
      await deleteProduct(id);
      await loadProducts();
    }
  };

  return (
    <div className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white">水晶商品管理後台</h1>
            <p className="text-slate-400 text-sm mt-2">只有透過後台新增的商品可以刪除，系統預設商品為不可更改狀態。</p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all"
          >
            退出管理模式
          </button>
        </div>

        {isAdding ? (
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-12 animate-in slide-in-from-top-4">
            <h2 className="text-xl font-bold mb-6">新增商品</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">商品名稱 *</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} placeholder="例如：月光女神" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">售價 *</label>
                    <input required type="number" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value)})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">商品說明 (靈魂啟示) *</label>
                    <textarea required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white h-24" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">核心功效 (條列式為佳) *</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white" value={newProduct.benefit} onChange={e => setNewProduct({...newProduct, benefit: e.target.value})} placeholder="例如：防護、淨化、堅定" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">商品圖片上傳 *</label>
                    
                    {newProduct.image ? (
                      <div className="relative w-full aspect-square bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 mb-2">
                        <img src={newProduct.image} alt="Preview" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => setNewProduct({...newProduct, image: ''})} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80">更換</button>
                      </div>
                    ) : (
                      <div className="relative w-full aspect-square bg-slate-950 rounded-2xl border-2 border-dashed border-slate-800 hover:border-indigo-500/50 transition-colors flex flex-col items-center justify-center mb-2">
                        {uploadingImage ? (
                          <div className="text-indigo-400 animate-pulse">圖片上傳中...</div>
                        ) : (
                          <>
                            <span className="text-4xl mb-2">📸</span>
                            <span className="text-sm text-slate-500">點擊上傳圖片</span>
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">標籤 Tags (用逗號隔開) *</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white" value={newProduct.tags} onChange={e => setNewProduct({...newProduct, tags: e.target.value})} placeholder="例如：淨化, 初心, 直覺, 白色系" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">外部連結 (可選：如 IG, 蝦皮)</label>
                    <input type="url" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white" value={newProduct.externalLink} onChange={e => setNewProduct({...newProduct, externalLink: e.target.value})} placeholder="https://..." />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-slate-800">
                <button type="button" onClick={() => setIsAdding(false)} className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors w-full md:w-auto">
                  取消
                </button>
                <button type="submit" disabled={loading || uploadingImage} className="px-8 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 font-bold transition-all w-full md:w-auto flex-1 shadow-[0_0_15px_rgba(79,70,229,0.4)] disabled:opacity-50">
                  {loading ? '儲存中...' : '確認新增商品'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="w-full py-8 mb-12 bg-slate-900 border-2 border-dashed border-slate-700 hover:border-indigo-500 flex items-center justify-center text-slate-400 hover:text-indigo-400 rounded-3xl transition-all gap-2"
          >
            <span className="text-2xl">+</span> 新增測驗商品
          </button>
        )}

        {/* Product List */}
        <div>
          <h2 className="text-xl font-bold mb-6">目前的商品庫 ({products.length})</h2>
          {loading && !isAdding ? (
            <div className="text-center py-12 text-slate-500 animate-pulse">載入中...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {products.map(p => {
                const isCustom = !p.id.startsWith('c') && !p.id.startsWith('n'); // Simple heuristic: constants use 'c1', 'n1' format
                return (
                  <div key={p.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 relative group">
                    <div className="aspect-square relative flex-shrink-0">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      {isCustom && (
                        <button 
                          onClick={() => handleDelete(p.id, p.name)}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-400 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center shadow-lg"
                          title="刪除商品"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-bold text-slate-500 mb-1">NT$ {p.price}</div>
                      <div className="font-bold text-white text-sm truncate">{p.name}</div>
                      {!isCustom && (
                        <div className="text-[10px] text-indigo-400 mt-2">系統內建</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
