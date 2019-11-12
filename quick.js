//pivot as last index
function quickSort(arr){
    len = arr.length;
    if(len <= 1){
        return arr;
    }
    let pivot=arr[len-1];
    let left = [], right = [];
    
    for(let i = 0; i < len-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}


let arr= [62,95,36,29,35,48];

console.log("Complexity of Quick Sort Average Case: O(n.log(n))")

console.log("Before: "+arr+"\n");

sortedArray= quickSort(arr);

console.log("After:  "+sortedArray);