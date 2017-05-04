function largest(array) {
    var visited = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    var result = 0;
    for (var i = 0; i < visited.length; i++) {
        for (var j = 0; j < visited[0].length; j++) {
            if (array[i][j] == 1 && visited[i][j] != 1) {
                count = {
                    value: 1 
                };
                DFS(array, i, j, visited, count); // pass value by reference we have to pass value inside object like we have pointer in C

                result = Math.max(result, count.value);
            }
        }
    }

    return result;
}


function DFS(array, i, j, visited, count) {

    var rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    var colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];


    visited[i][j] = true;


    for (var k = 0; k < 8; ++k) {
        if (isSafe(array, i + rowNbr[k], j + colNbr[k],
                visited)) {
            count.value = count.value + 1;
            DFS(array, i + rowNbr[k], j + colNbr[k],
                visited, count);
        }
    }
}

function isSafe(array, i, j, visited) {
    return (i >= 0) && (i < 4) &&
        (j >= 0) && (j < 5) &&
        (array[i][j] && !visited[i][j]);
}

function main() {
    var array = [
        [0, 0, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1]
    ];
    var result = largest(array);
    console.log(result);
}

main();