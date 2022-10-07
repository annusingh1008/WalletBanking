import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Cashback from "../index";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Cashback", () => {
  //   it("should render all buttons", () => {
  //     const { queryByTestId } = render(
  //       <Provider store={store}>
  //         <Router>
  //           <Cashback />
  //         </Router>
  //       </Provider>
  //     );

  //     const button1 = queryByTestId("first");
  //     const button2 = queryByTestId("prev");
  //     const button3 = queryByTestId("next");
  //     const button4 = queryByTestId("last");
  //     expect(button1).toBeInTheDocument();
  //     expect(button2).toBeInTheDocument();
  //     expect(button3).toBeInTheDocument();
  //     expect(button4).toBeInTheDocument();
  //   });

  it("renders properly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Cashback />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("first button is clicked", () => {
    const mockSubmit = jest.fn();
    render(
      <Provider store={store}>
        <Router>
          <Cashback />
        </Router>
      </Provider>
    );
    const firstButton = screen.queryByTestId("first");
    fireEvent.click(firstButton);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
