import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: () => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use a simple hardcoded password for now. 
    // In a prod app we would use Supabase Auth.
    if (password === 'admin123') {
      onLogin();
    } else {
      setError('密碼錯誤，請重新輸入。');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.2)] p-8">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          ✕
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
            <span className="text-2xl">🔒</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">管理員登入</h2>
          <p className="text-sm text-slate-400 mt-2">請輸入存取密碼以進入商品管理後台</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-center tracking-[0.5em]"
              placeholder="••••••••"
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm text-center animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
          >
            驗證身分
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
