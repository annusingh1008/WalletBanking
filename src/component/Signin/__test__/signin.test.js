import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Signin from "../index";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Signin", () => {
  it("should render email and password textarea element", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signin />
        </Router>
      </Provider>
    );

    const textAreaElement1 = screen.getByPlaceholderText(/Email/i);
    expect(textAreaElement1).toBeInTheDocument();
    const textAreaElement2 = screen.getByPlaceholderText(/Password/i);
    expect(textAreaElement2).toBeInTheDocument();
  });

  it("should render email and password label element", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signin />
        </Router>
      </Provider>
    );

    const labeElement1 = screen.getByText("Email");
    expect(labeElement1).toBeInTheDocument();
    const labeElement2 = screen.getByText("Password");
    expect(labeElement2).toBeInTheDocument();
  });

  it("should be able to type email and password", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signin />
        </Router>
      </Provider>
    );

    const textAreaElement1 = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(textAreaElement1, { target: { value: "annu@gmail.com" } });
    expect(textAreaElement1.value).toBe("annu@gmail.com");

    const textAreaElement2 = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(textAreaElement2, { target: { value: "1234" } });
    expect(textAreaElement2.value).toBe("1234");
  });

  it("should render submit button", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signin />
        </Router>
      </Provider>
    );

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Signin />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Form can be submitted", () => {
    const mockSubmit = jest.fn();
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <Signin />
        </Router>
      </Provider>
    );
    fireEvent.click(queryByTestId("button"));
    fireEvent.submit(queryByTestId("form"));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
