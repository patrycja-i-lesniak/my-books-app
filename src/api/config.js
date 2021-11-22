import axios from 'axios';

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;

const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
    }
});
console.log(BASE_URL)

export const apiConfig = {
  booksList: '/books?view=Grid%20view',
  bookDetails: '/books',
  authorsList: '/authors?view=Grid%20view',
  authorDetails: '/authors',
};