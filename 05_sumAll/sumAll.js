const sumAll = function(num1, num2) {
    
    if(!Number.isSafeInteger(num1) || !Number.isSafeInteger(num2))
    {
        return 'ERROR';
    }


    if(num1<0 || num2<0)
        {
            return "ERROR";
        }

    let num_1;
    let num_2;
    if(num1>num2)
    {
        num_1 = num2;
        num_2 = num1;
    }
    else{
        num_1=num1;
        num_2=num2;
    }

    let sum = 0;
    for(let i=0;i<=num_2;i++)
        {
            sum+=i;
        }

        return sum;


};

// Do not edit below this line
module.exports = sumAll;
