const fibonacci = function(Zahl) {
    if (Zahl < 0)
       return "OOPS";
       if (Zahl === 0)
       return 0;
   
       let a = 0
       let b = 1
   
       for (let i = 1; i < Zahl; i++){
       let temp = b
       
       b = a + b
       a = temp
     }
     return b
   };

// Do not edit below this line
module.exports = fibonacci;
