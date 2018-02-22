import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Video from '../../components/Video';

test('should render the Video page',() => {
    const wrapper = shallow(<Video />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
