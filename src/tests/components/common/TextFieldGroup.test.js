import React from 'react';
import { shallow } from 'enzyme';
import TextFieldGroup from "../../../components/common/TextFieldGroup";


describe('Text Field Group Component', () => {
    it('should return a div component', () => {
        const wrapper = shallow(<TextFieldGroup />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render info',() => {
       const info = jest.fn();
       const wrapper = shallow(<TextFieldGroup info={info}/>);
       expect(wrapper).toMatchSnapshot();
    });
    it('should render error', () => {
        const error = jest.fn();
        const wrapper = shallow(<TextFieldGroup error={error}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
