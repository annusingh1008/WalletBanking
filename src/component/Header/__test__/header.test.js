import React from 'react';
import { render, screen} from '@testing-library/react'
import Header from '../index'
import { Provider } from 'react-redux';
import store from '../../../store/index'
import { BrowserRouter as Router } from 'react-router-dom';

describe("Header", () => {
    it('should render Signout button', () => {
        render(<Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>)

        // const element = screen.findAllByRole('span');
        // expect(element[0]).toBeInTheDocument();

    });

    it('renders properly', () => {
        const { container } = render(<Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>);
        expect(container.firstChild).toMatchSnapshot();
    });
})