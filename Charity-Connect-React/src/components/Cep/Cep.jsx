import React, { useState, useEffect } from "react";
import CepModal from "./CepModal";
import './CepModal.css';

const Cep = () => {

    const initialObject = {
        cep: "",
        complemento: "",
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: ""
    };

    const [cep, setCep] = useState(initialObject);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const [data, setData] = useState('');

    const setChosenCep = (dataFile) => {
        setData(dataFile);
       
    }

    useEffect(() => {
        if(data)
        setCep(data)
    }, [data]);

    return (
        <div className="container">
            <CepModal
                setChosenCep={setChosenCep}
            />
            <form className="row g-3 m-3 p-3 border shadow rounded-2 form" >
                <div className="col-md-8">
                    <label htmlFor="inputCep" className="form-label mb-1 fw-bold fw-bold">
                        CEP:
                    </label>
                    <input type="text" className="form-control" id="inputCep" readOnly
                        name="cep"
                        value={cep.cep || ""}
                    />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-end border">

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
    );
};

export default Cep;