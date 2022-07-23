/*
With InbuiltFunction
*/

let arr = ['mango','apple','grapes'];

arr.forEach(arr => console.log('I eat '+ arr))



/*
WithOut InbuiltFunction
*/

foreachmethod = (arr,printsolution) =>{
    for(var i=0;i<arr.length;i++){
        printsolution(arr[i]); 
    }
}
printsolution = (arr) => console.log('I eat '+ arr);
foreachmethod(arr,printsolution);
