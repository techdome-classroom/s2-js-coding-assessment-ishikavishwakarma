/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNum={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let totalSum = 0;
    for(let i =0;i<s.length;i++){
        let currentValue = romanNum[s[i]];
        let nextValue = romanNum[s[i+1]];
        if(nextValue && currentValue<nextValue){
            totalSum-=currentValue
        }else{
            totalSum+=currentValue;
        }
    }
    return totalSum;
};


module.exports={romanToInt}
console.log(romanToInt("III"))
console.log(romanToInt("XL"))