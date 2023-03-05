import { useEffect } from "react";

import RingersRandomLone from "./ringers-random-lone";
import "./ranger.scss";

export default function RingersRando() {
  useEffect(() => {
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

  return (
    <>
      <div className="page page--square--double">
        <div className="img-container img-container--squares">
          <RingersRandomLone />
        </div>
        <div className="img-container img-container--squares">
          <RingersRandomLone />
        </div>
      </div>
    </>
  );
}
