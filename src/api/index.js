const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;
const API_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

const request = async (endpoint, method = "GET", data = null) => {
  const requestConfig = {
    method,
    headers: {
      Authorization: `Bearer ${REACT_APP_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  if (method === "POST" || method === "PATCH")
    requestConfig.body = JSON.stringify(data);

  const url = `${API_URL}${endpoint}`;

  const response = await fetch(url, requestConfig);

  if (!response.ok) throw new Error(response.statusText);

  const getData = await response.json();

  if (!getData) {
    throw new Error("Something happened - no data");
  }

  return getData;
};

const get = (endpoint) => request(endpoint);

const post = (endpoint, data) => request(endpoint, "POST", data);

const patch = (endpoint, data) => request(endpoint, "PATCH", data);

const _delete = (endpoint) => request(endpoint, "DELETE");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  post,
  patch,
  delete: _delete,
};
