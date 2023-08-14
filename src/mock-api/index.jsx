import { mockedData } from "./mockData";

export const mockAPI = (path) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const data = mockedData[path];
      const result = {
        data,
        status: 200,
        statusText: "OK",
      };
      resolve(result);
    }, 1000);
  });
