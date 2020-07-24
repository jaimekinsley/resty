const NO_BODY_METHODS = ['GET', 'DELETE'];

export const fetchAPI = (api, method, jsonBody) => {
  return fetch(api, {
    method: method,
    headers: NO_BODY_METHODS.includes(method) ? null : {
      'Content-Type': 'application/json'
    },
    body: NO_BODY_METHODS.includes(method) ? null : JSON.stringify(jsonBody)
  })
    .then(res => res.json());
};
