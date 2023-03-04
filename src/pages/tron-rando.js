import { useState, useRef, useEffect } from "react";

import "./tron.scss";

export default function TronRando() {
  let firstImage = "tron-stills_056.jpg";

  const [data, setData] = useState(null);
  const [currentImage, setCurrentImage] = useState(firstImage);
  const [fadeIn, setFadeIn] = useState(true);

  // Making setInterval Declarative with React Hooks
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  //
  // Really gottta figure
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
    setCurrentImage("tron-stills_056.jpg");
    setData(null);
    fetch("/api/tron-api")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
        setTimeout(() => {
          setFadeIn(false);
        }, 9000);
      });
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useInterval(() => {
    setCurrentImage(data.tronArray[getRandomInt(data.tronArray.length)].file);
    // console.log(getRandomInt(data.tronArray.length));

    setTimeout(() => {
      setFadeIn(true);
    }, 500);

    setTimeout(() => {
      setFadeIn(false);
    }, 9000);
  }, 10000);

  return (
    <>
      <div className="page page--tron">
        <div className="img-container">
          <img
            className={`tron-image ${
              fadeIn ? "tron-image--fade-in" : "tron-image--fade-out"
            }`}
            src={`/tron/${currentImage}`}
            alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
          />
        </div>
      </div>
    </>
  );
}
