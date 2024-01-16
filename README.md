![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/fromant65/21872732f8434b07c34fa3a1a95c530a/raw/coverage-final.json)

# Japanese Songs Lyrics to Anki CSV Converter

This project is a JavaScript script that converts song lyrics in a specific format into a CSV file that can be imported into Anki, a popular flashcard application. The script takes an input.txt file containing the lyrics of a song and generates a CSV file with two fields: "front" and "back".

## Installation

- Clone the repository: git clone https://github.com/fromant65/japanese_songs.git
- Navigate to the project directory: cd song-lyrics-to-anki-csv
- Install the dependencies: npm install

## Usage

- Copy and paste the song lyrics into ChatGPT with the provided prompt
- Place the formatted lyrics in the input.txt file. Make sure the lyrics are formatted according to the provided ChatGPT prompt. (when you clone the project, you'll have to create that file.)
- Run the script: npm start
- The script will generate a output.csv file in the project directory.
- Import the output.csv file into Anki to create flashcards with the song lyrics.

## Disclaimer: Input Texts and Formatting Notice

This project utilizes language models, including ChatGPT and other AI systems, to generate translations and formatted text. It is important to note that the input texts provided from these models may sometimes result in poorly formatted outputs or translations that are incorrect or suboptimal.

One common source of formatting issues arises from English phrases within Japanese lyrics. The script employed here primarily focuses on Japanese lyrics and may encounter challenges when handling English expressions within the text. As a result, users should be aware that the output may not always reflect the desired formatting or convey the exact intended meaning.

Additionally, it's essential to emphasize that this script is specifically designed for Japanese lyrics and may not be suitable for texts in other languages. Users are encouraged to review and refine the generated content as needed to ensure accuracy and appropriateness for their intended purposes.

Please exercise discretion and manual review when using the output from ChatGPT or any other AI language model to guarantee the quality and correctness of the final result.

## Additional Files

- card_css.css: This file contains CSS styles for the Anki flashcards. You can import this file into your Anki card styles to customize the appearance of the flashcards.
- ChatGPT Prompt: The chatgpt_prompt.txt file contains the ChatGPT prompt used to generate the formatted lyrics. You can modify this file to customize the prompt and experiment with different outputs.
- /done_inputs: There's a folder with some examples of correctly formatted lyrics in case you have issues generating your own input.txt
