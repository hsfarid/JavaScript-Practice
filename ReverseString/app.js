//get a string from a user
const str = prompt("Enter a string");
reverseString(str);

//create a function to reverse the passed string
function reverseString(str) {
  //split the string into an array of characters
  const stringArray = str.split("");

  //reverse the stringArray
  const stringArrayReversed = stringArray.reverse();

  //join the characters into a string
  const reversedString = stringArrayReversed.join("");

  //render the reversed string on the browser
  let html = `
<div>The reverse of the string "${str}" is: ${reversedString}</div>
`;
  document.body.innerHTML = html;
}
