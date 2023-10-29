const { parseFile } = require("./parser");
const { convertToCsv } = require("./convert_to_csv");
const fs = require("fs");

const parsedText = parseFile("input.txt");
const csvText = convertToCsv(parsedText);
fs.writeFileSync("output.csv", csvText);
