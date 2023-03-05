import fs from "fs";

export default function handler(req, res) {
  let drArray = [];
  
  fs.readdir("public/dr", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.map((file) => {
      drArray.push({ file });
    });

    res.status(200).json({ drArray: drArray });
  });
}

// export default TronImages;
