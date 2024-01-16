const { Parser } = require("json2csv");

/**
 * Creates the 'back' value for a card.
 * @param {Object} card - The card object.
 * @returns {string} The 'back' value for the card.
 * @throws {Error} If the card parameter has not the specified fields.
 */
function createBackValue(card) {
  
    const { sentence, translation, reading, grammar, formattedSentence } = card;
    if(!sentence, !translation, !reading,! grammar, !formattedSentence){
      throw new Error("The card is not formatted correctly.");
    }
    return `${translation}<br>${reading}<br>${grammar}<br>${formattedSentence}`;
  
}

/**
 * Converts an array of cards to CSV format.
 * @param {Array} cards - The array of cards to convert.
 * @returns {string} The cards converted to CSV format.
 * @throws {Error} If the cards parameter is not an array.
 */
function convertToCsv(cards) {
  if (!Array.isArray(cards)) {
    throw new Error("The cards parameter must be an array.");
  }
  try{
    const fields = [
      { label: "front", value: "sentence" },
      { label: "back", value: createBackValue },
    ];

  const parser = new Parser({ fields });

  return parser.parse(cards);
  }catch(err){
    throw err;
  }
}

module.exports = { convertToCsv };
