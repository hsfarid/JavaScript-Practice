//get html reference
const resultScreen = document.querySelector(".resultScreen")

const getDate = () => {
    const newDate = new Date();
    const dd = newDate.getDate()
    const mm = newDate.getMonth() + 1
    const yyyy = newDate.getFullYear()
    
    const result = `${dd}/${mm}/${yyyy}`
    let html = 
    `
    <p>Today's date is: ${result}</p>
    `
    resultScreen.innerHTML = html
}
getDate()

