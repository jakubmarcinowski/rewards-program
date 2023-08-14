import { getMonthNumber } from "./dateHelpers";

export const calculatePointsByMonth = (transactions) => {
  let months = {};

  transactions.map((transaction) => {
    const month = getMonthNumber(transaction.createdAt);
    const currentPoints = months[month] === undefined ? 0 : months[month];
    return (months[month] = currentPoints + transaction.points);
  });

  return months;
};
