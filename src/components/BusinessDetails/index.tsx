import * as React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@lendi-ui/button';
import AffiliatedPartyForm from '../AffiliatedParty';
import AffiliatedParty from '../../models/affilicatedParty.model';
import { BusinessConsumer } from '../../contexts/BusinessContext';
import { BusinessContextState } from '../../contexts/BusinessContext/types';

export default class BusinessDetails extends React.Component {
  onSubmit(values: any) {
    window.alert(JSON.stringify(values, undefined, 2));
  }

  save(ctx: BusinessContextState, values: any): void {
    // api call, then
    ctx.updateAffiliatedParty(values);
  }
  render() {
    return (
      <BusinessConsumer>
        {(affilicatedPartyCtx) => {
          let affiliatedPartyValues: AffiliatedParty;
          if (affilicatedPartyCtx.affiliatedPartyDetails)
            affiliatedPartyValues = { ...affilicatedPartyCtx.affiliatedPartyDetails };
          return (
            <Form onSubmit={this.onSubmit} initialValues={{ ...affilicatedPartyCtx.affiliatedPartyDetails }}>
              {({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  {/**
                  In future there will be more components related to business details like ABN lookup, ANZSIC lookup, Role, Business address.
                */}
                  <AffiliatedPartyForm {...affiliatedPartyValues} />
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
                  <Button variant="primary" onClick={() => this.save(affilicatedPartyCtx, values)}>
                    Save
                  </Button>
                </form>
              )}
            </Form>
          );
        }}
      </BusinessConsumer>
    );
  }
}
