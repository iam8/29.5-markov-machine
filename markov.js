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
        // TODO
    }


    /** Return random text from chains. */
    makeText(numWords=100) {
        // TODO
    }
}
