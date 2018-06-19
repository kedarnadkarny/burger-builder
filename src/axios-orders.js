import axios from 'axios';

const instance = axios.create({
    baseURL: 'firestore-url'
});

export default instance;