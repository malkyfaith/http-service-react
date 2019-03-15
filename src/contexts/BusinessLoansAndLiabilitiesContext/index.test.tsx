import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { BusinessLoansAndLiabilitiesProvider, BusinessLoansAndLiabilitiesConsumer } from '.';
import { BusinessLoansAndLiabilitiesProviderState } from './types';

let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
function render() {
  component = mount(
    <Theme>
      <BusinessLoansAndLiabilitiesProvider>
        <BusinessLoansAndLiabilitiesConsumer>{(ctx) => <div />}</BusinessLoansAndLiabilitiesConsumer>
      </BusinessLoansAndLiabilitiesProvider>
    </Theme>
  );
}

describe('Business Loans and Liabilities', () => {
  beforeEach(() => {
    jest.resetModules();
    render();
  });

  it('should render', () => {
    expect(component).toBeDefined();
  });

  it('should have an object named loanLiability in its state', () => {
    expect(
      (component.find(BusinessLoansAndLiabilitiesProvider).instance().state as BusinessLoansAndLiabilitiesProviderState)
        .loanLiability
    ).toBeDefined();
  });

  it('loanLiability should be null by default', () => {
    expect(
      (component.find(BusinessLoansAndLiabilitiesProvider).instance().state as BusinessLoansAndLiabilitiesProviderState)
        .loanLiability
    ).toBeNull();
  });
});
