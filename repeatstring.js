function repeatedString(s, n) {
    //getting all 'a'
    var valueOfA = s.split("").filter( elem => elem == 'a').length;
    //console.log(s);
    
        
    var repeatTimes = Math.floor(n / s.length);
    var repeatMod = n % s.length;
    //console.log(repeatMod);

    var valueMod = s.slice(0,repeatMod).split("").filter( elem => elem == 'a').length;
    
    var repeatOfA = (repeatTimes * valueOfA) + valueMod ;
    return repeatOfA;
}

let str = 'aba';
console.log(repeatedString(str,10));
