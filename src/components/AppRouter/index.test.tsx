import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { TokenProvider } from '../../contexts/token-context';
import { TEST_TOKEN_VALUE } from '../../constants/token';
import { setTokenIntoStorage, removeTokenFromStorage } from '../../utils/token';
import Theme from '@lendi-ui/theme';

import ProtectedRoute from './ProtectedRoute';
import Login from '../Login';
import AppRouter from './index';

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <TokenProvider>
      <Theme>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </Theme>
    </TokenProvider>
  );
}

beforeEach(() => {
  removeTokenFromStorage();
  render();
});

describe('App', () => {
  it('should protect the / route', () => {
    setTokenIntoStorage(TEST_TOKEN_VALUE);
    render();

    const testee = wrapper.find(ProtectedRoute);
    expect(testee).toHaveLength(1);
    expect(testee.props().path).toEqual('/');
  });

  it('should send the user to Login if no token is found', () => {
    expect(wrapper.find(ProtectedRoute)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
