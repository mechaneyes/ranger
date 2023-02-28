// import fs from "fs";
import Image from "next/image";
import Link from "next/link";

// let tronArray = [];

// const TronImages = () => {
//   // let tronArray = [];

//   fs.readdir("./app/tron-images/", (err, files) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     // console.log("files", files);

//     tronArray = files;
//     // console.log('tronArray', tronArray)
//     return tronArray;
//   });

//   return <img src={`/tron-images/${tronArray[0]}`} />;

//   return tronArray.map((tron) => {
//     // return <p>{tron}</p>
//     return (
//       <img
//         src={`/tron-images/${tron}`}
//         alt="Picture of the author"
//         width={500}
//         height={500}
//       />
//     );
//   });
// };

export default function Page() {
  return (
    <>
      <Link href="/tron">
        <h1>Tron</h1>

        <Image
          className="tron-image"
          src="/tron/tron-stills_055.jpg"
          alt="Still image from the movie Tron. Sorry this isn't more descriptive. The images are setup programatically and I'm not sure how to get a good description to display here."
          fill
          sizes="100vw"
        />
      </Link>
    </>
  );
}
