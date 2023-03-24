// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Command-line tool to generate Markov text. */

const axios = require("axios");
const fs = require("fs");
const { MarkovMachine } = require("./markov");


async function getDataFromUrl(url) {

    let data;
    // Get text data from the given URL (Axios)
    try {
        data = await axios.get(url);
    } catch (err) {
        console.log(`Error fetching ${url}: ${err.cause}`);
        process.exit(1);
    }

    return data;
}


async function main() {
    const args = process.argv.slice(2);

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

                // Pass file data to markov to generate text
                const mm = new MarkovMachine(data);
                console.log(mm.makeText(300));
            })
        }

        if (type.toLowerCase() === "url") {

            const urlData = await getDataFromUrl(path);

            // Pass URL data to markov to generate text
            const mm = new MarkovMachine(urlData.data);
            console.log(mm.makeText(300));
        }
    }

}

main();
