import React, { useEffect, useRef, useState } from "react";
import bgMusic from "../assets/music/Puzzle_game.mp3";

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Attach the source and looping once the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.src = bgMusic;
    }
    // No need for a cleanup “pause” here – the component unmount will automatically stop playback when the element is removed.
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .catch((err) => console.error("Audio play failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Hidden audio element – can add `style={{display: "none"}}` if preferred */}
      <audio ref={audioRef} />

      <button
        onClick={togglePlay}
        className="absolute bottom-4 left-4 bg-purple-500 border rounded px-3 py-1 text-black"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </>
  );
};

export default BackgroundMusic;
