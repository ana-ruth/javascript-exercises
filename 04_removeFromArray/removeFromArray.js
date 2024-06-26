const removeFromArray = function(givenArray,removeElement,secondE) {
   
    let array = [];
    for (let i=0;i<givenArray.length;i++)
    {
        if(givenArray[i] == removeElement || givenArray[i] == secondE)
            {
                continue;
            }
        array.push(givenArray[i])
    }
    return array;
    

};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
