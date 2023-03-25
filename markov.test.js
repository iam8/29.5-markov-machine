// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Tests for Markov Chain generator. */

const { MarkovMachine } = require("./markov");


describe("Tests for MarkovMachine constructor.", function () {

    test("For an empty input text, resulting words list should be empty.", function () {
        const mm = new MarkovMachine("");
        expect(mm.words).toEqual([]);
    })

    test("For a nonempty input text, resulting words list should contain the appropriate words.",
    function () {
        const mm = new MarkovMachine("Here is some sample text text");
        expect(mm.words).toEqual(["Here", "is", "some", "sample", "text", "text"]);
    })

    test("Upon initialization, a new MarkovMachine should have a chains property defined",
    function () {
        const mm = new MarkovMachine("Sample text");
        expect(mm.chains).toBeDefined();
    })
})


describe("Tests for makeChains() instance method of MarkovMachine.", function () {

    test("For an empty input text, makeChains() should set the chains property to an empty " +
         "object.",
    function () {
        const mm = new MarkovMachine("");
        expect(mm.chains).toEqual({});
    })

    test("For input text without repeated words, makeChains() should set the chains property " +
         "to an object with the appropriate entries.",
    function () {
        const mm = new MarkovMachine("Some sample text");

        const expected = {
            "Some": ["sample"],
            "sample": ["text"],
            "text": [null]
        }

        expect(mm.chains).toEqual(expected);
    })

    test("For input text with repeated words, makeChains() should set the chains property " +
        "to an object with the appropriate entries.",
    function () {
        const mm = new MarkovMachine("Some Some sample text text");

        const expected = {
            "Some": ["Some", "sample"],
            "sample": ["text"],
            "text": ["text", null]
        }

        expect(mm.chains).toEqual(expected);
    })
})


describe("Tests for makeText() instance method of MarkovMachine.", function () {

    const mmEmpty = new MarkovMachine("");
    const mm = new MarkovMachine("the cat in the hat is in the hat");

    test("makeText() should return an empty string if an empty input text is used.",
    function () {
        expect(mmEmpty.makeText()).toEqual("");
    })

    test("makeText() should return text with the number of words less than or equal to the " +
    "given numWords argument.",
    function () {

        for (let i = 0; i < 5; i++) {
            const result1 = mm.makeText(100).split(/[ \r\n]+/);
            expect(result1.length).toBeLessThanOrEqual(100);

            const result2 = mm.makeText(2).split(/[ \r\n]+/);
            expect(result2.length).toBeLessThanOrEqual(2);
        }
    })

    test("makeText() should return text that contains only words from the input text.",
    function () {

        const result = mm.makeText().split(/[ \r\n]+/);

        for (let word of result) {
            expect(mm.words).toContain(word);
        }
    })

    test("The final word in the text returned by makeText() should be the same as the final " +
    "word in the original input text.",
    function () {

        for (let i = 0; i < 5; i++) {
            const result = mm.makeText().split(/[ \r\n]+/);
            expect(result.at(-1)).toEqual(mm.words.at(-1));
        }
    })

    test("For each word in the text returned by makeText(), the following word should be a " +
    "valid following word as determined by the chains map.",
    function () {

        const result = mm.makeText().split(/[ \r\n]+/);

        for (let i = 0; i < result.length - 1; i++) {
            const word = result[i];
            const following = result[i + 1];

            expect(mm.chains[word]).toContain(following);
        }
    })
})
