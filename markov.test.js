// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Tests for Markov Chain generator. */

const fs = require("fs");
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