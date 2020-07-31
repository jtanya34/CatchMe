#! Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
//! With extra Space

var duplicateZeros = function (arr) {
    var copy = Object.assign([], arr);
    let j = 0
    let i = 0;
    let len = copy.length
    while (j < len) {
        if (copy[i] !== 0) {
            arr[j] = copy[i];
            i++;
        } else {
            arr[j] = copy[i];
            if (j < len - 1) {
            arr[j + 1] = copy[i];
            j++
            i++
            }
        }
        j++;
    }
}

