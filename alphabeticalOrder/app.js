//get a string from a user
const str = prompt("Enter a string");

//create a function that returns the passed string with letters in alphabetical order
function alphabeticalOrder(str) {
  //split the passed string into an array of characters
  const stringArray = str.split("");

  //sort the characters or letters in alphabetical order
  const sortedArray = stringArray.sort();

  //join the letters into a string
  const result = sortedArray.join("");

  //render the result on the browser
  let html = `
<div>The alphabetical form of the string "${str}" is: ${result}</div>
`;
  document.body.innerHTML = html;
}

alphabeticalOrder(str);
