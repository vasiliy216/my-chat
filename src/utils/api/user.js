import { Axios } from '../../core'

export default {
    login: postData => Axios.post("/user/login", postData),
    registr: postData => Axios.post("/user/registr", postData),
    verifi: hash => Axios.get("/user/verifi?hash=" + hash),
    getMe: () => Axios.get("/user/me"),
    findUser: query => Axios.get("/user/find?query=" + query),
    getUser: id => Axios.get("/user/" + id)
}