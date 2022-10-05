import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import WalletRecharge from '../index'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import { BrowserRouter as Router } from 'react-router-dom';


describe("WalletRecharge", () => {
    it('should render amount input element and label', () => {
        render(<Provider store={store}>
            <Router>
                <WalletRecharge />
            </Router>
        </Provider>)

        const inputElement1 = screen.getByPlaceholderText(/1000/i);
        expect(inputElement1).toBeInTheDocument();
    });

    it('should render amount label element', () => {
        render(<Provider store={store}>
            <Router>
                <WalletRecharge />
            </Router>
        </Provider>)

        const labeElement1 = screen.getByText("Amount");
        expect(labeElement1).toBeInTheDocument();
    });

    it('should render recharge button', () => {
        render(<Provider store={store}>
            <Router>
                <WalletRecharge />
            </Router>
        </Provider>);

        const buttonElement = screen.getByText("Recharge");
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders properly', () => {
        const { container } = render(<Provider store={store}>
            <Router>
                <WalletRecharge />
            </Router>
        </Provider>);
        expect(container.firstChild).toMatchSnapshot();
    });
})