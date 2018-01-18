import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
    const wrapper = shallow(<App user="" />)
    expect(wrapper.find('.user').exists()).toBeFalsy();
    console.log(wrapper);
});

it('should render <App /> with user', () => {
    const user = 'Kurt';
    const wrapper = shallow(<App user={user} />);
    expect(wrapper.find('.user').text()).toBe(user);
});

it('call the internal method loginSuccessful', () => {
    const user = "Steffe";
    const wrapper = mount(<App user='' />);
    wrapper.instance().loginSuccessful(user);
    expect(wrapper.state().user).toBe(user);

});

it('call the internal method logout', () => {

});