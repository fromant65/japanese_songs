# Song Lyrics to Anki CSV Converter

This project is a JavaScript script that converts song lyrics in a specific format into a CSV file that can be imported into Anki, a popular flashcard application. The script takes an input.txt file containing the lyrics of a song and generates a CSV file with two fields: "front" and "back".

## Installation

- Clone the repository: git clone https://github.com/your-username/song-lyrics-to-anki-csv.git
- Navigate to the project directory: cd song-lyrics-to-anki-csv
- Install the dependencies: npm install

## Usage

- Copy and paste the song lyrics into ChatGPT with the provided prompt
- Place the formatted lyrics in the input.txt file. Make sure the lyrics are formatted according to the provided ChatGPT prompt.
- Run the script: npm start
- The script will generate a output.csv file in the project directory.
- Import the output.csv file into Anki to create flashcards with the song lyrics.

## Additional Files

- card_css.css: This file contains CSS styles for the Anki flashcards. You can import this file into your Anki card styles to customize the appearance of the flashcards.
- ChatGPT Prompt: The chatgpt_prompt.txt file contains the ChatGPT prompt used to generate the formatted lyrics. You can modify this file to customize the prompt and experiment with different outputs.
- /done_inputs: There's a folder with some examples of correctly formatted lyrics in case you have issues generating your own input.txt
