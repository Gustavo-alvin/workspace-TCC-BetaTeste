import http from '../common/http-common';
const API_URL = "ong/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signup = (nome,nomeRep, email, senha, telefone, descAtuacao,interesse, cidade, cep, foto, sobreNos, uf, cnpj) => {
    return http.mainInstance.post(API_URL + "signup", {
        nome,
        nomeRep,
        email,
        senha,
        telefone,
        interesse,
        cidade,
        descAtuacao,
        cep,
        foto,
        sobreNos,
        uf,
        cnpj,
        
    });
};

const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("ong", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("ong");
};


const getCurrentOng = () => {
    return JSON.parse(localStorage.getItem("ong"));
};

const create = async (file, data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('nomeRep', data.nomeRep);
    formData.append('email', data.email);
    formData.append('interesse', data.interesse)
    formData.append('cidade', data.cidade)
    formData.append('senha', data.senha);
    formData.append('telefone', data.telefone);
    formData.append('descAtuacao', data.descAtuacao);
    formData.append('cep', data.cep);
    formData.append('sobreNos', data.sobreNos);
    formData.append('uf', data.uf);
    formData.append('cnpj', data.cnpj);
    formData.append('file', file);

    return http.multipartInstance.post(API_URL + "create", formData);
 
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};




const CadastroService = {
    findAll,
    findById,
    signup,
    signin,
    logout,
    getCurrentOng,
    create,
    update,
}


export default CadastroService;