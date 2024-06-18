//get html reference
const resultScreen = document.querySelector(".resultScreen");

const getDate = () => {
  const newDate = new Date();
  let dd = newDate.getDate();
  let mm = newDate.getMonth() + 1;
  const yyyy = newDate.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  const result = `${dd}/${mm}/${yyyy}`;

  let html = `
    <p>Today's date is: ${result}</p>
    `;
  resultScreen.innerHTML = html;
};
getDate();
