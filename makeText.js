// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Command-line tool to generate Markov text. */

const axios = require("axios");
const fs = require("fs");

const { MarkovMachine } = require("./markov");


const args = process.argv.slice(2);
// const mm = new MarkovMachine("Some random text is here");

if (args.length === 2) {
    const type = args[0];
    const path = args[1];

    if (type.toLowerCase() === "file") {

        // Read in the file
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                console.log(`Error reading file ${path}: ${err}`);
                process.exit(1);
            }

            console.log(data);
        })

        // Pass file data to markov to generate text

        // Log the markov text to console

    }

    if (type.toLowerCase() === "url") {

        // Get text data from the given URL (Axios)

        // Pass data to markov to generate text

        // Log the markov text to console

    }
}
