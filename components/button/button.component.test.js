import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './circle-button.component';

describe('Button component', () => {
  it('renders the correct component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
  });
  it('does NOT render the TouchableOpacity when disabled', () => {
    const wrapper = shallow(<Button disabled />);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(0);
  });
  it('calls the onPress handler', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CircleButton onPress={mockFn} />);
    wrapper.find('TouchableOpacity').simulate('press');
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
