import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App/ >', () => {
    it('should render App', () => {
        const wrapper =  shallow(<App />)
        console.log(wrapper.debug())
    })
});