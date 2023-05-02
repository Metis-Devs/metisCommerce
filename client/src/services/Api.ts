import axios from "axios";
axios.defaults.baseURL = (process.env.REACT_APP_SERVER_URL)

export default class ApiService {

    static token = localStorage.getItem("token")

    static getPrivate(path: string) {
        return axios.get(path, {
            headers: { token: ApiService.token },
        });
    }

    static postPrivate(path: string, body: Object) {
        return axios.post(path, body, {
            headers: { token: ApiService.token },
        });
    }

    static putPrivate(path: string, body: Object) {
        return axios.put(path, body, {
            headers: { token: ApiService.token },
        });
    }

    static deletePrivate(path: string) {
        return axios.delete(path, {
            headers: { token: ApiService.token },
        })
    }

    static getPublic(path: string) {
        return axios.get(path);
    }

    static postPublic(path: string, body: Object) {
        return axios.post(path, body);
    }

    static putPublic(path: string, body: Object) {
        return axios.put(path, body);
    }

}