import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../index";
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

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Header />
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

  it("signout button is clicked", () => {
    const mockSubmit = jest.fn();
    const { queryByText, queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    // const signoutButton = queryByTestId("signout");
    // fireEvent.click(signoutButton);
    // const firstButton = queryByText("first");
    // fireEvent.click(firstButton);
    // expect(mockDispatch).toHaveBeenCalled();
  });
});
