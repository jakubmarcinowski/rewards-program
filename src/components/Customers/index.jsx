import React from "react";
import CustomerView from "views/CustomerView";
import Error from "components/Error";

const Customers = ({ customers, loading, error }) => {
  const renderCustomers = () =>
    customers.map((customer, idx) => <CustomerView key={idx} {...customer} />);

  const loadCustomers = () => (
    <>{error ? <Error message={error} /> : renderCustomers()}</>
  );

  return loading ? <p>Loading customers...</p> : loadCustomers();
};

export default Customers;
