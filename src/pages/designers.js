import { useState, useRef, useEffect } from "react";
import "./ranger.scss";

export default function DesignersRepublic() {
  const [data, setData] = useState(null);
  const [currentImage, setCurrentImage] = useState(
    "E_EMIGRE_01_MAGAZINE_FRONT-757x1024.jpg"
  );
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
    setData(null);
    fetch("/api/dr-api")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
      });

    setTimeout(() => {
      setFadeIn(false);
    }, 9000);
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useInterval(() => {
    const randomInt = getRandomInt(data.drArray.length);
    setCurrentImage(data.drArray[randomInt].file);
    // console.log('currentImage', currentImage)

    setTimeout(() => {
      setFadeIn(true);
    }, 500);

    setTimeout(() => {
      setFadeIn(false);
    }, 9000);
  }, 10000);

  return (
    <>
      <div className="page page--dr">
        <div className="img-container img-container--squares">
          <img
            className={`ranger-image ringers-image ${
              fadeIn ? "ranger-image--fade-in" : "ranger-image--fade-out"
            }`}
            src={`/dr/${currentImage}`}
            alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
          />
        </div>
      </div>
    </>
  );
}
