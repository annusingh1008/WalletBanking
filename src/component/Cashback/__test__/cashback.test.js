import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Cashback from '../index'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import { BrowserRouter as Router } from 'react-router-dom';

describe("Cashback", () => {
    // it('should render all buttons', () => {
    //     render(<Provider store={store}>
    //         <Router>
    //             <Cashback />
    //         </Router>
    //     </Provider>)

    //     const buttons = screen.getAllByRole("Button");
    //     expect(buttons[0]).toBeInTheDocument();
    //     expect(buttons[1]).toBeInTheDocument();
    //     expect(buttons[2]).toBeInTheDocument();
    //     expect(buttons[3]).toBeInTheDocument();
    // });  

    it('renders properly', () => {
        const { container } = render(<Provider store={store}>
            <Router>
                <Cashback />
            </Router>
        </Provider>);
        expect(container.firstChild).toMatchSnapshot();
    });
})