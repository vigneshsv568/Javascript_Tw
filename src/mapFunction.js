/*
With InbuiltFunction
*/
const arr1_mapInbuiltFunction = [1,4,6,8];
const mapInbuiltFunction = arr1_mapInbuiltFunction.map(numbers => numbers*2);
console.log(mapInbuiltFunction);


/*
Without InbuiltFunction
*/
const arr_WithoutInbuiltFuction = [1,4,6,8];
const mapWithoutInbuiltFuction = mapWithoutInbuilt(arr_WithoutInbuiltFuction,multiplication_operation)
console.log(mapWithoutInbuiltFuction);

mapWithoutInbuilt=(arr_WithoutInbuiltFuction , elements )=>{
    let answer = [];
    for(let i=0;i<arr_WithoutInbuiltFuction.length;i++){
        answer[i] = elements(arr_WithoutInbuiltFuction[i]);
    }
    return answer;   
}
multiplication_operation = (numbers) => numbers*2;
