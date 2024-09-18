import http from '../common/http-common';
const API_URL = "contato/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signup = (pergunta, motivoContato, nome, sobrenome, email, telefone) => {
    return http.mainInstance.post(API_URL + "signup", {
        pergunta,
        motivoContato,
        nome,
        sobrenome,
        email,
        telefone,
        
    });
};



const logout = () => {
    localStorage.removeItem("ong");
};


const getCurrentOng = () => {
    return JSON.parse(localStorage.getItem("ong"));
};

const create = async (data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('pergunta', data.pergunta);
    formData.append('email', data.email);
    formData.append('motivoContato', data.motivoContato);
    formData.append('telefone', data.telefone);
    formData.append(' sobrenome', data.sobrenome);

    return http.mainInstance.post(API_URL + "create", formData);
 
};






const CadastroService = {
    findAll,
    findById,
    signup,
    getCurrentOng,
    create,
}


export default CadastroService;