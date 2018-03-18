import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import KendoStudy from '../../components/KendoStudy';

describe('Kendo study',() => {
   it('should render the form correctly', () => {
       const wrapper = shallow(<KendoStudy />);
       expect(toJSON(wrapper)).toMatchSnapshot();
   })
});


