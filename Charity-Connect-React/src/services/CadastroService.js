import http from '../common/http-common';
const API_URL = "ong/";
 
const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};
 
const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};
 
const signup = (nome,nomeRep, email, senha, telefone, descAtuacao,interesse, cidade, cep,uf, foto, sobreNos, endereco, bairro, cnpj) => {
    return http.mainInstance.post(API_URL + "signup", {
        nome,
        nomeRep,
        email,
        senha,
        telefone,
        interesse,
        cidade,
        uf,
        descAtuacao,
        cep,
        foto,
        sobreNos,
        endereco,
        bairro,
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
    formData.append('cidade', data.data.localidade)
    formData.append('senha', data.senha);
    formData.append('telefone', data.telefone);
    formData.append('descAtuacao', data.descAtuacao);
    formData.append('cep', data.data.cep);
    formData.append('uf', data.data.uf)
    formData.append('sobreNos', data.sobreNos);
    formData.append('endereco', data.data.logradouro);
    formData.append('bairro', data.data.bairro);
    formData.append('cnpj', data.cnpj);
    formData.append('file', file);
 
    return http.multipartInstance.post(API_URL + "create", formData);
 
};
 
const update = (id, file, data) => {
 
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('nomeRep', data.nomeRep);
    formData.append('email', data.email);
    formData.append('interesse', data.interesse)
    formData.append('cidade', data.cidade)
    formData.append('telefone', data.telefone);
    formData.append('descAtuacao', data.descAtuacao);
    formData.append('cep', data.cep);
    formData.append('uf', data.uf)
    formData.append('sobreNos', data.sobreNos);
    formData.append('endereco', data.endereco);
    formData.append('bairro', data.bairro);
    formData.append('cnpj', data.cnpj);
    formData.append('file', file);
   
 
    return http.multipartInstance.put(API_URL + `update/${id}`, formData);
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