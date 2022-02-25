import Airtable from 'airtable';

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;

export const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

export const base = new Airtable({ apiKey: `${REACT_APP_API_KEY}` }).base(`${REACT_APP_DB_ID}`);
