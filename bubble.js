function swap(arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubbleSort(arr){
    let len=arr.length;
    for(var i=0; i<len ; i++){
        for(var j=0; j<len-i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j, j+1);
            }
        }
    }
    return arr;
}

let arr= [62,95,36,29,35,48];

console.log("Before: "+arr);

sortedArray= bubbleSort(arr);

console.log("After:  "+sortedArray);