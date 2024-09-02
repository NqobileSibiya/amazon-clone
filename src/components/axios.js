import axios from " axios";

const instance = axios.create({
    base:"http://127.0.0.1:5001/clone-2ef21/us-central1/api"
})

export default instance