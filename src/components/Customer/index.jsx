import React from "react";
import Error from "components/Error";
import TransactionsView from "views/TransactionsView";

const Customer = ({ name, loading, customerPoints, transactions, error }) => {
  const loadData = () => {
    if (loading) {
      return (
        <>
          <h3>Calculating points...</h3>
          <p>Loading transactions...</p>
        </>
      );
    }

    return (
      <>
        <h3>
          {error ? (
            <Error message={error} />
          ) : (
            `Total: ${customerPoints} points`
          )}
        </h3>
        {!error && <TransactionsView transactions={transactions} />}
      </>
    );
  };

  return (
    <div data-testid="customer-view">
      <h1>{name}</h1>
      {loadData()}
      <hr />
    </div>
  );
};

export default Customer;
