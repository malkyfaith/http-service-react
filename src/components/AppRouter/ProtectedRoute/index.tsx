import * as React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { TEST_TOKEN_VALUE } from '../../../constants/token';
import { TokenConsumer } from '../../../contexts/token-context';

// Reference: https://stackoverflow.com/questions/53104165/implement-react-router-privateroute-in-typescript-project

// This is just to override the fact the 'component' is an optional prop in RouteProps
interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

class ProtectedRoute extends React.Component<ProtectedRouteProps> {
  checkAuth = (token: string | null) => token !== null && token === TEST_TOKEN_VALUE;

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <TokenConsumer>
        {({ token }) => (
          <Route
            {...rest}
            render={(routeProps) =>
              this.checkAuth(token) ? (
                <Component {...routeProps} />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: routeProps.location },
                  }}
                />
              )
            }
          />
        )}
      </TokenConsumer>
    );
  }
}

export default ProtectedRoute;
