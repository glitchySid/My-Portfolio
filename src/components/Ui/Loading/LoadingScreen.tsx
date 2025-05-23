import React, { useState, useEffect } from "react";
import backgroundImage from "../../../assets/background.webp";
import Spinner from "./Spinner";
// Import any SVG and other image assets used in the project
import rust from "../../../assets/languages/rust.svg";
import python from "../../../assets/languages/python.svg";
import javascript from "../../../assets/languages/javascript.svg";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // All images used in the project
    const images = [
      backgroundImage,
      rust,
      python,
      javascript
    ];
    let loadedCount = 0;

    // Simulate minimum loading time with progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100 && imagesLoaded) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadComplete();
            }, 800); // Wait for fade-out animation to complete
          }, 500); // Short delay before starting fade-out
          return 100;
        }
        return Math.min(newProgress, 99); // Cap at 99% until images are loaded
      });
    }, 30);

    // Preload images
    images.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
    });

    return () => clearInterval(interval);
  }, [imagesLoaded, onLoadComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="text-[#88F667] text-4xl mb-8 font-bold animate-pulse">
        Siddhesh Mhatre
      </div>
      <Spinner />
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mt-8">
        <div 
          className="h-full bg-[#88F667] transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-white mt-4 text-sm font-mono">Loading assets... {progress}%</div>
      <p className="text-gray-500 text-xs mt-2">Preloading images for smoother experience</p>
    </div>
  );
};

export default LoadingScreen;