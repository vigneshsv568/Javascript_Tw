/*
With InbuiltFunction
*/
const arr = [2,3,4,5,6];
const reduceWithInbuiltFunction = arr.reduce(function(arr,obj){
    return arr+obj;
},0)
console.log(reduceWithInbuiltFunction);

/*
Without InbuiltFunction
*/
reduceWithoutInbuiltFunction =(arr) =>{
    let ans=0;
    for(let i=0;i<arr.length;i++){
        ans = multiplying(arr[i],ans);
    }
    return ans;
}
multiplying = (firstdigit,secdigit) => firstdigit+secdigit;

console.log(reduceWithoutInbuiltFunction(arr,multiplying));