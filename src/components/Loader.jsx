import { useEffect, useState } from "react";
import loaderGif from "../assets/loader.gif";

function Loader() {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = loaderGif;
    img.onload = () => setIsGifLoaded(true);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {isGifLoaded ? (
        <img
          src={loaderGif}
          alt="Loading..."
          className="h-32 w-32 object-contain"
        />
      ) : (
        <div className="h-32 w-32 animate-spin rounded-full border-4 border-gray-300 border-t-red-500"></div>
      )}
    </div>
  );
}

export default Loader;
