import axios from "axios";

const customError = new Error("Network error or no response");
const BASE_URL = "http://localhost:5002";
// const BASE_URL = "https://ilearn-beta.depedimuscity.com:5001";

function authenticate(account) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/users/login`, account, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.error("[user-endpoints] Error response:", err.response);
          reject(err);
        }
        console.error("[user-endpoints] Network or unknown error:", err);
        reject(customError);
      });
  });
}

function registerUser(userData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/users/register`, userData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => resolve(res.data))
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          reject(customError);
        }
      });
  });
}

export default {
  authenticate,
  registerUser,
};
