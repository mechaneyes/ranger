import fs from "fs";

let tronArray = [];

export default function handler(req, res) {
  fs.readdir("public/tron", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.map((file) => {
      tronArray.push({ file });
    });

    res.status(200).json({ tronArray: tronArray });
  });

  
};

// export default TronImages;