//create variables for all five numbes
const a = -5;
const b = -2;
const c = -6;
const d = 0;
const e = -1;

if (a > b && a > c && a > d && a > e) {
  alert(`${a} is the largest number`);
} else if (b > a && b > c && b > d && b > e) {
  alert(`${b} is the largest number`);
} else if (c > a && c > b && c > d && c > e) {
  alert(`${c} is the largest number`);
} else if (d > a && d > b && d > c && d > e) {
  alert(`${d} is the largest number`);
} else {
  alert(`${e} is the largest number`);
}
