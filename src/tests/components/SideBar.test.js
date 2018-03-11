import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Sidebar, mapDispatchToProps } from '../../components/SideBar';

describe('Side Bar', () => {
    it('should render the side bar correctly', () => {
        const startLogout = jest.fn();
        const wrapper = shallow(<Sidebar startLogout={startLogout}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should map dispatch to props', () => {
       const mockDispatchStartLogout = jest.fn();
       const provider = "Google";
       const actionProps = mapDispatchToProps(mockDispatchStartLogout);
       actionProps.startLogout(provider);
       expect(mockDispatchStartLogout).toHaveBeenCalledTimes(1);
    });
});
