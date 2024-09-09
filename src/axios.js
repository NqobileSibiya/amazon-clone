import axios from " axios";

const instance = axios.create({
    base:"https://us-central1-clone-2ef21.cloudfunctions.net/api"
})

export default instance;