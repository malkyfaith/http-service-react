import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TokenProvider } from './contexts/token-context';
import App from './components/App';
import { BusinessProvider } from './contexts/BusinessContext';
import { BusinessLoansAndLiabilitiesProvider } from './contexts/BusinessLoansAndLiabilitiesContext';

const BrowserApp: React.SFC = () => (
  <TokenProvider>
    <BusinessProvider>
      <BusinessLoansAndLiabilitiesProvider>
        <App />
      </BusinessLoansAndLiabilitiesProvider>
    </BusinessProvider>
  </TokenProvider>
);

ReactDOM.render(<BrowserApp />, document.getElementById('app'));
