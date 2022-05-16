const removeFromArray = function(arr, ...args) {
    let a = arr;
    let b = args;
    // Arrow function (nimm a als This in funktion und beinhalte alle werte von der function die ungleich b sind)
    let c = a.filter(d => !b.includes(d));
    return c;
    console.log(c);
  };
// Do not edit below this line
module.exports = removeFromArray;
