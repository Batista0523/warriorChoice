const fs = require("fs");

function readJSONFile(path, fileName) {
  try {
    const collection = fs.readFileSync(`${path}/${fileName}`, "utf-8");
    return collection ? JSON.parse(collection) : [];
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
    return [];
  }
}

function writeJSONFile(path, fileName, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(`${path}/${fileName}`, jsonData, "utf-8");
  } catch (error) {
    console.error(`Error writing JSON file: ${error}`);
  }
}

module.exports = {
  readJSONFile,
  writeJSONFile
};
