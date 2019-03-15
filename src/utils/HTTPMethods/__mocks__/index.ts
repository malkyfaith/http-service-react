export class HTTPMethods {
  constructor(private token: string | null = null) {}

  // Returns a promise with pre-parsed JSON response data
  get = (url: string): Promise<any> => (new Promise((resolve, reject) => {
    resolve()
  }))

  // Returns the current token
  getToken = (): string | null => this.token;

  // Sets the token to use for the Authorization header of all requests
  setToken = (token: string | null) => this.token = token;
}

export default new HTTPMethods();
