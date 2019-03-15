import * as React from 'react';
import { grid, unit } from '@lendi-ui/grid';
import Theme from '@lendi-ui/theme';
import { __Header, __SideMenu, __TextWrapper, __RouterWrapper } from './index.style';
import AppRouter from '../AppRouter';
import HTTPMethods from '../../utils/HTTPMethods';
import { TokenContext } from '../../contexts/token-context';

// REMOVE WHEN GRID IS FIXED
import styled from 'styled-components';
const Unit = styled.div`
  ${unit};
`;
const Grid = styled.div`
  ${grid};
`;
//

class App extends React.Component {
  static contextType = TokenContext;

  componentDidMount() {
    HTTPMethods.setToken(this.context.token);
  }

  render() {
    return (
      <Theme>
        <__Header>
          <__TextWrapper>Self Employed</__TextWrapper>
        </__Header>
        <Grid>
          <Unit size={1 / 5}>
            <__SideMenu>
              <__TextWrapper>Menu</__TextWrapper>
            </__SideMenu>
          </Unit>
          <Unit size={4 / 5}>
            <__RouterWrapper>
              <AppRouter />
            </__RouterWrapper>
          </Unit>
        </Grid>
      </Theme>
    );
  }
}

export default App;
