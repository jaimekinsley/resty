const NO_BODY_METHODS = ['GET', 'DELETE'];

export const fetchAPI = (api, method, jsonBody) => {
  return fetch(api, {
    method: method,
    headers: NO_BODY_METHODS.includes(method) ? {} : {
      'Content-Type': 'application/json'
    },
    body: NO_BODY_METHODS.includes(method) ? null : jsonBody
  })
    .then(res => res.json());
};
