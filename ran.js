function ran(max) {
    count =0;
    var arr = [];
    var x;
    for(var i = 0 ; i< max;i++){

        x = Math.floor(Math.random() * Math.floor(max));
        // console.log(x);
        if ( arr.length === 0){
            arr.push(x);
        }
        else{
            for(var j=0; j< max; j++){
                // console.log(x);
                
                if(x === arr[j]){
                    
                    x = Math.floor(Math.random() * Math.floor(max));

                }
                // console.log(x);
                
                arr.push(x);
            }
        }


      

    }
        
    console.log(arr);
       
    
}


function checkArray(arr, x) {
    for(var i in arr){
        if(x === arr[i]){
            x = Math.floor(Math.random() * Math.floor(10));
            checkArray(arr, x);
        }
        else{
            arr.push(x);
        }   
   }
  console.log(arr);
    
}



arr = ['Rahul', 'Ghanshayam', 'Prakash']
// console.log(ran(10));

console.log( checkArray([12,13], 12));

