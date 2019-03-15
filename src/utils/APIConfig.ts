import axios from 'axios';
const url = process.env.API_URL || 'http://localhost:5000';
export const v1 = axios.create({
  baseURL: `${url}/api/v1`,
});

export const v12 = axios.create({
  baseURL: `${url}/api/v1.2`,
});

export const headerToken = (token: string) => ({
  headers: {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export const httpMethods = (token: string | null) => ({
  token,
  get: (url: string) => {
    return axios.get(url, headerToken(token!));
  },
});
