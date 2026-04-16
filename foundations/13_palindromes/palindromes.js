const palindromes = function (str) {
newStr=str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();


let i=0;
let j=newStr.length-1;
while(i<=j){
    if(newStr[i]!=newStr[j]){
        return false;
    }
    i++;
    j--;
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
