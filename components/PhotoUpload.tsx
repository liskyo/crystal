import React, { useState, useRef } from 'react';

interface PhotoUploadProps {
    onCapture: (base64Image: string) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onCapture }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleConfirm = () => {
        if (preview) {
            onCapture(preview);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-indigo-500/30 glow-border bg-black/50 flex flex-col items-center justify-center relative p-6">
            {preview ? (
                <>
                    <img src={preview} alt="Upload Preview" className="absolute inset-0 w-full h-full object-contain bg-black" />
                    <div className="absolute bottom-4 flex gap-4">
                        <button
                            onClick={() => {
                                setPreview(null);
                                if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            className="bg-slate-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-slate-600 transition-all"
                        >
                            重新選擇
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-indigo-500 transition-all animate-pulse"
                        >
                            確認分析
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto border-2 border-dashed border-indigo-400 rounded-full flex items-center justify-center mb-4 text-indigo-400 text-4xl">
                        +
                    </div>
                    <p className="text-slate-300 mb-6">請上傳清晰五官照片</p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-white text-indigo-950 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transition-all"
                    >
                        選擇照片
                    </button>
                </div>
            )}
        </div>
    );
};

export default PhotoUpload;
