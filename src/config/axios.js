import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://subhan24.herokuapp.com/'
    }
)