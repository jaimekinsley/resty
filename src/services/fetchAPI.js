
export const fetchAPI = (api, method, jsonBody) => {
  return fetch(api, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  })
    .then(res => res.json());
};
