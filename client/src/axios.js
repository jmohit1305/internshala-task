import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://internshala-task-mohit.herokuapp.com/',
});

export default instance;