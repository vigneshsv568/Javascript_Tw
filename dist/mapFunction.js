"use strict";

/*
Without InbuiltFunction
*/
var arr_WithoutInbuiltFuction = [1, 4, 6, 8];
var mapWithoutInbuiltFuction = mapWithoutInbuilt(arr_WithoutInbuiltFuction, multiplication_operation);
console.log(mapWithoutInbuiltFuction);

mapWithoutInbuilt = function mapWithoutInbuilt(arr_WithoutInbuiltFuction, elements) {
    var answer = [];
    for (var i = 0; i < arr_WithoutInbuiltFuction.length; i++) {
        answer[i] = elements(arr_WithoutInbuiltFuction[i]);
    }
    return answer;
};
multiplication_operation = function multiplication_operation(numbers) {
    return numbers * 2;
};

/*
With InbuiltFunction
*/
var arr1_mapInbuiltFunction = [1, 4, 6, 8];
var mapInbuiltFunction = arr1_mapInbuiltFunction.map(function (numbers) {
    return numbers * 2;
});
console.log(mapInbuiltFunction);