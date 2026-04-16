const fibonacci = function(n) {
    let a=1;
    let b=1;
    let i=1;
    if(n<0){
        return "OOPS";
    }
    else if(n==0){
        return 0;
    }
    else{
    while(i<=n-2){
        let next=a+b;
        a=b;
        b=next;
        i++;
    }
    return b;}
};

// Do not edit below this line
module.exports = fibonacci;
