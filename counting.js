function countingValleys(n, s) {
    let obj = {};
    for(var i in s){
       
        if(obj[s[i]]){
            obj[s[i]]++;
        }
        else{
            obj[s[i]] = 1;
        }
    }
    return Math.abs(obj['U'] - obj['D'])+1
    // return obj;
}


console.log(countingValleys(8,'UDDDUDUU'));

