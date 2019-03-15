import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Button } from '@lendi-ui/button';
import Theme from '@lendi-ui/theme';
import { TEST_TOKEN_VALUE } from '../../constants/token';
import { getTokenFromStorage, removeTokenFromStorage } from '../../utils/token';

import Login from './index';

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <Theme>
      <Login />
    </Theme>
  );
}

beforeEach(() => {
  removeTokenFromStorage();
  render();
});

describe('Login', () => {
  it('should render a button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should set the token into localstorage when clicked', () => {
    let tokenValue = getTokenFromStorage();
    expect(tokenValue).toBeNull();

    wrapper.find(Button).simulate('click');

    tokenValue = getTokenFromStorage();
    expect(tokenValue).toBe(TEST_TOKEN_VALUE);
  });
});
