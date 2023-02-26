import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import "./tron.scss";

export default function Looper() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Making setInterval Declarative with React Hooks
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // 
  // Really gottta figure out how this thing works.
  // 
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useEffect(() => {
    setData(null);
    setLoading(true);
    fetch("/api/tron-api")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
        setLoading(false);
        setCurrentImage(data.tronArray[0].file);
      });
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  useInterval(() => {
    if (currentIndex === data.tronArray.length) {
      setCurrentIndex(0);
    }
    setCurrentImage(data.tronArray[currentIndex].file);
    setCurrentIndex(currentIndex + 1);

    setTimeout(() => {
      setFadeIn(true);
    }, 500);

    setTimeout(() => {
      setFadeIn(false);
    }, 7000);

    console.log("currentImage", data.tronArray[currentIndex].file);
  }, 8000);

  return (
    <>
      <div className="img-container">
        <Image
          className={`tron-image ${
            fadeIn ? "tron-image--fade-in" : "tron-image--fade-out"
          }`}
          src={`/tron/${currentImage}`}
          alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
          fill
          sizes="100vw"
        />
      </div>
    </>
  );
}
