const leapYears = function(schaltjahr) {
let rest = (schaltjahr % 4)
let century = (schaltjahr % 100)
let vierhundert = (schaltjahr % 400)
if (vierhundert === 0){
    return true;
}
else if (century === 0){
    return false;
}
else if (rest === 0){
    return true;
}
else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
