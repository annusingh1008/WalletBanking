import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../index";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Signin", () => {
  it("should render signup textarea element", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>
    );

    const textAreaElement1 = screen.getByPlaceholderText(/First Name/i);
    expect(textAreaElement1).toBeInTheDocument();

    const textAreaElement2 = screen.getByPlaceholderText(/Last Name/i);
    expect(textAreaElement2).toBeInTheDocument();

    const textAreaElement3 = screen.getByPlaceholderText(/Email/i);
    expect(textAreaElement3).toBeInTheDocument();

    const textAreaElement4 = screen.getByTestId("password");
    expect(textAreaElement4).toBeInTheDocument();

    const textAreaElement5 = screen.getByPlaceholderText(/Confirm Password/i);
    expect(textAreaElement5).toBeInTheDocument();

    const textAreaElement6 = screen.getByPlaceholderText(/Mobile Number/i);
    expect(textAreaElement6).toBeInTheDocument();
  });

  it("should be able to type signup details", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>
    );

    const textAreaElement1 = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(textAreaElement1, { target: { value: "annu@gmail.com" } });
    expect(textAreaElement1.value).toBe("annu@gmail.com");

    const textAreaElement2 = screen.getByTestId("password");
    fireEvent.change(textAreaElement2, { target: { value: "1234" } });
    expect(textAreaElement2.value).toBe("1234");

    const textAreaElement3 = screen.getByPlaceholderText(/First Name/i);
    fireEvent.change(textAreaElement3, { target: { value: "Annu" } });
    expect(textAreaElement3.value).toBe("Annu");

    const textAreaElement4 = screen.getByPlaceholderText(/Last Name/i);
    fireEvent.change(textAreaElement4, { target: { value: "Singh" } });
    expect(textAreaElement4.value).toBe("Singh");

    const textAreaElement5 = screen.getByPlaceholderText(/Confirm Password/i);
    fireEvent.change(textAreaElement5, { target: { value: "1234" } });
    expect(textAreaElement5.value).toBe("1234");

    const textAreaElement6 = screen.getByPlaceholderText(/Mobile Number/i);
    fireEvent.change(textAreaElement6, { target: { value: "1234567890" } });
    expect(textAreaElement6.value).toBe("1234567890");
  });

  it("should have empty textarea when submit button is clicked", () => {
    render(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>
    );

    const buttonElement = screen.getByText("Submit");

    const textAreaElement1 = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(textAreaElement1, { target: { value: "annu@gmail.com" } });

    const textAreaElement2 = screen.getByTestId("password");
    fireEvent.change(textAreaElement2, { target: { value: "" } });

    const textAreaElement3 = screen.getByPlaceholderText(/First Name/i);
    fireEvent.change(textAreaElement3, { target: { value: "Annu" } });

    const textAreaElement4 = screen.getByPlaceholderText(/Last Name/i);
    fireEvent.change(textAreaElement4, { target: { value: "Singh" } });

    const textAreaElement5 = screen.getByPlaceholderText(/Confirm Password/i);
    fireEvent.change(textAreaElement5, { target: { value: "" } });

    const textAreaElement6 = screen.getByPlaceholderText(/Mobile Number/i);
    fireEvent.change(textAreaElement6, { target: { value: "1234567890" } });

    fireEvent.click(buttonElement);

    expect(textAreaElement1.value).toBe("");
    expect(textAreaElement2.value).toBe("");
    expect(textAreaElement3.value).toBe("");
    expect(textAreaElement4.value).toBe("");
    expect(textAreaElement5.value).toBe("");
    expect(textAreaElement6.value).toBe("");
  });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
