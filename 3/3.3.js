//First version
let arr = [1, 2, 3, 4];
let arrCopy = [];
for (let element of arr){
    arrCopy.push(element);
}
console.log(arrCopy);

//Second version
let arr = [1, 2, 3, 4];
let arrCopy = [].concat(arr);
console.log(arrCopy);




