import React from "react";
import { render, screen } from "@testing-library/react";
import Transactions from ".";

describe("Transactions component", () => {
  const mockMonths = {
    5: 100,
    6: 150,
    7: 200,
  };

  it("renders transactions data", () => {
    render(<Transactions months={mockMonths} />);

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(Object.keys(mockMonths).length + 1);

    Object.entries(mockMonths).forEach(([month, points]) => {
      const monthCell = screen.getByText(month);
      const pointsCell = screen.getByText(points.toString());

      expect(monthCell).toBeInTheDocument();
      expect(pointsCell).toBeInTheDocument();
    });
  });

  it("renders correct header labels", () => {
    render(<Transactions months={mockMonths} />);

    const monthHeader = screen.getByText("Month");
    const pointsHeader = screen.getByText("Points");

    expect(monthHeader).toBeInTheDocument();
    expect(pointsHeader).toBeInTheDocument();
  });

  it("renders message for last 3 months", () => {
    render(<Transactions months={mockMonths} />);

    const message = screen.getByText("Last 3 months");
    expect(message).toBeInTheDocument();
  });
});
