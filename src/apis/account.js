import axios from "axios";

const getToken = () => {
    return localStorage.token;
};

export default axios.create({
    baseURL: "http://localhost:6894/",
    headers: {
        "Authorization": `Bearer ${getToken()}`
      }
});