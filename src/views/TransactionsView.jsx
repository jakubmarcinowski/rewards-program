import React from "react";
import { calculatePointsByMonth } from "logic/calculatePointsByMonth";
import Transactions from "components/Transactions";
import { filterLast3Months } from "logic/filterLast3Months";

const TransactionsView = ({ transactions }) => {
  const last3Months = filterLast3Months(transactions);
  const months = calculatePointsByMonth(last3Months);

  return <Transactions months={months} />;
};

export default TransactionsView;
