import React from "react";
import { render, screen } from "@testing-library/react";
import Customers from ".";

describe("Customers component", () => {
  const mockCustomers = [
    {
      clientId: "1",
      name: "Chuck",
    },
    {
      clientId: "2",
      name: "Lizzie",
    },
  ];

  it("renders loading state", () => {
    render(<Customers customers={[]} loading={true} error={null} />);

    const loadingMessage = screen.getByText("Loading customers...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("renders customers when not loading and no error", () => {
    render(
      <Customers customers={mockCustomers} loading={false} error={null} />
    );

    const customerViews = screen.getAllByTestId("customer-view");
    expect(customerViews).toHaveLength(mockCustomers.length);
  });

  it("renders error message when error is provided", () => {
    const errorMessage = "An error occurred.";
    render(<Customers customers={[]} loading={false} error={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
