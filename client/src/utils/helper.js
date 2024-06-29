import { parseISO, format } from "date-fns";

export const formatDate = (date) => {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, "dd MMM yyyy");

  return formattedDate;
};

export const getPaymentDueDate = (netTermValue = 7) => {
  const date = new Date();
  const futureDate = date.getDate() + netTermValue;
  date.setDate(futureDate);

  return date;
};
