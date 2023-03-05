import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "05d84eb9-68a3-4fd4-bf8a-8a76550624e1",
},
});

export default instance;