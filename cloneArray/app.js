const cloneArray = (array) => {
  return array.slice(0);
};

const clonedArray1 = cloneArray([3, 5, 2]);
const clonedArray2 = cloneArray(["Farid", "Rabi", "Habib"]);

console.log(clonedArray1, clonedArray2);
