import axios from 'axios';

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;

//STEP: 1: config REST API
const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  },
});

export const apiConfig = {
  booksList: '/books?maxRecords=3&view=Grid%20view',
  booksDetail: '/books',
  authorsList: '/authors?maxRecords=3&view=Grid%20view',
  authorsDetail: '/authors',
};

export default axiosInstance;
