// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require("./markov");


const args = process.argv.slice(2);
const mm = new MarkovMachine("Some random text is here");