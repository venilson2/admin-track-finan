import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000'; // Defina a URL base

const HttpClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default HttpClient;
