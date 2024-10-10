import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.currentTime && audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  return (
    <div className="flex items-center p-2 bg-gray-100 border rounded shadow-sm w-75">
      {/* Play/Pause Button */}
      <button onClick={togglePlayPause} className="text-gray-600">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Progress Bar */}
      <input
        type="range"
        value={progress}
        onChange={handleProgressChange}
        className="mx-2 w-full h-1 bg-gray-300 rounded-lg"
      />

      {/* Volume Control */}
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
        className="ml-2 w-20 h-1 bg-gray-300 rounded-lg"
      />

      {/* Stop Button */}
      <button onClick={handleStop} className="ml-2 text-red-500">
        <FaTimes />
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} 
      // src="/sampleAudio/audio1.mp3" 
      />
    </div>
  );
};

export default AudioPlayer;
