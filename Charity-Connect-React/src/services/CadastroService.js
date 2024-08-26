import http from '../common/http-common';
const API_URL = "ong/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const CadastroService = {
    findAll,
    findById,
}

export default CadastroService;