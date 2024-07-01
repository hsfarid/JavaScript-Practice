const startOfMonth = (date) => {
  return new Date(date.getFullYear(), 0, 1);
};
const dt = new Date();
document.write(startOfMonth(dt));
