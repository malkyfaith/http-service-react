import * as React from 'react';
import { Field as FinalField } from 'react-final-form';
import Field from '@lendi-ui/field';
import { Input } from '@lendi-ui/text-input';
import { Wrapper, Grid, PaddedUnit, Unit, AccountantDetailFormGroup, Text } from './index.style';
import { Heading } from '@lendi-ui/typography';
import Dropdown from '@lendi-ui/dropdown';
import AffiliatedParty, {
  contactNumber,
  email,
  address,
  firstName,
  middleName,
  lastName,
  title,
} from '../../models/affilicatedParty.model';
import { Checkbox } from '@lendi-ui/checkbox';
import { ManualAddress } from './manualAddress';

interface AffiliatedPartyState {
  isAccountantDetailsChecked: boolean;
  isManualAddressChecked: boolean;
}

class AffiliatedPartyForm extends React.Component<AffiliatedParty, AffiliatedPartyState> {
  state = {
    isAccountantDetailsChecked: true,
    isManualAddressChecked: true,
  };
  items = [
    {
      value: 'Mr.',
      label: 'Mr.',
    },
    {
      value: 'Mrs.',
      label: 'Mrs.',
    },
  ];
  handleChange = () => {
    this.setState((prevState) => ({
      isAccountantDetailsChecked: !prevState.isAccountantDetailsChecked,
    }));
  };

  handleManualAddressChange = () => {
    this.setState((prevState) => ({
      isManualAddressChecked: !prevState.isManualAddressChecked,
    }));
  };
  render() {
    return (
      <Wrapper>
        <Heading size="xs">Accountant Details</Heading>
        <Grid>
          <PaddedUnit size={1 / 2}>
            <Text>
              <Checkbox
                label={'Do you use an accountant to file your tax return?'}
                isChecked={this.state.isAccountantDetailsChecked}
                onChange={this.handleChange}
              />{' '}
            </Text>
          </PaddedUnit>
        </Grid>
        {this.state.isAccountantDetailsChecked && (
          <AccountantDetailFormGroup>
            <Grid halign="justify-center">
              <Unit size={1 / 2}>
                <Grid>
                  <PaddedUnit size={1 / 4}>
                    <FinalField {...title}>
                      {({ input, meta }) => {
                        return (
                          <Field label="Title" error={meta.error} touched={meta.touched}>
                            <Dropdown size="md" items={this.items} {...input} />
                          </Field>
                        );
                      }}
                    </FinalField>
                  </PaddedUnit>
                  <PaddedUnit size={3 / 4}>
                    <FinalField {...firstName}>
                      {({ input, meta }) => {
                        return (
                          <Field label="First Name" error={meta.error} touched={meta.touched}>
                            <Input size="sm" {...input} />
                          </Field>
                        );
                      }}
                    </FinalField>
                  </PaddedUnit>
                </Grid>
              </Unit>
              <Unit size={1 / 2}>
                <Grid>
                  <PaddedUnit size={1 / 2}>
                    <FinalField {...middleName}>
                      {({ input, meta }) => {
                        return (
                          <Field label="Middle Name" error={meta.error} touched={meta.touched}>
                            <Input size="sm" {...input} />
                          </Field>
                        );
                      }}
                    </FinalField>
                  </PaddedUnit>
                  <PaddedUnit size={1 / 2}>
                    <FinalField {...lastName}>
                      {({ input, meta }) => {
                        return (
                          <Field label="Last Name" error={meta.error} touched={meta.touched}>
                            <Input size="sm" {...input} />
                          </Field>
                        );
                      }}
                    </FinalField>
                  </PaddedUnit>
                </Grid>
              </Unit>
            </Grid>
            <Grid>
              <PaddedUnit size={1 / 2}>
                <FinalField {...contactNumber}>
                  {({ input, meta }) => {
                    return (
                      <Field label="What is their contact number?" error={meta.error} touched={meta.touched}>
                        <Input size="sm" {...input} />
                      </Field>
                    );
                  }}
                </FinalField>
              </PaddedUnit>
              <PaddedUnit size={1 / 2}>
                <FinalField {...email}>
                  {({ input, meta }) => {
                    return (
                      <Field label="What is their contact email?" error={meta.error} touched={meta.touched}>
                        <Input size="sm" {...input} />
                      </Field>
                    );
                  }}
                </FinalField>
              </PaddedUnit>
            </Grid>
            <Grid>
              <PaddedUnit size={1 / 2}>
                <FinalField {...address}>
                  {({ input, meta }) => {
                    return (
                      <Field label="What is their address?" error={meta.error} touched={meta.touched}>
                        <Input size="sm" {...input} />
                      </Field>
                    );
                  }}
                </FinalField>
              </PaddedUnit>
              <PaddedUnit size={1 / 2}>
                <Text>
                  <Checkbox
                    label={'Manual Address Entry?'}
                    isChecked={this.state.isManualAddressChecked}
                    onChange={this.handleManualAddressChange}
                  />
                </Text>
              </PaddedUnit>
            </Grid>
            {/**Address manual entry */}
            {this.state.isManualAddressChecked && <ManualAddress type="manualAffiliatedAddress" />}
          </AccountantDetailFormGroup>
        )}
      </Wrapper>
    );
  }
}

export default AffiliatedPartyForm;
