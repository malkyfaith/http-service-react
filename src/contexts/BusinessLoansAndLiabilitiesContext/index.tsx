import * as React from 'react';
import { LoanLiability } from '../../models/loanLiability.model';
import { BusinessLoansAndLiabilitiesContextState, BusinessLoansAndLiabilitiesProviderState } from './types';

export const BusinessLoansAndLiabilitiesContext = React.createContext<BusinessLoansAndLiabilitiesContextState>({
  loanLiability: null,
  updateLoanLiability: () => {},
});

export const BusinessLoansAndLiabilitiesConsumer = BusinessLoansAndLiabilitiesContext.Consumer;

export class BusinessLoansAndLiabilitiesProvider extends React.Component<{}, BusinessLoansAndLiabilitiesProviderState> {
  state: BusinessLoansAndLiabilitiesProviderState = {
    loanLiability: null,
  };

  updateLoanLiability = (loanLiability: LoanLiability) => {
    this.setState({
      loanLiability,
    });
  };

  render() {
    return (
      <BusinessLoansAndLiabilitiesContext.Provider
        value={{ ...this.state, updateLoanLiability: this.updateLoanLiability }}
      >
        {this.props.children}
      </BusinessLoansAndLiabilitiesContext.Provider>
    );
  }
}
