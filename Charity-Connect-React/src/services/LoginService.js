import http from '../common/http-common';
const API_URL = "auth/";

const login = (username, password) => {
    return http.mainInstance.post(API_URL + 'login', { username, password });
};

const LoginService = {
    login,
}

export default LoginService;