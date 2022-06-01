export const dashboardService = (request) => {
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch("http://10.30.52.223:80/data", parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
