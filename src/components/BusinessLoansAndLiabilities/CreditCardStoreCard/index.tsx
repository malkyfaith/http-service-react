import * as React from 'react';
import { Field as FinalField } from 'react-final-form';
import Dropdown from '@lendi-ui/dropdown';
import Field from '@lendi-ui/field';
import { Dollar } from '@lendi-ui/icon';
import { Input } from '@lendi-ui/text-input';

import withCardHOC from '../WithCardHOC';
import { Grid, LeftPaddedUnit, RightPaddedUnit } from './index.style';
import {
  cardTypeFieldData,
  institutionFieldData,
  totalOwingFieldData,
  limitFieldData,
} from '../../../models/loanLiability.model';
import { cardTypeDropdownItems, institutionDropdownItems } from '../../../constants/loansLiabilities';

const CreditCardStoreCard: React.FunctionComponent<{}> = () => {
  return (
    <Grid halign="justify-center">
      <LeftPaddedUnit size={1 / 2}>
        <FinalField {...cardTypeFieldData}>
          {({ input, meta }) => {
            return (
              <Field label={'Card type'} error={meta.error} touched={meta.touched}>
                {/* Add name prop when LUI component fix allows */}
                <Dropdown size={'md'} {...input} items={cardTypeDropdownItems} isFullWidth />
              </Field>
            );
          }}
        </FinalField>
      </LeftPaddedUnit>
      <RightPaddedUnit size={1 / 2}>
        <FinalField {...totalOwingFieldData}>
          {({ input, meta }) => {
            return (
              <Field label={'Total Amount Owing'} error={meta.error} touched={meta.touched}>
                {/* __Replace with numerical input when LUI available */}
                <Input size={'sm'} {...input} isFullWidth before={<Dollar color="primary.500" />} />
              </Field>
            );
          }}
        </FinalField>
      </RightPaddedUnit>
      <LeftPaddedUnit size={1 / 2}>
        <FinalField {...institutionFieldData}>
          {({ input, meta }) => {
            return (
              <Field label={'Institution'} error={meta.error} touched={meta.touched}>
                {/* Add name prop when LUI component fix allows */}
                <Dropdown size={'md'} {...input} items={institutionDropdownItems} isFullWidth />
              </Field>
            );
          }}
        </FinalField>
      </LeftPaddedUnit>
      <RightPaddedUnit size={1 / 2}>
        <FinalField {...limitFieldData}>
          {({ input, meta }) => {
            return (
              <Field label={'Limit'} error={meta.error} touched={meta.touched}>
                {/* __Replace with numerical input when LUI available */}
                <Input size={'sm'} {...input} isFullWidth before={<Dollar color="primary.500" />} />
              </Field>
            );
          }}
        </FinalField>
      </RightPaddedUnit>
    </Grid>
  );
};

export default withCardHOC(CreditCardStoreCard);
