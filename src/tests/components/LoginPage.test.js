import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('the login page', () => {
    let wrapper, startLogin;

    beforeEach(() => {
        startLogin = jest.fn();
        wrapper = shallow(<LoginPage startLogin={startLogin} />);
    });
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should Login using Google on button click',() => {
        wrapper.find('button').at(0).simulate('click');
        expect(startLogin).toHaveBeenCalled();
    });
    it('should Login using Facebook on button click',() => {
        wrapper.find('button').at(1).simulate('click');
        expect(startLogin).toHaveBeenCalled();
    });

});


