import React, { useEffect, useState } from "react";
import Customers from "components/Customers";
import { useFetch, Status, API_PATHS } from "logic/hooks/useFetch";

const CustomersView = () => {
  const { invoke, networkState } = useFetch(API_PATHS.customers);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    invoke();
  }, []);

  useEffect(() => {
    switch (networkState.status) {
      case Status.loading:
        setLoading(true);
        break;
      case Status.error:
        setLoading(false);
        break;
      case Status.success:
        setCustomers(networkState.data);
        setLoading(false);
        break;
      default:
        setLoading(false);
    }
  }, [networkState]);

  return (
    <Customers
      customers={customers}
      loading={loading}
      error={networkState.status === Status.error && networkState.error}
    />
  );
};

export default CustomersView;
