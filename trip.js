function beautifulTriplets(d, arr) {
    var len = arr.length;
    var count = 0;
    for(var i = 0; i < len; i++){
        for(var j = i+1; j < len; j++){
            for(var k = j+1; k < len; k++){
                if(arr[k] - arr[j] == d && arr[j] - arr[i] == d){
                    count++;
                    console.log(i,j,k,'-',arr[i], arr[j], arr [k],"match- count=",count);

                }
            }
        }
    }

}


console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
