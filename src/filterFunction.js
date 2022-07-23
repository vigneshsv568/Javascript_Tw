/*
With InbuiltFunction
*/
const array = [2,3,4,5,6,7,8];
const filterWithInbuilt = array.filter(number1 => number1%2==1);
console.log(filterWithInbuilt);

/*
Without InbuiltFunction
*/
sendout=(numbers,filt)=>{
    const updatedArray = [];
    let start=0;
    for(let i=0;i<numbers.length;i++){
        if(filt(numbers[i])){
            updatedArray[start++] = numbers[i];
        }
    }
    return updatedArray;
}
filterprocess = (number) => number%2==1;
const response = sendout(array,filterprocess);
console.log(response);