/* Function which takes an array of numbers and return a sorted array from Merge Sort using recursion */
let mergeArray = [14, 35, 64, 5, 20, 24, 59, 19, 23, 7];
function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, array.length));
    
    return Array.from({length: left.length + right.length}, () => {
        if (!left.length) {
            return right.shift();
        } else if (!right.length) {
            return left.shift();
        } else {
            return left[0] > right[0] ? right.shift() : left.shift();
        }
    });
};

console.log(mergeSort(mergeArray));
