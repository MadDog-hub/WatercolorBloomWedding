import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (!hasStarted) {
      setHasStarted(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef}
        loop
        preload="none"
      >
        <source 
          src="https://res.cloudinary.com/dbiboclqa/video/upload/v1753242615/ytmp3free.cc_on-the-wings-of-love-kyla-lyrics-youtubemp3free.org_zazczr.mp3" 
          type="audio/mpeg" 
        />
      </audio>

      <div className="music-controls rounded-full px-4 py-2 shadow-lg">
        <Button 
          onClick={toggleMusic}
          variant="ghost"
          size="sm"
          className="text-deep-forest font-semibold text-sm p-0 h-auto hover:bg-transparent"
        >
          {isPlaying ? (
            <><Pause className="mr-2" size={16} />Music Playing</>
          ) : (
            <><Play className="mr-2" size={16} />{hasStarted ? 'Play Music' : 'Click to play music first'}</>
          )}
        </Button>
      </div>
    </>
  );
}
