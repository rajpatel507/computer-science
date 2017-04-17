function quickSort(array,l,h) {
   if(l<h){
       var p = partition(array,l,h);
       quickSort(array,l,p-1);
       quickSort(array,p+1,h);
   }
} 

function partition(array,l,h){
    var pivote = array[h];
    var i = l-1;
    for(var j =l;j<h;j++){
        if(array[j]<= pivote){
            i++
            swap(array,i,j);
        }
    }
    swap(array,i+1,h);
    return i+1;
}

var swap = function(array, x, y) {
  var tmp = array[y];
  array[y] = array[x];
  array[x] = tmp;
};



function main(){
    var array =[3,5,2,9,6,1,25,13,15];
    console.log(array);
    quickSort(array,0,array.length-1);
    console.log(array);
}

main();