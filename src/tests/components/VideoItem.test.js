import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import VideoItem from '../../components/VideoItem';

test('should render the Video page',() => {
    const props = {
      title: 'Japanology',
      youTubeUrl: 'https://www.youtube.com/watch?v=8Ea2ih7uNW4',
      synopsis: '30 minute program'
    };
    const wrapper = shallow(<VideoItem props={props}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
