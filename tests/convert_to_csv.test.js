const { convertToCsv } = require("../convert_to_csv");

describe("convertToCsv", () => {
  it("should throw an error if cards parameter is not an array", () => {
    expect(() => convertToCsv()).toThrow(
      "The cards parameter must be an array."
    );
  });

  it("should throw an error if there's a card badly formatted", ()=>{
    expect(()=> convertToCsv([{sentence:"HELLO"}])).toThrow(
        "The card is not formatted correctly."
    );
  })

  it("should convert an array of cards to CSV format", () => {
    const cards = [
      {
        sentence: "小さな泡きらり",
        translation: "Small bubbles twinkle",
        reading: "ちいさなあわきらり",
        grammar:
          "小さな (adjective) - small, 泡 (noun) - bubbles, きらり (adverb) - twinkle",
        formattedSentence: `<span class="adjective - small">小さな</span> <span class="noun - bubbles">泡</span> <span class="adverb - twinkle">きらり</span>`,
      },
      {
        sentence: "Hello",
        translation: "Hola",
        reading: "je-lou",
        grammar: "Hello (expresion) - hola",
        formattedSentence: `<span class="expresion - hola">Hello</span>`,
      },
      {
        sentence: "How are you?",
        translation: "¿Cómo estás?",
        reading: "jau ar iu",
        grammar:
          "How (pregunta) - cómo, are (verbo) - estás, you (pronombre) - tú",
        formattedSentence: `<span class="pregunta - cómo">How</span> <span class="verbo - estás">are</span> <span class="pronombre - tú">you</span>`,
      },
    ];
    const expectedCSV = `"front","back"\n"小さな泡きらり","Small bubbles twinkle<br>ちいさなあわきらり<br>小さな (adjective) - small, 泡 (noun) - bubbles, きらり (adverb) - twinkle<br><span class=""adjective - small"">小さな</span> <span class=""noun - bubbles"">泡</span> <span class=""adverb - twinkle"">きらり</span>"\n"Hello","Hola<br>je-lou<br>Hello (expresion) - hola<br><span class=""expresion - hola"">Hello</span>"\n"How are you?","¿Cómo estás?<br>jau ar iu<br>How (pregunta) - cómo, are (verbo) - estás, you (pronombre) - tú<br><span class=""pregunta - cómo"">How</span> <span class=""verbo - estás"">are</span> <span class=""pronombre - tú"">you</span>"`;

    expect(convertToCsv(cards)).toEqual(expectedCSV);
  });
});