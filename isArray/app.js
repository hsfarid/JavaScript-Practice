//create a function that accepts a parameter and check if it is an array

const checkArray = (param) => {
  return Array.isArray(param);
};

console.log(checkArray("Reed"));
console.log(checkArray([1, 2, 6]));
