import axios from 'axios';

const KEY = 'AIzaSyDt2fV2LKS8L3lJpQrerhHfTFh0NOy9ZOo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})