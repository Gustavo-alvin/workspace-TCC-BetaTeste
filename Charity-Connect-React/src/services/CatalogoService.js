import http from '../common/http-common';
const API_URL = "ong/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};




const CatalogoService = {
    findAll,
    findById,
   
}

export default CatalogoService;