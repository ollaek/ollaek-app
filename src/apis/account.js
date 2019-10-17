import axios from "axios";

const getToken = () => {
    return localStorage.token;
};

export default axios.create({
    baseURL: "http://localhost:22393/",
    headers: {
        "Authorization": `Bearer ${getToken()}`
      }
});