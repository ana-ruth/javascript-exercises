const repeatString = function(word, repetitions) {
    if(repetitions < 0)
        {
            return "ERROR";
        }

    let repString = "";
    for(let i =0; i<repetitions;i++)
        {
            repString += word;
        }

    return repString;
};

// Do not edit below this line
module.exports = repeatString;
