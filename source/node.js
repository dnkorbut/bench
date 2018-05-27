#!/usr/bin/env node

var cmd=require('node-cmd');

function shellsSort(arr) {
    let n    = arr.length
    let gap  = Math.floor(n/2)
    let i    = 0
    let j    = 0
    let temp = null
    
    while (gap > 0) {
        i = gap
        while (i < n) {
            temp = arr[i]
            j = i
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap]
                j = j - gap
            }
            arr[j] = temp
            i = i + 1
        }
        gap = Math.floor(gap/2)
    }
}

var a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var c = 0;

while (c < 10000000) {
	// a = a.sort();
    shellsSort(a);
    a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    c = c + 1
}

cmd.get(
    'node -v',
    function(err, data, stderr){
        console.log('Node ' + data);
    }
);
