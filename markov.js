// Ioana A Mititean
// Exercise 29.5: Markov Machine

/** Textual Markov Chain generator. */


class MarkovMachine {

    /** Build Markov machine; read in text.*/
    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter(c => c !== "");
        this.makeChains();
  }

    /** Set markov chains:
     *
     *  For text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]}
     *
     */
    makeChains() {

        const chains = {};
        let ind = 0;
        let word;
        let nextWord;

        while (ind < this.words.length) {

            word = this.words[ind];
            nextWord = this.words[ind + 1] || null;

            if (chains[word] === undefined) {
                chains[word] = [];
            }

            // Add next word to list for current word
            chains[word].push(nextWord);
            ind++;
        }

        this.chains = chains;
    }


    /** Return random text from chains. */
    makeText(numWords=100) {

        const result = [];
        let choices = Object.keys(this.chains);
        let randInd;
        let chosen;

        while (result.length < numWords) {

            // Choose a random word
            randInd = Math.floor(Math.random() * choices.length);
            chosen = choices[randInd];

            if (chosen === null) {
                break;
            }

            result.push(chosen);

            // Repeat process for chosen word
            choices = this.chains[chosen];
        }

        return result.join(" ");
    }
}


module.exports = {
    MarkovMachine
};
