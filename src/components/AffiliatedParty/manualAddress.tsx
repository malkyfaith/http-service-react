import * as React from 'react';
import { Grid, PaddedUnit, Unit } from './index.style';
import { Field as FinalField } from 'react-final-form';
import Field from '@lendi-ui/field';
import { Input } from '@lendi-ui/text-input';
import Dropdown from '@lendi-ui/dropdown';

interface ManualAddressProps {
  type: string;
}

/**
 * Manual Address - it represents a composite field for address.
 * Secondly, it is confugurable, which mean if you you pass 'businessAddress' as a type
 * You will have an address object like
 * businessAddress :{
 * unitNo:1,
 * streetNo: 33,
 * streetName: 'semothing'
 * streeType: Road,
 * suburb: 'North Sydney'
 * state: 'NSW',
 * postcode: '2000'
 * }
 */
export class ManualAddress extends React.Component<ManualAddressProps, {}> {
  streetType = [
    {
      value: 'road',
      label: 'Road',
    },
    {
      value: 'street',
      label: 'Street',
    },
  ];
  states = [
    {
      value: 'NSW',
      label: 'NSW',
    },
    {
      value: 'NT',
      label: 'NT',
    },
  ];
  constructor(props: { type: '' }) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Unit size={1 / 2}>
            <Grid halign="justify-center">
              <PaddedUnit offset={1 / 2} size={1 / 4}>
                <FinalField name={`${this.props.type}.unitNo`}>
                  {({ input, meta }) => {
                    return (
                      <Field label="Unit No." error={meta.error} touched={meta.touched}>
                        <Input size="sm" {...input} />
                      </Field>
                    );
                  }}
                </FinalField>
              </PaddedUnit>
              <PaddedUnit size={1 / 4}>
                <FinalField name={`${this.props.type}.streetNo`}>
                  {({ input, meta }) => {
                    return (
                      <Field label="Street No." error={meta.error} touched={meta.touched}>
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
                <FinalField name={`${this.props.type}.streetName`}>
                  {({ input, meta }) => {
                    return (
                      <Field label="Street Name" error={meta.error} touched={meta.touched}>
                        <Input size="sm" {...input} />
                      </Field>
                    );
                  }}
                </FinalField>
              </PaddedUnit>
              <PaddedUnit size={1 / 2}>
                <FinalField name={`${this.props.type}.streetType`}>
                  {({ input, meta }) => {
                    return (
                      <Field label="Street Type" error={meta.error} touched={meta.touched}>
                        <Dropdown size="md" items={this.streetType} {...input} />
                      </Field>
                    );
                  }}
                </FinalField>
              </PaddedUnit>
            </Grid>
          </Unit>
        </Grid>
        <Grid>
          <PaddedUnit offset={1 / 2} size={1 / 4}>
            <FinalField name={`${this.props.type}.suburb`}>
              {({ input, meta }) => {
                return (
                  <Field label="Suburb" error={meta.error} touched={meta.touched}>
                    <Input size="sm" {...input} />
                  </Field>
                );
              }}
            </FinalField>
          </PaddedUnit>
          <PaddedUnit size={1 / 8}>
            <FinalField name={`${this.props.type}.state`}>
              {({ input, meta }) => {
                return (
                  <Field label="State" error={meta.error} touched={meta.touched}>
                    <Dropdown size="md" items={this.states} {...input} />
                  </Field>
                );
              }}
            </FinalField>
          </PaddedUnit>
          <PaddedUnit size={1 / 8}>
            <FinalField name={`${this.props.type}.postcode`}>
              {({ input, meta }) => {
                return (
                  <Field label="Postcode" error={meta.error} touched={meta.touched}>
                    <Input size="sm" {...input} />
                  </Field>
                );
              }}
            </FinalField>
          </PaddedUnit>
        </Grid>
      </React.Fragment>
    );
  }
}
