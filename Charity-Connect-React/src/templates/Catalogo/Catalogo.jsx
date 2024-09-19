import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Menu/Sidebar";
import "./Catalogo.css";

import { useEffect, useState } from "react";
import CatalogoService from "../../services/CatalogoService";
import MenuBar from "../../components/Menu/MenuBar";
import Footer from "../../components/Footer/Footer";

function Catalogo() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");

  useEffect(() => {
    CatalogoService.findAll()
      .then((response) => {
        const ongs = response.data;
        setOngs(ongs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredOngs = ongs.filter((ong) => {
    const matchesSearch = ong.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSearchDesc = ong.descAtuacao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity ? ong.cidade === selectedCity : true;
    const matchesInterest = selectedInterest ? ong.interesse === selectedInterest : true;

    return (matchesSearch || matchesSearchDesc) && matchesCity && matchesInterest;
  });

  const ver = (id) => {
    navigate(`/perfil/` + id);
  };

  return (
    <div>
      <MenuBar />

      <section>
        <div className="input-wrapper">
          <input
            id="filter"
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <div className="select-wrapper-city">
            <select
              id="interestsSelect-city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Selecione uma Cidade</option>
              <option value="jandira">Jandira</option>
              <option value="barueri">Barueri</option>
              <option value="osasco">Osasco</option>
              <option value="carapicuiba">Carapicuíba</option>
            </select>
          </div>

          <div className="select-wrapper">
            <select
              id="interestsSelect"
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
            >
              <option value="">Selecione um Interesse</option>
              <option value="roupa">Roupas</option>
              <option value="alimento">Alimentos</option>
              <option value="brinquedo">Brinquedos</option>
              <option value="monetaria">Monetária</option>
            </select>
          </div>
        </div>
      </section>

      <section className="catalog">
        <ul className="catalog-items">
          {filteredOngs.map((ong) => (
            <li className="items" key={ong.id}>
              <div className="img-ong">
                <img src={ong.foto ? 'data:image/jpeg;base64,' + ong.foto : ""} alt="sorrisos do amanha " />
              </div>
              <div className="info-ongs">
                <h2 id="titulo-ong">{ong.nome}</h2>
                <p id="desc">{ong.descAtuacao}</p>
                <button type="button" className="know-more" onClick={() => ver(ong.id)} id="botaocatalogo">
                  Saiba Mais
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default Catalogo;
