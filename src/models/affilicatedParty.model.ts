export default interface AffiliatedParty {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  address: string;
}

export const title = {
  name: 'title',
};

export const firstName = {
  name: 'firstName',
  parse: (value: string) => value.trim(),
  validate: (value: string) => (value === '' ? 'Please enter Firstname.' : undefined),
};

export const middleName = {
  name: 'middleName',
  parse: (value: string) => value.trim(),
};
export const lastName = {
  name: 'lastName',
  parse: (value: string) => value.trim(),
};
export const contactNumber = {
  name: 'contactNumber',
  parse: (value: string) => value.trim(),
};
export const email = {
  name: 'email',
  validate: (value: string) => (value === '' ? 'Please enter email.' : undefined),
  parse: (value: string) => value.trim(),
};
export const address = {
  name: 'address',
  parse: (value: string) => value.trim(),
};
