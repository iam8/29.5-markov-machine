// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Command-line tool to generate Markov text. */

const axios = require("axios");
const fs = require("fs");
const { MarkovMachine } = require("./markov");


/** Generate and display (to console) Markov text from the given input text. */
function generateMarkovText(text) {

    const mm = new MarkovMachine(text);
    console.log(mm.makeText(500) + ".");
}

/** Fetch and return the data from the given URL (if valid). */
async function getDataFromUrl(url) {

    let data;

    try {
        data = await axios.get(url);
    } catch (err) {
        console.log(`Error fetching ${url}: ${err.cause}`);
        process.exit(1);
    }

    return data;
}


/** Generate and display Markov text from a given file path. */
function makeText(filepath) {

    // Read in the file
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            console.log(`Error reading file ${filepath}: ${err}`);
            process.exit(1);
        }

        generateMarkovText(data);
    })
}


/** Generate and display Markov text from a given URL. */
async function makeUrlText(url) {

    const urlData = await getDataFromUrl(url);
    generateMarkovText(urlData.data);
}


/** Retrieve and interpret command-line inputs. */
async function main() {
    const args = process.argv.slice(2);

    if (args.length === 2) {
        const type = args[0];
        const path = args[1];

        if (type.toLowerCase() === "file") {
            makeText(path);
        }

        if (type.toLowerCase() === "url") {
            await makeUrlText(path);
        }
    }
}

main();
