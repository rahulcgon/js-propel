function acmTeam(topic) {
    var arr = [];
    for(var i = 0; i < topic.length ;i++){
        for(var j = i+1; j< topic.length;j++){
            x = countOne(topic[i], topic[j]);
            arr.push(x);
        }
    }
    max = Math.max(...arr);
    console.log(max);
    var c = 0
    for(var i in arr){
        if(max == arr[i]){
            c++;
        }
    }
    console.log(c);
    

    // console.log(arr);
    
}
function countOne(f, s) {
    let count = 0;
    for(var i in f) {
        if(f[i] == '1' || s[i] == '1'){
            count++;
        }
    }
    return count;
}


array = ['10101', '11100', '11010', '00101' ]
console.log(acmTeam(array));

