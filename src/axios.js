import axios from 'axios'
import {baseURL} from './constance/constance'
console.log(baseURL);
const instance =  axios.create({
    baseURL: baseURL
});

export default instance;