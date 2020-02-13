import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-regrub.firebaseio.com/'
});

export default instance;