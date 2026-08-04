"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Retry with user gesture
          setIsPlaying(false);
        });
    }
  }, []);

  // Bắt sự kiện tương tác đầu tiên để phát nhạc
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Preload audio sẵn
    audio.load();

    const handleInteraction = () => {
      if (!started) {
        setStarted(true);
        playAudio();
      }
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("touchend", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("touchend", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("touchend", handleInteraction);
    };
  }, [started, playAudio]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!started) {
      setStarted(true);
      playAudio();
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        src="/music/wedding-song.mp3"
      />

      {/* Overlay mở thiệp - biến mất sau khi click */}
      {!started && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer">
          <div className="text-center text-white p-8 animate-fade-in">
            <div className="text-6xl mb-4 animate-heartbeat">💒</div>
            <p className="text-2xl mb-2" style={{ fontFamily: "var(--font-great-vibes)" }}>
              Hoàng Đạt & Đỗ Mai
            </p>
            <p className="text-sm text-white/70 mb-6">Nhấn để mở thiệp cưới</p>
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Nút bật/tắt nhạc */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-dark transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        )}
      </button>
    </>
  );
}
