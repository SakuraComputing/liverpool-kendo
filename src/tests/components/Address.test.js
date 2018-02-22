import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Address from '../../components/Address';

test('should render the Address page',() => {
    const wrapper = shallow(<Address />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
