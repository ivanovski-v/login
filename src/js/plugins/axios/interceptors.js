const tokenKey = "userToken";

/// On Request
function setToken(request) {
  if (!request.url.includes("auth")) {
    request.headers["x-access-token"] = localStorage.getItem(tokenKey);
  }
}

/// On Response
function addTokenOnLogin(response) {
  if (response.config.url.includes("login")) {
    localStorage.setItem(tokenKey, response.data.token);
  }

  return response;
}

function getClearResponse(response) {
  return response.data;
}

function onError(error) {
  console.dir(error);
  return Promise.reject(error);
}

export default function (axios) {
  axios.interceptors.request.use(setToken);
  axios.interceptors.response.use(addTokenOnLogin);
  axios.interceptors.response.use(getClearResponse, onError);
}
