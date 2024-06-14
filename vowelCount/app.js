//get html references
const form = document.querySelector(".inputForm");
const inputString = document.querySelector(".inputString");
const result = document.querySelector(".result");

//create a function that counts the vowels
const vowelCount = (str) => {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

  let count = 0;

  str.split("").forEach((char) => {
    if (vowels.includes(char)) {
      count++;
    }
  });
  let html = `
  <p>The  number of vowels in "${str}" is: ${count}</p>
  `;
  result.innerHTML = html;
};

//create a submit event
form.addEventListener("submit", (e) => {
  //prevent default
  e.preventDefault();

  const str = inputString.value;

  vowelCount(str);
  form.reset();
});
