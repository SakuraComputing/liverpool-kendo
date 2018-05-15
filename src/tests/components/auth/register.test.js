import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Register from '../../../components/auth/Register';


describe('Register Component', () => {
   it('should render correctly', () => {
      const wrapper = shallow(<Register />);
      expect(toJSON(wrapper)).toMatchSnapshot();
   });
});
