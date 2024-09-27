/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    const mapping = {
        ')':'(',
        '}':'{',
        ']':'[',
    }
    for(let i =0;i<s.length;i++){
        let char=s[i];
        if (char in mapping) {
            let topElem=arr.length ? arr.pop():'#';
            if(topElem!==mapping[char]){
                return false;
            }
        }else{
            arr.push(char)
        }
    }
    return arr.length===0;
};

module.exports = { isValid };
console.log(isValid("()"))
console.log(isValid("("))


