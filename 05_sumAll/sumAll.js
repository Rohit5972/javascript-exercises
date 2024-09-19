const sumAll = function(integer1,integer2) {
    let start=Math.min(integer1,integer2);  
    let end=Math.max(integer1,integer2);
    let sum=0;

    for(let i=start;i<=end;i++){
        sum+=i;
    }

    return sum; 

};
console.log(sumAll)

// Do not edit below this line
module.exports = sumAll;
