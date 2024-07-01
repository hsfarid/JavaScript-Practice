//get html referencex
const form = document.querySelector(".inputForm")
const inputString = document.querySelector(".inputString")
const resultContainer = document.querySelector('.result')

//CREATE A FUNCTION
const toUpperCasse = (str) => {
str.split(" ").forEach(word => {
   const result = word.charAt(0).toUpperCase() + word.slice(1)
   let html = 
   `
   <span>${result}</span>
   `
   resultContainer.innerHTML += html
});


}

//add a submit event
form.addEventListener('submit', e => {
    //prevent default
    e.preventDefault()

    const str = inputString.value;

    toUpperCasse(str)
})