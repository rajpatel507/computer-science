function printSumPair(array, sum) {
    let temp;
   let bitMap = [];

    for (var i = 0; i < array.length; i++) {
        temp  = sum - array[i];
        if (temp > 0 && bitMap[temp] == 1) {
            console.log(sum + " is sum of "+array[i] +"  and  "+ temp)
        }else{

            bitMap[array[i]] = 1 
        }
    }

}

function main() {
    var array = [3, 5, 2, 9, 6, 1, 25, 13, 15];
    var sum = 26
    printSumPair(array, sum);
}

main();