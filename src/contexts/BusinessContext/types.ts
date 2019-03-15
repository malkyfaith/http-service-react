import AffiliatedParty from '../../models/affilicatedParty.model';

export interface BusinessProviderState {
  affiliatedPartyDetails: AffiliatedParty | null;
}

export interface BusinessContextState extends BusinessProviderState {
  updateAffiliatedParty: (acct: AffiliatedParty) => void;
}
