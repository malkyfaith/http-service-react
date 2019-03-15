export interface LoanLiability {
  clearing_from_this_loan: boolean;
  category: string;
  current_balance: number;
  limit: number;
  institution: string;
  opportunity_id: string;
  application_uuid: string;
}

export const cardTypeFieldData = {
  name: 'category',
};

export const institutionFieldData = {
  name: 'institution',
};

export const totalOwingFieldData = {
  name: 'current_balance',
  parse: (value: string) => value.trim(),
  validate: (value: string) => (/^[^0-9]+$/.test(value) ? 'Value must be a number' : undefined),
};

export const limitFieldData = {
  name: 'limit',
  parse: (value: string) => value.trim(),
  validate: (value: string) => (/^[^0-9]+$/.test(value) ? 'Value must be a number' : undefined),
};

export const consolidateDebtFieldData = {
  name: 'clearing_from_this_loan',
  type: 'checkbox',
};
