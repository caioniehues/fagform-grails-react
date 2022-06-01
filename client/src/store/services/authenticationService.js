export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "/register";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = "/login";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  return fetch('http://35.215.218.99:8080/login', parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
