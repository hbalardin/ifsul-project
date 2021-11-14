import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:3333' });

export * from './answers';
export * from './auth';
export * from './questions';
export * from './registers';
export * from './steps';
