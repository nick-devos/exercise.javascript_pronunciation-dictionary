class Word {
    constructor(wordString){
        this.wordString = wordString.toUpperCase();
    
    }
    getPronunciation() {
        //returns a list of strings representative of the Phonemes of this word. Indices of the respective list should be indicative of their order of annunciation
        for(let x = 0; x < words.length; x++) {
            if(this.wordString == words[x]) {
                return phonemes[x];
            }
        }
    }
    getSimilarWords() {
        //return a list of all similar sounding-words
    }
    getIdentical() {
        //return a list of phonetically identical words
        
    }
    getSimilarWordsWithSubPhonemes() {
        //return a list of words which contain sub-Phonemes
    }
    getSimilarWordsWithPhonemes() {
        //return a list of near-phonetically-identical words with additional Phonemes added
    }
    getSpelling() {
        //returns the string value input upon construction
        return this.wordString;
    }
    toString() {
        //return a neatly-formatted report of similar-sounding words
        console.log("Word entered --> " + this.getSpelling());
        console.log("Phonemes --> " + this.getPronunciation());
    }
}

var lines = [];
var words = [];
var phonemes = [];

function getSingleFileAsText(evt) {
    //Retrieve the first (and only!) File from the FileList object
    let file = evt.target.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function(event) {
            let contents = event.target.result;
            setVariables(contents);
        }
        myWord = new Word(prompt("Enter a word"));
        myWord.toString();
        return fileReader.readAsText(file);
    }
}

function setVariables(contents) {
    lines = contents.split('\n');
    for(let x = 54; x < lines.length; x++) {
        splitLine = lines[x].split("  ");
        words.push(splitLine[0]);
        phonemes.push(splitLine[1].split(" "));
    }
}

// function getWords(s) {
//     let result = "";
//     let i = 0;
//     while (i < s.length) {
//         result += s[i];
//         i++;
//     }
//     return result;
// }

let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getSingleFileAsText, false);