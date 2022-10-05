import React from 'react';
import { getAllByRole, getByText, render } from '@testing-library/react'
import Transactions from '../index'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import { BrowserRouter as Router } from 'react-router-dom';

const mockedFirstPage = jest.fn();
const mockedLastPage = jest.fn();
const mockedPrevPage = jest.fn();
const mockedNextPage = jest.fn();

describe("Transactions", () => {
    it('should render all buttons', () => {
        render(<Provider store={store}>
            <Router>
                <Transactions />
            </Router>
        </Provider>)

        // const button = findAllByRole("Button");
    });

    it('renders properly', () => {
        const { container } = render(<Provider store={store}>
            <Router>
                <Transactions />
            </Router>
        </Provider>);
        expect(container.firstChild).toMatchSnapshot();
    });

})