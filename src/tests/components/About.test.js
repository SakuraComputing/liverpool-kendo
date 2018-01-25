import React from 'react';
import AboutPage from '../../components/About';
import { shallow } from 'enzyme';

test(' AboutPage should render correctly', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper).toMatchSnapshot();
});