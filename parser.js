const fs = require("fs");

/**
 * Parses a file and extracts information to create an array of cards.
 * @param {string} filename - The name of the file to parse.
 * @returns {Array} An array of cards containing the extracted information.
 */
function parseFile(filename) {
  // Read the file synchronously
  const data = fs.readFileSync(filename, "utf8");

  // Split the data into lines
  const lines = data.split("\n");

  // Initialize an empty array to store the cards
  const cards = [];

  // Initialize an empty object to store the current card
  let card = {};

  // Iterate over each line in the file
  for (let line of lines) {
    if (line.startsWith("Sentence: ")) {
      // If the line starts with "Sentence: ", create a new card object
      // and set the sentence field
      if (card.sentence) {
        // If there is already a sentence in the current card object,
        // push the card to the array and create a new card object
        cards.push(card);
        card = {};
      }
      card.sentence = line.substring(10);
    } else if (line.startsWith("Translation: ")) {
      // If the line starts with "Translation: ", set the translation field
      card.translation = line.substring(13);
    } else if (line.startsWith("Reading: ")) {
      // If the line starts with "Reading: ", set the reading field
      card.reading = line.substring(9);
    } else if (line.startsWith("Grammar: ")) {
      // If the line starts with "Grammar: ", set the grammar field
      card.grammar = line.substring(9);

      // Split the grammar entries by comma and space
      let grammarEntries = card.grammar.split(", ");

      // Initialize variables to store the formatted sentence and grammar
      let formattedSentence = "";
      let formattedGrammar = "";

      // Iterate over each grammar entry
      for (let entry of grammarEntries) {
        // Split the entry into word and type
        let [word, type] = entry.split(" (");

        // Remove the closing parenthesis from the type
        type = type.replace(")", "");

        // Add the word with a span of the corresponding type to the formatted sentence
        formattedSentence += `<span class="${type}">${word}</span> `;

        // Add the word, type, and corresponding span to the formatted grammar
        formattedGrammar += `${word} (<span class="${type}">${type}</span>), `;
      }

      // Trim the formatted sentence and remove the trailing comma from the formatted grammar
      card.formattedSentence = formattedSentence.trim();
      card.grammar = formattedGrammar.slice(0, -2);
    }
  }

  // Push the last card to the array
  if (card.sentence) {
    cards.push(card);
  }

  // Return the array of cards
  return cards;
}

module.exports = { parseFile };
