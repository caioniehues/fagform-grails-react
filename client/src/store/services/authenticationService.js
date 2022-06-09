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
      "Accept": "application/json"
    },
    body: JSON.stringify(request.user.values),
  };

  return fetch('http://localhost:8080/api/login', parameters)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
};
