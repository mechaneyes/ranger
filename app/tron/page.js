import fs from "fs";
import Image from "next/image";

import "./tron.scss";

let tronArray = [];
let tronUrl = "";

const TronImages = () => {
  fs.readdir("public/tron", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.map((file) => {
      tronUrl = `/tron/${file}`;
      // console.log("tronUrl", tronUrl);
      tronArray.push({ tronUrl });
    });

    return tronArray;
  });

  return (
    <>
      {tronArray.map((tron, indxex) => {
        // console.log("tron", tron.tronUrl);
        return (
          <div key={tron.tronUrl} className="img-container">
            <Image
              src={tron.tronUrl}
              alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 100vw,
                    33vw"
            />
          </div>
        );
      })}
    </>
  );
};

export default function Page() {
  return <TronImages />;
}
