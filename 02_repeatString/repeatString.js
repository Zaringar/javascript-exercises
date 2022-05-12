let Ergebniss = ''
const repeatString = function(Text, wiederholungen) {
    Ergebniss = ''
  if (wiederholungen >= 0) {
    for (let i = 0; i < wiederholungen; i++){
        Ergebniss = Text.concat(Ergebniss);
      }
  } else {
    Ergebniss = 'ERROR';
  }
    return(Ergebniss)
   };
   repeatString('hey',10);
   console.log(Ergebniss)

// Do not edit below this line
module.exports = repeatString;
