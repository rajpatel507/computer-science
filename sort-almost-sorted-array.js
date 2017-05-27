function sortInOneSwap(arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            var j = i+1;
            while(j>arr.length && arr[i]>arr[j+1])
            {
                j++;
            }
            var temp = arr[i];
            arr[i] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

function main(){
    var arr = [10,20,30,60,50,40,70];
    console.log(arr);
    sortInOneSwap(arr);
    console.log(arr)
}

main();