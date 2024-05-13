export const formatDate = (date) => {
  const options = { month: "short" };
  const month = new Intl.DateTimeFormat("en-US", options).format(date);

  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  const formattedDate = day + " " + month + " " + date.getFullYear();
  return formattedDate;
};
