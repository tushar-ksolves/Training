let arr = [1, 2, 3, 4, 5];

// Method 1
let modifiedArray = arr.map((item) => {
  return item ** 2;
});
console.log(modifiedArray); //[ 1, 4, 9, 16, 25 ]

// Method 2 (inplace)
arr.map((item, index, arr) => {
  arr[index] = item ** 2;
});
console.log(arr); //[ 1, 4, 9, 16, 25 ]

arr = [1, 2, 3, 4, 5];

// Method 3
let modifiedArray1 = Array.from(arr, (item) => {
  return item + 2;
});
console.log(modifiedArray1); //[ 3, 4, 5, 6, 7 ]

// Extended: Generate a sequence of number
console.log(
  Array.from({ length: 10 }, (item, index) => {
    //Note: the array is initialised with values as `undefined`
    return index;
  })
);
/*
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
*/
