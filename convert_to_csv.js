const { Parser } = require("json2csv");

/**
 * Converts an array of cards to CSV format.
 * @param {Array} cards - The array of cards to convert.
 * @returns {string} The cards converted to CSV format.
 */
function convertToCsv(cards) {
  // Define the fields for the CSV
  const fields = [
    { label: "front", value: "sentence" },
    {
      label: "back",
      value: (row) => {
        // Extract the necessary fields from the row object
        const { sentence, translation, reading, grammar, formattedSentence } =
          row;

        // Concatenate the fields with line breaks to create the "back" value
        return `${translation}<br>${reading}<br>${grammar}<br>${formattedSentence}`;
      },
    },
  ];

  // Create a new instance of the Parser with the defined fields
  const parser = new Parser({ fields });

  // Parse the cards array into CSV format
  const csv = parser.parse(cards);

  // Return the CSV string
  return csv;
}

module.exports = { convertToCsv };
