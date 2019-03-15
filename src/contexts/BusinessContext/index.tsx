import * as React from 'react';
import AffiliatedParty from '../../models/affilicatedParty.model';
import { BusinessContextState, BusinessProviderState } from './types';

// Business context conatining all information related to business like accountant details
export const BusinessContext = React.createContext<BusinessContextState>({
  affiliatedPartyDetails: null,
  updateAffiliatedParty: () => {},
});

export const BusinessConsumer = BusinessContext.Consumer;

export class BusinessProvider extends React.Component<{}, BusinessProviderState> {
  state: BusinessProviderState = {
    affiliatedPartyDetails: null,
  };

  componentDidMount() {
    // there will be an ajax request to access accoutant details from back-end
    const affilicatedParty: AffiliatedParty = {
      title: 'Mrs.',
      firstName: 'Malkeet',
      middleName: 'Mel',
      lastName: 'Singh',
      contactNumber: '0444444444',
      email: 'mel@email.com',
      address: 'Lendi, Synder 8000',
    };
    this.setState({
      affiliatedPartyDetails: affilicatedParty,
    });
  }

  // on success saving of affiliated prty details, update the context.
  updateAffiliatedParty = (affiliatedParty: AffiliatedParty) => {
    this.setState({
      affiliatedPartyDetails: affiliatedParty,
    });
  };

  render() {
    return (
      <BusinessContext.Provider value={{ ...this.state, updateAffiliatedParty: this.updateAffiliatedParty }}>
        {this.props.children}
      </BusinessContext.Provider>
    );
  }
}
