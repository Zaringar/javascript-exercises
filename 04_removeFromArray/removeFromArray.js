const removeFromArray = function(Reihe, remover) {
    Reihe.splice(remover - 1, 1);
    return Reihe;
  }
  removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
