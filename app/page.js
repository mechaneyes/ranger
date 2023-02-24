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

    tronArray = files
    // console.log('tronArray', tronArray)
    return tronArray

    // files.map((file) => {
    //   let tronUrl = `tron-images/${file}`;
    //   // console.log("tronUrl", tronUrl);
    //   tronArray.push({ tronUrl });
    // });
  });

  return <img src={`/tron-images/${tronArray[0]}`} />
  return console.log("tronArray outside", tronArray[0]);

  return tronArray.map((tron) => {
    // return <p>{tron}</p>
    return <img src={`/tron-images/${tron}`} alt="Picture of the author" width={500} height={500} />;
  });
};

export default function Page() {
  // let tronArray = [];

  // function mapTron(files) {
  //   console.log("tronArray", tronArray[0]);
  // };

  // const getTron = () => {
  //   fs.readdir("./app/tron-images/", (err, files) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }

  //     files.map((file) => {
  //       let tronUrl = `tron-images/${file}`;
  //       // console.log("tronUrl", tronUrl);
  //       tronArray.push({ tronUrl });
  //     });

  //     mapTron(files);
  //   });
  // };

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>hello</p>

      {/* {setTimeout(() => {
        console.log("tronArray", tronArray);
      }, 1000)} */}

      <TronImages />

      {/* <Image
        src={tronArray[0]}
        alt="Picture of the author"
        width={500}
      /> */}
    </>
  );
}
