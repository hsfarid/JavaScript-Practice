const lastDay = (yr, m) => {
  // By passing m + 1 as the month parameter and 0 as the day parameter,
  //it represents the last day of the specified month
  return new Date(yr, m + 1, 0).getDate();
};

console.log(lastDay(2014, 0));
console.log(lastDay(2014, 1));
console.log(lastDay(2014, 11));
