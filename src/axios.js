import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://job-posting-portal.firebaseio.com/'
    }
)