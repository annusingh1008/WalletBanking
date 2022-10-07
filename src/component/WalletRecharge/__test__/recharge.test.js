import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WalletRecharge from "../index";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const localStorageData = {
  email: "annu",
  password: "1234",
};

const localStorageMock = (function () {
  return {
    getItem: function (key) {
      return localStorageData[key];
    },
    removeItem: function () {
      return null;
    },
    setItem: jest.fn(),
  };
})();

describe("WalletRecharge", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  it("should render amount input element and label", () => {
    render(
      <Provider store={store}>
        <Router>
          <WalletRecharge />
        </Router>
      </Provider>
    );

    const inputElement1 = screen.getByPlaceholderText(/1000/i);
    expect(inputElement1).toBeInTheDocument();
  });

  it("should render amount label element", () => {
    render(
      <Provider store={store}>
        <Router>
          <WalletRecharge />
        </Router>
      </Provider>
    );

    const labeElement1 = screen.getByText("Amount");
    expect(labeElement1).toBeInTheDocument();
  });

  it("should render recharge button", () => {
    render(
      <Provider store={store}>
        <Router>
          <WalletRecharge />
        </Router>
      </Provider>
    );

    const buttonElement = screen.getByText("Recharge");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <WalletRecharge />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("#getItem", () => {
    it("returns the user email", () => {
      const result = localStorage.getItem("email");
      expect(result).toEqual("annu");
    });
  });

  it("should be able to type recharge details", () => {
    render(
      <Provider store={store}>
        <Router>
          <WalletRecharge />
        </Router>
      </Provider>
    );

    const textAreaElement1 = screen.getByPlaceholderText(/1000/i);
    fireEvent.change(textAreaElement1, { target: { value: "1000" } });
    expect(textAreaElement1.value).toBe("1000");
  });

  it("Form can be submitted", () => {
    const mockSubmit = jest.fn();
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <WalletRecharge />
        </Router>
      </Provider>
    );
    fireEvent.submit(queryByTestId("button"));
    fireEvent.submit(queryByTestId("form"));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
