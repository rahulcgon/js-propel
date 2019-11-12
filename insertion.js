function insertionSort(arr){
  len=arr.length;
  for(let i=0; i<len; i++){
    key = arr[i];
    j = i-1;
    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = key;
  }
  return arr;
}

let arr= [62,95,36,29,35,48];
console.log("Complexity of insertionSort: O(n^2)")
console.log("Before: "+arr);

sortedArray= insertionSort(arr);

console.log("After:  "+sortedArray);