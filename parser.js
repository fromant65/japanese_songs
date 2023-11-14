const fs = require("fs");

/**
 * Parses a line and updates the card object accordingly.
 * @param {string} line - The line to parse.
 * @param {Object} card - The card object to update.
 * @returns {Object} The updated card object.
 */
function parseLine(line, card) {
  try {
    if (line.startsWith("Sentence: ")) {
      card.sentence = line.substring(10);
    } else if (line.startsWith("Translation: ")) {
      card.translation = line.substring(13);
    } else if (line.startsWith("Reading: ")) {
      card.reading = line.substring(9);
    } else if (line.startsWith("Grammar: ")) {
      card.grammar = line.substring(9);
      let grammarEntries = card.grammar.split(", ");
      let formattedSentence = "";
      let formattedGrammar = "";
      for (let entry of grammarEntries) {
        let [word, type] = entry.split(" (");
        type = type.replace(")", "");
        formattedSentence += `<span class="${type}">${word}</span> `;
        formattedGrammar += `${word} (<span class="${type}">${type}</span>), `;
      }
      card.formattedSentence = formattedSentence.trim();
      card.grammar = formattedGrammar.slice(0, -2);
    }
  } catch (e) {
    throw new Error(`There was an error in line \n${line}\n${e.message}`);
  }

  return card;
}

/**
 * Parses a file and extracts information to create an array of cards.
 * @param {string} filename - The name of the file to parse.
 * @returns {Array} An array of cards containing the extracted information.
 * @throws {Error} If the file does not exist or cannot be read.
 */
function parseFile(filename) {
  if (!fs.existsSync(filename)) {
    throw new Error(`The file ${filename} does not exist.`);
  }

  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const cards = [];
  let card = {};

  for (let line of lines) {
    if (line.startsWith("Sentence: ") && card.sentence) {
      cards.push(card);
      card = {};
    }
    card = parseLine(line, card);
  }

  if (card.sentence) {
    cards.push(card);
  }

  return cards;
}

module.exports = { parseFile };
