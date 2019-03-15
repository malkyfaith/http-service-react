import { HTTPMethods } from ".";
import { TEST_TOKEN_VALUE } from '../../constants/token';

describe('HTTPMethods', () => {
it('should initialise the token to null when not given', () => {
    const obj = new HTTPMethods();
    expect(obj.getToken()).toBeNull();
  });

  it('should be able to pass the token in the constructor', () => {
    const obj = new HTTPMethods(TEST_TOKEN_VALUE);
    expect(obj.getToken()).toEqual(TEST_TOKEN_VALUE);
  });

  it('should be able to set the token', () => {
    const obj = new HTTPMethods();
    expect(obj.getToken()).toBeNull();
    obj.setToken(TEST_TOKEN_VALUE);
    expect(obj.getToken()).toEqual(TEST_TOKEN_VALUE);
  });
});