import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AmountTransfer from "../index";
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

describe("AmountTransfer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  it("should render amount and email input element", () => {
    render(
      <Provider store={store}>
        <Router>
          <AmountTransfer />
        </Router>
      </Provider>
    );

    const inputElement1 = screen.getByPlaceholderText(/Email/i);
    expect(inputElement1).toBeInTheDocument();
    const inputElement2 = screen.getByPlaceholderText(/1000/i);
    expect(inputElement2).toBeInTheDocument();
  });

  it("should render email and amount label element", () => {
    render(
      <Provider store={store}>
        <Router>
          <AmountTransfer />
        </Router>
      </Provider>
    );

    const labeElement1 = screen.getByText("Email");
    expect(labeElement1).toBeInTheDocument();
    const labeElement2 = screen.getByText("Amount");
    expect(labeElement2).toBeInTheDocument();
  });

  it("should render Amount Transfer button", () => {
    render(
      <Provider store={store}>
        <Router>
          <AmountTransfer />
        </Router>
      </Provider>
    );

    const buttonElement = screen.getByText("Amount Transfer");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <AmountTransfer />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to type amount transfer details", () => {
    render(
      <Provider store={store}>
        <Router>
          <AmountTransfer />
        </Router>
      </Provider>
    );

    const textAreaElement1 = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(textAreaElement1, { target: { value: "annu@gmail.com" } });
    expect(textAreaElement1.value).toBe("annu@gmail.com");

    const textAreaElement2 = screen.getByPlaceholderText(/1000/i);
    fireEvent.change(textAreaElement2, { target: { value: "1000" } });
    expect(textAreaElement2.value).toBe("1000");
  });

  describe("#getItem", () => {
    it("returns the user email", () => {
      const result = localStorage.getItem("email");
      expect(result).toEqual("annu");
    });
  });

  it("Form can be submitted", () => {
    const mockSubmit = jest.fn();
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <AmountTransfer />
        </Router>
      </Provider>
    );
    fireEvent.submit(queryByTestId("button"));
    fireEvent.submit(queryByTestId("form"));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
