function superReducedString(s) {

    var str = [];
    for(var i = 0; i < s.length; i++){
        
        console.log("i",i,s[i]);
        
        if(s[i] == s[i+1]){
            // console.log("equals",i,s[i]);
            i = i+1;
        }
        else{
            // i++;
            console.log("not",i,s[i]);
            str.push(s[i])
        }
        
        

    }
    console.log(str.join(""));
    

}


console.log(superReducedString('aaabccddd'));
