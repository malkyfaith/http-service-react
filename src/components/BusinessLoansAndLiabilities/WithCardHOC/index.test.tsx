import * as React from 'react';
import { Field as FinalField, Form } from 'react-final-form';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Card from '@lendi-ui/card';
import Field from '@lendi-ui/field';
import ToggleSwitch from '@lendi-ui/toggle-switch';
import { Button } from '@lendi-ui/button';
import Alert from '@lendi-ui/alert';

import withCardHOC from '.';
import { consolidateDebtFieldData } from '../../../models/loanLiability.model';
import { mockBusinessLoansAndLiabilitiesContext } from '../../../contexts/BusinessLoansAndLiabilitiesContext/__mocks__/context';

jest.mock('../../../contexts/BusinessLoansAndLiabilitiesContext');

const TestComponent: React.FunctionComponent = () => <p>Hello World</p>;
const TestWithCard = withCardHOC(TestComponent);

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
let context: any;

function render() {
  wrapper = mount(
    <Theme>
      <TestWithCard title={'Test'} />
    </Theme>
  );
  wrapper.find(TestWithCard).instance().context = {
    token: '',
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
  context = wrapper.find(TestWithCard).instance().context;
}

beforeEach(() => {
  jest.resetModules();
  render();
});

describe('withCardHOC', () => {
  it('should render the passed component', () => {
    expect(wrapper.find(TestComponent)).toHaveLength(1);
  });

  it('should wrap the passed component in a Card', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it('should render a Form', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should add a ToggleSwitch wrapped in a Field', () => {
    // React Final Form Field
    let testee = wrapper.find(FinalField);
    expect(testee).toHaveLength(1);
    expect(testee.props().name).toEqual(consolidateDebtFieldData.name);
    // LUI Field
    testee = testee.find(Field);
    expect(testee).toHaveLength(1);
    // ToggleSwitch
    testee = testee.find(ToggleSwitch);
    expect(testee).toHaveLength(1);
  });

  it('should only show an Alert when the ToggleSwitch is on', () => {
    expect(wrapper.find(Alert)).toHaveLength(0);
    wrapper
      .find(Form)
      .instance()
      .setState({ state: { values: { [consolidateDebtFieldData.name]: true } } });
    wrapper.update();
    expect(wrapper.find(Alert)).toHaveLength(1);
  });

  it('should add a Save button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should call the save function when save is clicked', () => {
    wrapper.find(TestWithCard).instance().save = jest.fn();
    wrapper.update();

    wrapper.find(Button).simulate('click');
    expect(wrapper.find(TestWithCard).instance().save).toBeCalledTimes(1);
  });

  it('should update the context when save is clicked', () => {
    wrapper.find(Button).simulate('click');
    expect(mockBusinessLoansAndLiabilitiesContext.updateLoanLiability).toBeCalledTimes(1);
  });

  // Fix this test when the onSubmit function actually makes a real call
  it('should make a request on submit', () => {
    //wrapper.find(Button).simulate('submit');
    //expect(context.get).toHaveBeenCalledTimes(1);
  });
});
