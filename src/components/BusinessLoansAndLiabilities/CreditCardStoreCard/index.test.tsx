import * as React from 'react';
import { Field as FinalField } from 'react-final-form';
import { mount, ReactWrapper } from 'enzyme';
import Dropdown from '@lendi-ui/dropdown';
import Field from '@lendi-ui/field';
import { Input } from '@lendi-ui/text-input';
import Theme from '@lendi-ui/theme';

import CreditCardStoreCard from '.';
import { LoanLiability } from '../../../models/loanLiability.model';

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

function render() {
  wrapper = mount(
    <Theme>
      <CreditCardStoreCard title={'Test Title'} />
    </Theme>
  );
}

beforeEach(() => {
  render();
});

describe('CreditCardStoreCard', () => {
  it('should render two Dropdowns and two Inputs', () => {
    expect(wrapper.find(Dropdown)).toHaveLength(2);
    expect(wrapper.find(Input)).toHaveLength(2);
  });

  it('should render Fields', () => {
    // 2 Dropdowns, 2 Input, 1 ToggleSwitch from HOC = 5
    expect(wrapper.find(FinalField)).toHaveLength(5);
    expect(wrapper.find(Field)).toHaveLength(5);
  });

  it('should render all fields with a valid name', () => {
    const testObject: LoanLiability = {
      clearing_from_this_loan: false,
      category: '',
      current_balance: 0,
      limit: 0,
      institution: '',
      opportunity_id: '',
      application_uuid: '',
    };
    const validNames = Object.keys(testObject);
    wrapper.find(FinalField).forEach((field) => expect(validNames.indexOf(field.props().name)).not.toEqual(-1));
  });
});
