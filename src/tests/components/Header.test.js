import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header, mapDispatchToProps } from '../../components/Header';

let dispatchStartLogoutProp, wrapper, currentUser;

describe('Header Page', () => {

    beforeEach(() => {
        dispatchStartLogoutProp = jest.fn();
        currentUser = jest.fn();
        wrapper = shallow(<Header dispatchStartLogoutProp={dispatchStartLogoutProp} currentUser={currentUser}/>);
    });

    it('should render header correctly',() => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('expect dispatchStartLogout to have been called on click', () => {
        wrapper.find('button').simulate('click');
        expect(dispatchStartLogoutProp).toHaveBeenCalled();
    });

    it('should map dispatch to props', () => {
        const mockDispatchStartLogout = jest.fn();
        const actionProps = mapDispatchToProps(mockDispatchStartLogout);
        actionProps.dispatchStartLogoutProp();
        expect(mockDispatchStartLogout).toHaveBeenCalledTimes(1);
    });
});


