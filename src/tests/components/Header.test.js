import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

let dispatchStartLogoutPropSpy, wrapper, currentUser;

beforeEach(() => {
    dispatchStartLogoutPropSpy = jest.fn();
    currentUser = jest.fn();
    wrapper = shallow(<Header dispatchStartLogoutProp={dispatchStartLogoutPropSpy} currentUser={currentUser}/>);
});

test('should render header correctly',() => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('expect dispatchStartLogout to have been called on click', () => {
    wrapper.find('button').simulate('click');
    expect(dispatchStartLogoutPropSpy).toHaveBeenCalled();
});
