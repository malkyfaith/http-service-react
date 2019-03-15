/// <reference types="jest-styled-components" />
import * as React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from './index.style';

describe('Wrapper', () => {
  it('should center text', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper).toHaveStyleRule('text-align', 'center');
  });
});
