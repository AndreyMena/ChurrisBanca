const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (logItem, logName) => {
  try {
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

const logPost = async ({ id, nickname, content, dateTime }, logName) => {
  const currentDateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${currentDateTime}\t${uuid()}\tID: ${id}\tNickname: ${nickname}\tContent: ${content}\tDateTime: ${dateTime}\n`;

  logEvents(logItem, logName);
};

module.exports = logPost;
