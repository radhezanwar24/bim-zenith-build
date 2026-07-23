import { Volume2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function IntroVideoOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);
  const [soundBlocked, setSoundBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    video.muted = false;
    video.volume = 1;

    const playWithSound = async () => {
      try {
        await video.play();
      } catch {
        setSoundBlocked(true);
        video.muted = true;
        await video.play().catch(() => undefined);
      }
    };

    void playWithSound();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  if (!visible) return null;

  const playWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    setSoundBlocked(false);
    await video.play().catch(() => setSoundBlocked(true));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/intro-video.mp4"
        autoPlay
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        onEnded={() => setVisible(false)}
      />

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur transition-colors hover:bg-white/15"
        aria-label="Skip intro video"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>

      {soundBlocked && (
        <button
          type="button"
          onClick={playWithSound}
          className="absolute bottom-8 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-[0_18px_45px_-18px_rgba(255,255,255,0.8)] transition-all hover:-translate-y-0.5 hover:bg-sky"
        >
          <Volume2 className="h-4 w-4" aria-hidden />
          Tap to play with sound
        </button>
      )}
    </div>
  );
}
