import React from "react";

const Transactions = ({ months }) => {
  const renderTransactions = () =>
    Object.entries(months).map(([test, points], idx) => (
      <tr key={idx}>
        <td>{test}</td>
        <td>{points}</td>
      </tr>
    ));

  return (
    <>
      <p>Last 3 months</p>
      <table data-testid="transactions-view">
        <thead>
          <tr>
            <th>Month</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>{renderTransactions()}</tbody>
      </table>
    </>
  );
};

export default Transactions;
