import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  let wrapper = shallow(<App />, {disableLifecycleMethods: true})

  // let wrapper = shallow(<BrowserRouter><App /></BrowserRouter>, {disableLifeCycleMethods: true})
  // const div = document.createElement('div');
  expect(wrapper).toBeDefined();
  // ReactDOM.unmountComponentAtNode(div);
});
