/*let array = [3, 10, 5, 49, 65, 1, 18, 26];
function sort(array) {
    let arr = [];
    while (array.length !== 1){
        console.log("array",array);
        console.log("arr", arr);
        if (array[0] < array[1]) {
            arr.push(array[0]);
            array.shift();
        } else {
            array.push(array.splice(0,1)[0]);
        }
    }  
    return arr; 
    }
console.log(sort(array));*/


let array = [3, 10, 5, 49, 65, 1, 18, 26];
let array1 = [100, 45, 10000, 10, 3];
let array2 = [10, 100, 3, 26, 45, 3];
function sort(array) {
    let arr = [];
    while(array.length !== 0) {
        let min = Math.min(...array);
        arr.push(min);
        array.splice(array.indexOf(Math.min(...array)),1);
    }
    return arr;
}

console.log(sort(array));
console.log(sort(array1));
console.log(sort(array2));
