export const isProd = process.env.NODE_ENV === 'production';

export const baseURL = isProd ? 'https://tamastudy.com' : 'http://localhost:3065';
export const secondURL = isProd ? 'https://tamastudy.com' : 'http://localhost:3065';
