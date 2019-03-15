import * as React from 'react';
import { Button } from '@lendi-ui/button';
import { Wrapper } from './index.style';
import { TEST_TOKEN_VALUE } from '../../constants/token';
import { setTokenIntoStorage } from '../../utils/token';

class Login extends React.Component<{}, {}> {
  setToken = () => {
    setTokenIntoStorage(TEST_TOKEN_VALUE);
    window.location.href = '/';
  };

  render() {
    return (
      <Wrapper>
        <Button variant="primary" onClick={this.setToken}>
          Login
        </Button>
      </Wrapper>
    );
  }
}

export default Login;
