import { useState } from "react";

const Youtube = ({ id, title, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <div className="yt-lite rounded-md overflow-hidden">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          {...rest}
        />
      </div>
    );
  }

  return (
    <div className="yt-lite rounded-md overflow-hidden relative cursor-pointer" onClick={handlePlay}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-colors duration-200">
          <svg 
            className="w-8 h-8 text-white ml-1" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
