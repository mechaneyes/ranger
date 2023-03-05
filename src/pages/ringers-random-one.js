import { useState, useRef, useEffect } from "react";

export default function RingersRandomOne() {
  let firstImage = "000303.png";

  const [data, setData] = useState(null);
  const [currentImage, setCurrentImage] = useState(firstImage);
  const [fadeIn, setFadeIn] = useState(true);
  const randomInterval = useRef(5000);

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

    const root = document.documentElement;
    if (window.innerWidth > window.innerHeight) {
      root.style.setProperty("--flex-direct", "row");
      root.style.setProperty("--img-width", "auto");
      root.style.setProperty("--img-height", "100%");
    } else {
      root.style.setProperty("--grid-col", "1fr");
      root.style.setProperty("--img-width", "100%");
      root.style.setProperty("--img-height", "auto");
    }
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  // get random in between 3 and 10 seconds at 1000ms intervals
  //   randomInterval.current = Math.floor(Math.random() * 7000) + 3000;

  useInterval(() => {
    randomInterval.current = Math.floor(Math.random() * 8000) + 5000;
    console.log(
      "// ————————————————————————————————————o start —>",
      randomInterval.current
    );

    // image file names are 6 digits long, so we
    // need to pad the random number
    const randomInt = getRandomInt(data.rangerArray.length);
    const padNumber = (randomInt) => {
      if (randomInt < 10) {
        return `00000${randomInt}`;
      } else if (randomInt < 100) {
        return `0000${randomInt}`;
      } else if (randomInt < 1000) {
        return `000${randomInt}`;
      }
    };

    setCurrentImage(`${padNumber(randomInt)}.png`);

    setTimeout(() => {
      setFadeIn(true);
    }, 1000);

    setTimeout(() => {
      setFadeIn(false);
    }, randomInterval.current - 1000);
  }, randomInterval.current);

  return (
    <img
      className={`ranger-image ringers-image ${
        fadeIn ? "ranger-image--fade-in" : "ranger-image--fade-out"
      }`}
      src={`/ringers/${currentImage}`}
      alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
    />
  );
}
