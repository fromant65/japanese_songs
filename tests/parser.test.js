const {parseFile} = require("../parser");

describe("parseFile", ()=>{
    it("should throw if the file doesn't exists.", ()=>{
        expect(()=>parseFile("fakename.txt")).toThrow("The file fakename.txt does not exist.");  
    })
    it("should throw if the file is not formatted correctly.",()=>{
        expect(()=>parseFile("tests/parserBadInput.txt")).toThrow();
    })
    it("should format each phrase to an array of valid lines",()=>{
        const expectedCards= [
            {
              sentence: '小さな泡きらり',
              translation: 'Small bubbles twinkle',
              reading: 'ちいさなあわきらり',
              grammar: '小さな (<span class="adjective - small">adjective - small</span>), 泡 (<span class="noun - bubbles">noun - bubbles</span>), きらり (<span class="adverb - twinkle">adverb - twinkle</span>)',
              formattedSentence: '<span class="adjective - small">小さな</span> <span class="noun - bubbles">泡</span> <span class="adverb - twinkle">きらり</span>'
            },
            {
              sentence: 'Hello',
              translation: 'Hola',
              reading: 'je-lou',
              grammar: 'Hello (<span class="expresion - hola">expresion - hola</span>)',
              formattedSentence: '<span class="expresion - hola">Hello</span>'
            },
            {
              sentence: 'How are you?',
              translation: 'Cómo estás?',
              reading: 'jau ar iu',
              grammar: 'How (<span class="pregunta - cómo">pregunta - cómo</span>), are (<span class="verbo - estás">verbo - estás</span>), you (<span class="pronombre - tú">pronombre - tú</span>)',
              formattedSentence: '<span class="pregunta - cómo">How</span> <span class="verbo - estás">are</span> <span class="pronombre - tú">you</span>'
            }
          ]
        expect(parseFile("tests/parserGoodInput.txt")).toEqual(expectedCards)
    })
})