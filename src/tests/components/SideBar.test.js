import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Sidebar } from '../../components/SideBar';

describe('Side Bar', () => {
    it('should render the side bar correctly', () => {
        const startLogout = jest.fn();
        const wrapper = shallow(<Sidebar startLogout={startLogout}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
