import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GoogleMap from '../../components/GoogleMap';

test('should render the Google Map component',() => {
    const wrapper = shallow(<GoogleMap />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
