import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Link } from '../../components/Link';

test('should render link correctly',() => {
    const wrapper = shallow(<Link />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});


