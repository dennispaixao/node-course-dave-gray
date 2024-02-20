const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "dd/MM/yyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsp.mkdir(path.join(__dirname, "logs"));
    }
    await fsp.appendFile(path.join(__dirname, "logs", "eventLog.txt"), logItem);
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;

console.log(uuid());
