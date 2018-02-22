import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Sidebar} from "../../components/SideBar";

test('should render the SideBar',() => {
    const wrapper = shallow(<Sidebar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// test('should call start logout on button click',() => {
//     const startLogout = jest.fn();
//     const wrapper = shallow(<SideBar startLogout={startLogout} />);
//     wrapper.find('button').simulate('click');
//     expect(startLogout).toHaveBeenCalled();
// });

