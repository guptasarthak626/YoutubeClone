import axios from 'axios';

const KEY ="AIzaSyCaSn97YaBttNZuZKH6vFjowgcGjnr7Wro";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});