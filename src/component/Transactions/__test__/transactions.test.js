import React from "react";
import { getAllByRole, getByText, render } from "@testing-library/react";
import Transactions from "../index";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { getTransactions } from "../../../actions/transactions.actions";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../actions/transactions.actions", () => ({
  ...jest.requireActual("../../../actions/transactions.actions"),
  getTransactions: jest.fn(() => ({ totalPages: 1, transactions: [] })),
}));

describe("Transactions", () => {
  it("should render all buttons", () => {
    render(
      <Provider store={store}>
        <Router>
          <Transactions />
        </Router>
      </Provider>
    );

    // const button = findAllByRole("Button");
  });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Transactions />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders properly when length of transactions is divisible by 10 ", () => {
    getTransactions.mockImplementationOnce(() => ({
      totalPages: 10,
      transactions: [
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 4 },
        { _id: 5 },
        { _id: 6 },
        { _id: 7 },
        { _id: 8 },
        { _id: 9 },
        { _id: 10 },
      ],
    }));
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Transactions />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
