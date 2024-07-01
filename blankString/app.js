const blankString = (str) => {
  if (str.trim().length === 0) {
    return "The string is blank";
  } else {
    return "The string is not blank";
  }
};
document.write(blankString(""));
//document.write(blankString("abc"));
