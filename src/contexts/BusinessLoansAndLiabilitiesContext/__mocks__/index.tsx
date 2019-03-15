import { mockBusinessLoansAndLiabilitiesContext } from './context';

export const BusinessLoansAndLiabilitiesContext = {
  Consumer(props: any) {
    return props.children(mockBusinessLoansAndLiabilitiesContext);
  },
};
