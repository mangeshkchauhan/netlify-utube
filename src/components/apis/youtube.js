import axios from "axios"

const KEY='AIzaSyD0wtwYe3lzEUct6k_pKPlwcXw_lB5PL4s'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
})