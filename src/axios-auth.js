import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-blog-62383.firebaseio.com'
});

// instance.defaults.headers.common('Authorization') = 'Token'
export default instance