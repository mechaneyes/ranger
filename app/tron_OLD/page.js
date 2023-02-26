import fs from "fs";
import Image from "next/image";

// import "./tron.scss";

let tronArray = [];
let currentImageIndex = 0;
let currentImage

const TronImages = () => {
  fs.readdir("public/tron", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.map((file) => {
      tronArray.push({ file });
    });

    // console.log('tronArray', tronArray[0].file)
    return tronArray;
  });

  // return tronArray;

  // function that every 2 seconds an image url is pulled from the array and displayed. after 2 seconds, that image is faded out and a new image is faded in. the array is looped through until the end is reached, then the array is looped through again.
  const changeImage = () => {
    let imgToFade = document.getElementsByClassName("tron-image")
    imgToFade.classList.add("fade-out")

    currentImage = tronArray[currentImageIndex].file;
    currentImageIndex++;
  }

  return (
    <>
      {tronArray.map((tron, indxex) => {
        // console.log("tron", tron);
        return (
          <div key={tron.file} className="img-container">
            <Image
              className="tron-image"
              src={`/tron/${tron.file}`}
              alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
              fill
              sizes="100vw"
            />
          </div>
        );
      })}
    </>
  );
};

export default TronImages;

// export default function Page() {
//   return <TronImages />;
// }
