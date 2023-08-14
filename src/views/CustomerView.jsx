import React, { useEffect, useState } from "react";
import { useFetch, Status, API_PATHS } from "logic/hooks/useFetch";
import { calculatePoints } from "logic/calculatePoints";
import Customer from "components/Customer";

const CustomerView = ({ clientId, name }) => {
  const { invoke, networkState } = useFetch(API_PATHS.transactions);
  const [data, setData] = useState({
    customerPoints: 0,
    transactions: [],
  });
  const [loading, setLoading] = useState(false);

  const handleTransactionData = (data) => {
    const filteredValues = handleFiltering(data);
    const pointsData = handlePointsCount(filteredValues);
    setData(pointsData);
  };

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
        handleTransactionData(networkState.data);
        setLoading(false);
        break;
      default:
        setLoading(false);
    }
  }, [networkState]);

  const handleFiltering = (data) =>
    data.filter(
      (transaction) =>
        transaction.clientId === clientId && transaction.createdAt
    );

  const handlePointsCount = (data) => {
    let customerPoints = 0;
    const transactions = data.map((value) => {
      const points = calculatePoints(value.amount);
      customerPoints += points;
      return { ...value, points };
    });
    return { customerPoints, transactions };
  };

  return (
    <Customer
      name={name}
      customerPoints={data.customerPoints}
      transactions={data.transactions}
      loading={loading}
      error={networkState.status === Status.error && networkState.error}
    />
  );
};

export default CustomerView;
