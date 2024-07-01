const truncate_string = (str, length) => {
  if (str.constructor === String && length > 0) {
    return str.slice(0, length);
  }
};
document.write(truncate_string("Robin Singh", 4));
