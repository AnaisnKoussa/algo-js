let array = [3, 10, 5, 49, 65, 1, 18, 26];
function sort(array) {
    let arr = [];
    while (array.length !== 0){
        for (let element of array) {
            if (element < array[element]) {
                arr.push(element);
                delete element;
            }
        }   
    }
    return arr;
}
console.log(sort(array));

