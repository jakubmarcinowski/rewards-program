import React from "react";
import { render, screen } from "@testing-library/react";
import Customer from ".";

describe("Customer component", () => {
  const mockTransactions = [
    {
      clientId: "5",
      amount: 120,
      createdAt: "2023-07-30T18:27:11Z",
      points: 90,
    },
    {
      clientId: "1",
      amount: 120,
      createdAt: "2023-06-24T20:10:29Z",
      points: 90,
    },
    {
      clientId: "2",
      amount: 120,
      createdAt: "2023-03-07T17:39:58Z",
      points: 90,
    },
  ];

  it("renders customer name", () => {
    const testName = "John Doe";
    render(
      <Customer
        name={testName}
        loading={false}
        customerPoints={100}
        transactions={mockTransactions}
        error={null}
      />
    );

    const nameElement = screen.getByText(testName);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders loading state", () => {
    render(
      <Customer
        name="John Doe"
        loading={true}
        customerPoints={100}
        transactions={mockTransactions}
        error={null}
      />
    );

    const calculatingPoints = screen.getByText("Calculating points...");
    const loadingTransactions = screen.getByText("Loading transactions...");

    expect(calculatingPoints).toBeInTheDocument();
    expect(loadingTransactions).toBeInTheDocument();
  });

  it("renders customer points when not loading and no error", () => {
    const testPoints = 150;
    render(
      <Customer
        name="John Doe"
        loading={false}
        customerPoints={testPoints}
        transactions={mockTransactions}
        error={null}
      />
    );

    const pointsElement = screen.getByText(`Total: ${testPoints} points`);
    expect(pointsElement).toBeInTheDocument();
  });

  it("renders transactions view when not loading and no error", () => {
    render(
      <Customer
        name="John Doe"
        loading={false}
        customerPoints={100}
        transactions={mockTransactions}
        error={null}
      />
    );

    const transactionsView = screen.getByTestId("transactions-view");
    expect(transactionsView).toBeInTheDocument();
  });

  it("renders error message when error is provided", () => {
    const errorMessage = "An error occurred.";
    render(
      <Customer
        name="John Doe"
        loading={false}
        customerPoints={100}
        transactions={mockTransactions}
        error={errorMessage}
      />
    );

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
