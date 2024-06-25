const reverseString = function(givenString) {
    let reversed = "";
    for(let i=givenString.length-1;i>=0;i--)
        {
            reversed+= givenString[i];
        }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
