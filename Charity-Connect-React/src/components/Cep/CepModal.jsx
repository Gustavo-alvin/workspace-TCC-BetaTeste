import React, { useState, useEffect } from "react";
import CepService from "../../services/CepService";
import './CepModal.css';

const CepModal = ({ setChosenCep }) => {

    const initialObject = {
        cep: "",
        complemento: "",
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: ""
    };

    const [cep, setCep] = useState(initialObject);
    const [error, setError] = useState(false);
    const [confirm, setConfirm] = useState(true);
    const [currentCep, setCurrentCep] = useState(undefined);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const confirmFile = (event) => {
        if (cep != '' && cep.erro !== 'true') {
            setChosenCep(cep);
        }
    };

    const deleteFile = (event) => {
        setCurrentCep(undefined);
    };

    const getCep = () => {

        CepService.getCep(formData.cep).then(response => {
            const cepData = response.data;
            if (cepData.erro === 'true') {
                setError(true);
                setConfirm(true);
            } else {
                setCep(cepData);
                setError(false);
                setConfirm(false);
            }
        }).catch(e => {
            console.log(e);
        });

    };

    const clearCep = () => {
        setCep('');
        setFormData('')
        setError(false);
        setConfirm(true);
    }

    return (
        <div>
            <button type="button" className="btn btn-primary my-2"
                data-bs-toggle="modal" data-bs-target="#cepModal">
                {currentCep == undefined ? 'Buscar o CEP' : 'Buscar outro CEP'}
            </button>

            <div className="modal fade" id="cepModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Informe o CEP</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 m-3 p-3 border shadow rounded-2" >
                                <div className="col-md-6">
                                    <label htmlFor="inputCep" className="form-label mb-1 fw-bold fw-bold">
                                        {error ?
                                            <span className="text-danger fw-bold fst-italic"> CEP não encontrado! </span>
                                            : <span> CEP: </span>}
                                    </label>
                                    <input type="text" className="form-control" id="inputCep"
                                        name="cep"
                                        value={formData.cep || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-items-end">
                                    <button className="btn btn-warning " type="button"
                                        id="button" onClick={clearCep}> Limpar </button>
                                </div>
                                <div className="col-md-3 d-flex  justify-content-center align-items-end">
                                    <button className="btn btn-primary " type="button"
                                        id="button" onClick={getCep}> Buscar </button>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputLogradouro" className="form-label mb-1 fw-bold fw-bold">Logradouro:</label>
                                    <input type="text" className="form-control" readOnly id="inputLogradouro"
                                        name="logradouro"
                                        value={cep.logradouro || ""}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputBairro" className="form-label mb-1 fw-bold fw-bold">Bairro:</label>
                                    <input type="text" className="form-control" readOnly id="inputBairro"
                                        name="bairro"
                                        value={cep.bairro || ""}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputComplemento" className="form-label mb-1 fw-bold fw-bold">Complemento:</label>
                                    <input type="text" className="form-control" readOnly id="inputComplemento"
                                        name="complemento"
                                        value={cep.complemento || ""}
                                    />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputCidade" className="form-label mb-1 fw-bold fw-bold">Cidade:</label>
                                    <input type="text" className="form-control" readOnly id="inputCidade"
                                        name="localidade"
                                        value={cep.localidade || ""}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor="inputUf" className="form-label mb-1 fw-bold fw-bold">UF:</label>
                                    <input type="text" className="form-control" readOnly id="inputUf"
                                        name="uf"
                                        value={cep.uf || ""}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={deleteFile}
                                className="btn btn-warning" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={confirmFile} disabled={confirm}
                                className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CepModal;