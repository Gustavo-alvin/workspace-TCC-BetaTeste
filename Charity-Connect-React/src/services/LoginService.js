import http from '../common/http-common';

const API_URL = "ong/signin";

const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("ong");
};

const getCurrentOng = () => {
    return JSON.parse(localStorage.getItem("ong"));
};


const isAuthenticated = () => {
    return !!getCurrentOng();
};


const create = async (data) => {
    try {
        const response = await http.mainInstance.post(`${API_URL}create`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar ONG:", error);
        throw error;
    }
};

const findAll = async () => {
    try {
        const response = await http.mainInstance.get(`${API_URL}findAll`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar todas as ONGs:", error);
        throw error;
    }
};

const findById = async (id) => {
    try {
        const response = await http.mainInstance.get(`${API_URL}findById/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar ONG com ID ${id}:`, error);
        throw error;
    }
};


const LoginService = {
    signin,
    logout,
    getCurrentOng,
    isAuthenticated,
    create,
    findAll,
    findById
};

export default LoginService;
