import * as React from 'react';
import { Field as FinalField, Form } from 'react-final-form';
import Alert from '@lendi-ui/alert';
import { Button } from '@lendi-ui/button';
import Field from '@lendi-ui/field';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import { ButtonWrapper, StyledCard, AlertWrapper } from './index.style';
import { consolidateDebtFieldData } from '../../../models/loanLiability.model';
import { TokenContext } from '../../../contexts/token-context';
import { BusinessLoansAndLiabilitiesContextState } from '../../../contexts/BusinessLoansAndLiabilitiesContext/types';
import { BusinessLoansAndLiabilitiesContext } from '../../../contexts/BusinessLoansAndLiabilitiesContext';
import HTTPMethods from '../../../utils/HTTPMethods';

// Reference: https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

interface withCardHOCProps {
  title: string;
}

const withCardHOC = <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P & withCardHOCProps> {
    static contextType = TokenContext;

    getAlert = () => (
      <AlertWrapper>
        <Alert variant={'warn'}>
          Most lenders have strict policies around consolidating business loans and liabilities, please contact your BDM
          to confirm
        </Alert>
      </AlertWrapper>
    );

    getToggle = () => (
      <FinalField {...consolidateDebtFieldData}>
        {({ input, meta }) => {
          return (
            <Field error={meta.error} touched={meta.touched}>
              <ToggleSwitch size={'sm'} {...input} isChecked={input.value} label={'Consolidate this debt'} />
            </Field>
          );
        }}
      </FinalField>
    );

    onSubmit(values: any) {
      //window.alert(JSON.stringify(values, undefined, 2));
      // this.context
      //   .get('http://localhost:5000')
      //   .then(() => {
      //     console.log('Then');
      //   })
      //   .catch((err: any) => {
      //     console.log('Error');
      //     console.log(err);
      //   });
      HTTPMethods.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
          console.log('Then');
        })
        .catch((err: any) => {
          console.log('Error');
          console.log(err);
        });
    }

    save(ctx: BusinessLoansAndLiabilitiesContextState, values: any): void {
      // TODO: Save data to database
      ctx.updateLoanLiability(values);
    }

    render() {
      const { title, ...rest } = this.props;
      return (
        <BusinessLoansAndLiabilitiesContext.Consumer>
          {(ctx) => {
            return (
              <StyledCard title={title}>
                <Form onSubmit={this.onSubmit.bind(this)} initialValues={{ ...ctx.loanLiability }}>
                  {({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit}>
                      <Component {...rest as P} />
                      {this.getToggle()}
                      {values[consolidateDebtFieldData.name] && this.getAlert()}
                      <ButtonWrapper>
                        <Button variant={'primary'} isInverse onClick={() => this.save(ctx, values)}>
                          SAVE LIABILITY
                        </Button>
                      </ButtonWrapper>
                    </form>
                  )}
                </Form>
              </StyledCard>
            );
          }}
        </BusinessLoansAndLiabilitiesContext.Consumer>
      );
    }
  };
};

export default withCardHOC;
