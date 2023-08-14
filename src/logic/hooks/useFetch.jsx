import { useState } from "react";
import { mockAPI } from "mock-api";

export const Status = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
};

export const API_PATHS = {
  customers: "customers",
  transactions: "transactions",
};

export const useFetch = (paths) => {
  const [networkState, setNetworkState] = useState({
    status: Status.idle,
  });

  const invoke = async () => {
    setNetworkState({ status: Status.loading });
    try {
      const { data } = await mockAPI(paths);
      setNetworkState({ status: Status.success, data });
    } catch (error) {
      setNetworkState({ status: Status.error, error });
    }
  };

  return { invoke, networkState };
};
