import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <video
        ref={videoRef}
        width="500"
        className="rounded-lg shadow-md"
        controls={false}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Play ▶️
        </button>
        <button
          onClick={handlePause}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
        >
          Pause ⏸️
        </button>
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Restart 🔄
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
