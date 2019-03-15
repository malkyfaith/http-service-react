import { LoanLiability } from '../../models/loanLiability.model';

export interface BusinessLoansAndLiabilitiesProviderState {
  loanLiability: LoanLiability | null;
}

export interface BusinessLoansAndLiabilitiesContextState extends BusinessLoansAndLiabilitiesProviderState {
  updateLoanLiability: (loanLiability: LoanLiability) => void;
}
