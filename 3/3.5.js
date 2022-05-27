let arr = [1,-4,7,12];
let sum = 0;
for (let element of arr) {
   if (Math.sign(element) > 0)/*if(element>=0)*/ {
       sum += element;
   }
}
console.log(sum);


