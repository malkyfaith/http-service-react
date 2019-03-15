import * as React from 'react';
import BusinessDetails from '../BusinessDetails';
import CreditCardStoreCard from '../BusinessLoansAndLiabilities';

const __TestingGround: React.FunctionComponent = () => {
  return (
    <>
      <BusinessDetails />
      <CreditCardStoreCard title={'My title'} />
    </>
  );
};

export default __TestingGround;
