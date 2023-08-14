import { cutOutPeriod } from "./const";
import { getMonthNumber } from "./dateHelpers";

export const filterLast3Months = (transactions) => {
  const currentMonth = getMonthNumber();
  const filteredValues = transactions.filter(
    (transaction) =>
      getMonthNumber(transaction.createdAt) >= currentMonth - cutOutPeriod
  );
  return filteredValues;
};
