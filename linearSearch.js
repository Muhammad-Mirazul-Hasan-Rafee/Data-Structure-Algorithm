// find 33 is in the array or not
const array = [10,14,19,26,27,31,33,35,42,44];
const target = 33;
let count = 0;

for(let i = 0; i< array.length; i++){
    if(array[i] === target){
        count++;
    }
}
if(count > 0){
    console.log(`${target} is in the array`);
}
else{
    console.log(`${target} is not in the array`);
}