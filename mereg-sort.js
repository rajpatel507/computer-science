function mergeSort(array){
    if (array.length < 2) return array;
    
    var m = array.length >> 1 // bitwise operator >> can use to devide value with 2^N order
    // var m = Math.floor(array.length /2)
    var left = mergeSort(array.slice(0,m));
    var right = mergeSort(array.slice(m));
    return merge(left,right);

    // if(l<r && l==r){
    //     var m = Math.floor((r-l)/2)+l;
    //     mergeSort(array,l,m);
    //     mergeSort(array,m+1,r);
    //     merge(array,l,m,r);
    // } 
}

function merge(l,r){
    var result = [];
 
    while (l.length && r.length) {
        if (l[0] <= r[0]) {
            result.push(l.shift());
        } else {
            result.push(r.shift());
        }
    }
 
    while (l.length)
        result.push(l.shift());
 
    while (r.length)
        result.push(r.shift());
 
    return result;
}

function main(){
    var array =[3,5,2,9,6,1,25,13,15];
    console.log(array);
    console.log(mergeSort(array));
}

main();

//function merge(array,l,m,r){
//     var i=0,j=0,k=l;
//     var l1 = m-l+1;
//     var l2 = r-m;

//     var a1 = array.slice(l,m);
//     var a2 = array.slice(m);

    
//     while(i<a1.length && j<a2.length){
//         if(a1[i]<=a2[j]){
//             array[k] = a1[i];
//             i++;
//         }else{
//             array[k] = a2[j];
//             j++;
//         }
//         k++;
//     }
    
//     while(i<a1.length){
//         array[k] = a1[i];
//         i++;
//         k++;
//     }
//     while(j<a2.length){
//         array[k] = a2[j];
//         j++;
//         k++;
//     }
// }
