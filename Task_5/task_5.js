// 1

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

console.log(add(1, 2));

console.log(multiply(1, 2));

console.log(add(multiply(36325, 9824), 777));

console.log("---------");

// 2

const araArraysSame = (arr1, arr2) => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length != arr2.length) return false;
    if (arr1[i] === arr2[i]) count++;
  }
  return count === arr1.length;
};

console.log(araArraysSame([1, 2, 3], [1, 2, 3]));
console.log(araArraysSame([1, 2, 3], [1, 2, 3, 4]));
console.log(araArraysSame([1, 2, 3], [3, 2, 1]));
