import http from '../common/http-common';
const API_URL = "ong/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findAllAprovadas = () => {
    return http.mainInstance.get(API_URL + 'findAllAprovadas');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const alterarStatus = (id, data) => {
    const formData = new FormData();
    formData.append('statusONG', data.statusONG);
 
    return http.mainInstance.put(API_URL + `alterarStatus/${id}`, formData);
};

const OngService = {
    findAll,
    findAllAprovadas,
    findById,
    alterarStatus,
}

export default OngService;