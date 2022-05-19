const palindromes = function (str) {
let punctuation = str.replace(/\W+/g,"").toLowerCase();
    punctuation = punctuation.toLowerCase();
let newstr = punctuation.split("").reverse().join("");
if (newstr === punctuation){
    return true;
    console.log(`true ${newstr}`)
}
else {
    return false;
    console.log(`false ${newstr}`)
}
};

// Do not edit below this line
module.exports = palindromes;
