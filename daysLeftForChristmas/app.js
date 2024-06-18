const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);
const timeStamp1 = today.getTime();
const timestamp2 = christmas.getTime();

if (today.getMonth() === 11 && today.getDay > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}
const diff = timestamp2 - timeStamp1;
const days = Math.floor(diff / 1000 / 60 / 60 / 24);
document.write(`Number of days until next Christmas: ${days} days`);
