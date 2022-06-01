/*let array = [3, 10, 5, 49, 65, 1, 18, 26];
function sort(array) {
    let arr = [];
    while (array.length !== 0){
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
function sort(array) {
    let arr = [];
    while(array.length !== 0) {
        console.log("array", array);
        console.log("arr", arr);
        let min = Math.min(...array);
        arr.push(min);
        delete array[min];
    }
    return arr;
}

console.log(sort(array));
