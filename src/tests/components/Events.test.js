import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Events } from '../../components/Events';

test('should render Events form correctly',() => {
    const wrapper = shallow(<Events />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
