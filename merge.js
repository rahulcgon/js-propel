//function for mergeSort
function mergeSort(arr){
    len=arr.length;
    if(len <= 1){
        return arr;
    }
    
    const mid = Math.ceil(len/2)
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // console.log("Initiated-- ")
    console.log(left,right)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let resultArr = [], leftIndex = 0, rightIndex = 0;
    // console.log("Merging--")
    console.log(left,right)
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArr.push(left[leftIndex]);
            leftIndex++;
        }
        else{
             resultArr.push(right[rightIndex]);
             rightIndex++;
        }
    }
    
    return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


let arr= [62,95,36,29,35,48];

console.log("Complexity of Merge Sort Average Case: O(n.log(n))")

console.log("Before: "+arr+"\n");

sortedArray= mergeSort(arr);

console.log("\nAfter:  "+sortedArray);