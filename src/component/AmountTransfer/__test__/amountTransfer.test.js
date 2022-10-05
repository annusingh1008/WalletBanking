import React from 'react';
import { render, screen } from '@testing-library/react'
import AmountTransfer from '../index'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import { BrowserRouter as Router } from 'react-router-dom';


describe("AmountTransfer", () => {
    it('should render amount and email input element', () => {
        render(<Provider store={store}>
            <Router>
                <AmountTransfer />
            </Router>
        </Provider>)

        const inputElement1 = screen.getByPlaceholderText(/Email/i);
        expect(inputElement1).toBeInTheDocument();
        const inputElement2 = screen.getByPlaceholderText(/1000/i);
        expect(inputElement2).toBeInTheDocument();

    });

    it('should render email and amount label element', () => {
        render(<Provider store={store}>
            <Router>
                <AmountTransfer />
            </Router>
        </Provider>)

        const labeElement1 = screen.getByText("Email");
        expect(labeElement1).toBeInTheDocument();
        const labeElement2 = screen.getByText("Amount");
        expect(labeElement2).toBeInTheDocument();
    });

    it('should render Amount Transfer button', () => {
        render(<Provider store={store}>
            <Router>
                <AmountTransfer />
            </Router>
        </Provider>);

        const buttonElement = screen.getByText("Amount Transfer");
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders properly', () => {
        const { container } = render(<Provider store={store}>
            <Router>
                <AmountTransfer />
            </Router>
        </Provider>);
        expect(container.firstChild).toMatchSnapshot();
    });
})