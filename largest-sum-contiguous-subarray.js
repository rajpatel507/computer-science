function maxSubArray(array){
   var len = array.length;
   var highMax = 0, tempMax = 0;

   for(var i = 0; i<len; i++){
        tempMax = tempMax + array[i];
        if(tempMax> highMax){
            highMax = tempMax;
        }

        if(tempMax<0){
            tempMax = 0;
        }
   }

   return highMax;
   
}

function main(){
    var array =[-3,5,2,-9,6,-1,25,13,-15];
    console.log(array);
    var maxValue = maxSubArray(array);

    console.log(maxValue);
}

main();
