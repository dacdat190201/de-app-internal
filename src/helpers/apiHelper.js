import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081/v1",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json; charset=utf-8",
    Connection: "keep-alive",
  },
});

// Interceptor để xử lý trước khi yêu cầu được gửi đi
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with a status code outside of 2xx
      console.error("Response error:", error.response);
    } else if (error.request) {
      // Request was made but no response received
      console.error("Request error:", error.request);
    } else {
      // Something else happened while setting up the request
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default function requestApi(
  endpoint,
  method,
  body,
  responseType = "json"
) {
  return instance.request({
    method: method,
    url: endpoint,
    data: body,
    responseType: responseType,
  });
}
