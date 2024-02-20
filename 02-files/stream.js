const fs = require("fs");

const rs = fs.createReadStream("./lorem.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./lorem2.txt");

/* rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
}); */

rs.pipe(ws);
