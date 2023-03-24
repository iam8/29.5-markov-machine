// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Tests for Markov Chain generator. */

const fs = require("fs");
const { MarkovMachine } = require("./markov");


describe("MarkovMachine constructor", function () {

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


