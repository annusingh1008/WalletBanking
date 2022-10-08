import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Cashback from "../index";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import { getCashbacks } from "../../../actions/cashback.actions";
import { Button } from "react-bootstrap";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../actions/cashback.actions", () => ({
  ...jest.requireActual("../../../actions/cashback.actions"),
  getCashbacks: jest.fn(() => ({ cashbackList: [], totalPages: 1 })),
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

  // it("first button is clicked", () => {
  //   render(
  //     <Provider store={store}>
  //       <Router>
  //         <Cashback />
  //       </Router>
  //     </Provider>
  //   );
  //   const { onClick } = Button.mock.calls[1][0];
  //   console.log(onClick);

  //   // const firstButton = queryByTestId("first");
  //   // console.log(firstButton);
  //   // // const firstButton = queryByText("first");
  //   // fireEvent.click(firstButton);
  //   expect(mockDispatch).toHaveBeenCalled();
  // });

  it("renders properly when length of cashback is divisible by 10 ", () => {
    getCashbacks.mockImplementationOnce(() => ({
      cashbackList: [
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
      totalPages: 10,
    }));
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Cashback />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
