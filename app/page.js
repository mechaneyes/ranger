import fs from "fs";
import Image from "next/image";

let tronArray = [];

const TronImages = () => {
  // let tronArray = [];

  fs.readdir("./app/tron-images/", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // console.log("files", files);

    tronArray = files;
    // console.log('tronArray', tronArray)
    return tronArray;

    // files.map((file) => {
    //   let tronUrl = `tron-images/${file}`;
    //   // console.log("tronUrl", tronUrl);
    //   tronArray.push({ tronUrl });
    // });
  });

  return <img src={`/tron-images/${tronArray[0]}`} />;
  return console.log("tronArray outside", tronArray[0]);

  return tronArray.map((tron) => {
    // return <p>{tron}</p>
    return (
      <img
        src={`/tron-images/${tron}`}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    );
  });
};

export default function Page() {
  return (
    <>
      <h1>
        <a href="/tron">Tron</a>
      </h1>

      <Image
        className={`tron-image ${
          fadeIn ? "tron-image--fade-in" : "tron-image--fade-out"
        }`}
        src={`/tron/${currentImage}`}
        alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
        fill
        sizes="100vw"
      />
    </>
  );
}
