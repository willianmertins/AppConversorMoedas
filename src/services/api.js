import axios from 'axios';

//https://free.currconv.com/api/v7/
//convert?q=USD_PHP&compact=ultra&apiKey=2ba67a2861a9a1661ecc
const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;