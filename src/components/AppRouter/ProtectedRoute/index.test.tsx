import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './index';
import { TokenProvider } from '../../../contexts/token-context';
import { removeTokenFromStorage, setTokenIntoStorage } from '../../../utils/token';
import { TEST_TOKEN_VALUE } from '../../../constants/token';

const protectedId = 'ProtectedRoute_test_id';
const unprotectedId = 'UnprotectedRoute_test_id';
let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <TokenProvider>
      <MemoryRouter initialEntries={['/']}>
        <Switch>
          <ProtectedRoute exact path="/" component={() => <div id={protectedId} />} />
          <Route path="/login" component={() => <div id={unprotectedId} />} />
        </Switch>
      </MemoryRouter>
    </TokenProvider>
  );
}

beforeEach(() => {
  removeTokenFromStorage();
  render();
});

describe('ProtectedRoute', () => {
  it('should redirect to /login if no token is present', () => {
    expect(wrapper.find('#' + protectedId)).toHaveLength(0);
    expect(wrapper.find('#' + unprotectedId)).toHaveLength(1);
  });

  it('should render the passed component if the token is present', () => {
    setTokenIntoStorage(TEST_TOKEN_VALUE);
    render();

    expect(wrapper.find('#' + protectedId)).toHaveLength(1);
    expect(wrapper.find('#' + unprotectedId)).toHaveLength(0);
  });
});
