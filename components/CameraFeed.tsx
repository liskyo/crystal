
import React, { useRef, useEffect, useState, useCallback } from 'react';

interface CameraFeedProps {
  onCapture: (base64Image: string) => void;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("無法啟動相機。請確保已授予瀏覽器使用權限。");
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const takeSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        onCapture(dataUrl);
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-indigo-500/30 glow-border bg-black">
      {error ? (
        <div className="flex items-center justify-center h-full text-center p-6 text-red-400">
          {error}
        </div>
      ) : (
        <>
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted 
            className="w-full h-full object-cover scale-x-[-1]"
          />
          <div className="absolute inset-0 border-[20px] border-transparent pointer-events-none">
            <div className="w-full h-full border-2 border-white/20 rounded-xl flex items-center justify-center">
              <div className="w-48 h-64 border-2 border-dashed border-indigo-400/50 rounded-full opacity-50"></div>
            </div>
          </div>
          <button
            onClick={takeSnapshot}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-indigo-950 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-100 transition-all active:scale-95"
          >
            開始靈氣分析
          </button>
        </>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraFeed;
