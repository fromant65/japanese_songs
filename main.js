const { parseFile } = require("./parser");
const { convertToCsv } = require("./convert_to_csv");
const fs = require("fs");

try {
  // Parse the input file
  const parsedText = parseFile("input.txt");

  // Convert the parsed text to CSV
  const csvText = convertToCsv(parsedText);

  // Write the CSV text to the output file
  fs.writeFileSync("output.csv", csvText);

  console.log("Conversion completed successfully!");
} catch (error) {
  console.error("An error occurred during the conversion:", error);
}
