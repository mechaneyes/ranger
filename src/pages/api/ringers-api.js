import fs from "fs";

export default function handler(req, res) {
  let rangerArray = [];
  
  fs.readdir("public/ringers", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.map((file) => {
      rangerArray.push({ file });
    });

    res.status(200).json({ rangerArray: rangerArray });
  });
}

// export default TronImages;
