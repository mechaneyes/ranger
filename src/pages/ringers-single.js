import { useState, useRef, useEffect } from "react";

import "./ranger.scss";

export default function RingersRando() {
  let firstImage = "000303.png";

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
    setCurrentImage(firstImage);
    setData(null);
    fetch("/api/ringers-api")
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
    const randomInt = getRandomInt(data.rangerArray.length);

    // image file names are 6 digits long, so we 
    // need to pad the random number
    const padNumber = (randomInt) => {
        if (randomInt < 10) {
            return `00000${randomInt}`;
        } else if (randomInt < 100) {
            return `0000${randomInt}`;
        } else if (randomInt < 1000) {
            return `000${randomInt}`;
        }
    }

    setCurrentImage(`${padNumber(randomInt)}.png`);

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
            className={`ranger-image ringers-image ${
              fadeIn ? "ranger-image--fade-in" : "ranger-image--fade-out"
            }`}
            src={`/ringers/${currentImage}`}
            alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
          />
        </div>
      </div>
    </>
  );
}
