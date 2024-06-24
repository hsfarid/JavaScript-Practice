const date_diff_indays = (param1, param2) => {
  //create new dates using the parameters
  const date1 = new Date(param1);
  const date2 = new Date(param2);
  //get the timestamps(in milliseconds)
  const timestamp1 = date1.getTime();
  const timestamp2 = date2.getTime();
  //calculate the difference
  diff_timestamp = timestamp2 - timestamp1;
  //convert the milliseconds to days
  diff_indays = diff_timestamp / 1000 / 60 / 60 / 24;
  //display results
  console.log(diff_indays);
};

date_diff_indays("04/02/2014", "11/04/2014");
date_diff_indays("12/02/2014", "11/04/2014");
