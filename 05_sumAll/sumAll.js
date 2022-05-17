Summe = 0
    const sumAll = function(a, b) {
        Summe = 0
        if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
      } else if (a < b) {
    while (b + 1 != a) {
        Summe = Summe + a
        a++;
      }} else if (a > b) {
        while (a + 1 != b) {
            Summe = Summe +  b
            b++;
          }
      }
      return Summe;
    }

// Do not edit below this line
module.exports = sumAll;
