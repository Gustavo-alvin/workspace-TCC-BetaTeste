import http from '../common/http-common';

// Defina o URL da API base para as operações relacionadas a ONGs
const API_URL = "ong/";

// Função para autenticar o usuário
const signin = async (email, senha) => {
    try {
        const response = await http.mainInstance.post(`${API_URL}signin`, {
            email,
            senha
        });
        if (response.data) {
            localStorage.setItem("ong", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
};

// Função para deslogar o usuário
const logout = () => {
    localStorage.removeItem("ong");
};

// Função para obter os dados do usuário autenticado do localStorage
const getCurrentOng = () => {
    return JSON.parse(localStorage.getItem("ong"));
};

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
    return !!getCurrentOng();
};

// Função para criar uma nova ONG (ajuste conforme necessário)
const create = async (data) => {
    try {
        const response = await http.mainInstance.post(`${API_URL}create`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar ONG:", error);
        throw error;
    }
};

// Função para listar todas as ONGs
const findAll = async () => {
    try {
        const response = await http.mainInstance.get(`${API_URL}findAll`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar todas as ONGs:", error);
        throw error;
    }
};

// Função para buscar uma ONG por ID
const findById = async (id) => {
    try {
        const response = await http.mainInstance.get(`${API_URL}findById/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar ONG com ID ${id}:`, error);
        throw error;
    }
};

// Exporta o serviço para uso em outros componentes
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
