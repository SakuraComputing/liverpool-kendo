import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from '../../components/MainMenu';

describe('Maine Menu', () => {
    it('should render the form correctly', () => {
        const wrapper = shallow(<MainMenu/>);
        expect(wrapper).toMatchSnapshot();
    });
});