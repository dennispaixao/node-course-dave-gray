const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

/* fs.readFile("./start.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
}); */

/* fs.readFile(path.join(__dirname, "start.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); */
//USING CALLBACKS (CALLBACK HELL)
/* fs.writeFile(
  path.join(__dirname, "teste-write.txt"),
  "this is a test of writing files",
  (err) => {
    if (err) throw err;
    console.log("write file complete");

    fs.appendFile(
      path.join(__dirname, "teste-write.txt"),
      "this is a test of append files \n",
      (err) => {
        if (err) throw err;
        console.log("append file complete");

        fs.rename(
          path.join(__dirname, "teste-write.txt"),
          path.join(__dirname, "teste-write2.txt"),
          (err) => {
            if (err) throw err;
            console.log("rename file complete");
          }
        );
      }
    );
  }
); */

//USING PROMISSES

const fileOps = async () => {
  try {
    await fsp.writeFile(path.join(__dirname, "start.txt"), "\ninitial...");
    const data = await fsp.readFile(path.join(__dirname, "start.txt"), "utf8");
    console.log(data);
    await fsp.appendFile(path.join(__dirname, "start.txt"), "\nappending...");
    await fsp.rename(
      path.join(__dirname, "start.txt"),
      path.join(__dirname, "final.txt")
    );
    const data2 = await fsp.readFile(path.join(__dirname, "final.txt"), "utf8");
    console.log(data2);
    await fsp.unlink(path.join(__dirname, "teste-write2.txt"));
  } catch (err) {
    console.error(err);
  }
};

fileOps();

process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});
