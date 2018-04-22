import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Board from '../../components/Board';

desribe('Board Form',() => {
    it('should render Board form correctly',() => {
        const wrapper = shallow(<Board />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
