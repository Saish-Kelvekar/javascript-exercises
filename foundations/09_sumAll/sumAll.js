const sumAll = function(start,end) {
if(start>end){
    const temp=start;
    start=end;
    end=temp;
}
let total=0;
while(start<=end){
    total+=start;
    start++;
}return total;
};

// Do not edit below this line
module.exports = sumAll;
