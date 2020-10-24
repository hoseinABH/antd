import axios from 'axios';

const KEY = 'AIzaSyAa8XmR4e64sRU_y2imeSpY0Ip3PkxMzEk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: `${KEY}`,
  },
});
