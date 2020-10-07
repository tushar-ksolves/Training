let rangeOne = (start, stop, step) => {
  let arr = [];
  for (let i = start; i <= stop; i += step) {
    arr.push(i);
  }
  return arr;
};
console.log(rangeOne(0, 10, 1)); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(rangeOne(0, 10, 2)); //[ 0, 2, 4, 6, 8, 10 ]
