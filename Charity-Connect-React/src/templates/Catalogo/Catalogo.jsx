import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Menu/Sidebar";
import "./Catalogo.css";
import { useEffect, useState } from "react";
import MenuBar from "../../components/Menu/MenuBar";
import Footer from "../../components/Footer/Footer";
import OngService from "../../services/OngService";

function Catalogo() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [cidades, setCidades] = useState([]);
  const [interesses, setInteresses] = useState([]);

  useEffect(() => {
    OngService.findAllAprovadas()
      .then((response) => {
        const ongs = response.data;
        setOngs(ongs);

        const uniqueCidades = [...new Set(ongs.map((ong) => ong.cidade))];
        setCidades(uniqueCidades);

        const uniqueInteresses = [...new Set(ongs.map((ong) => ong.interesse))];
        setInteresses(uniqueInteresses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredOngs = ongs.filter((ong) => {
    const matchesSearch = ong.nome
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSearchDesc = ong.descAtuacao
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity ? ong.cidade === selectedCity : true;
    const matchesInterest = selectedInterest
      ? ong.interesse === selectedInterest
      : true;
    return (
      (matchesSearch || matchesSearchDesc) && matchesCity && matchesInterest
    );
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
              {cidades.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>
          <div className="select-wrapper">
            <select
              id="interestsSelect"
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
            >
              <option value="">Selecione um Interesse</option>
              {interesses.map((interesse) => (
                <option key={interesse} value={interesse}>
                  {interesse}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="catalog">
        <ul className="catalog-items">
          {filteredOngs.map((ong) => (
            <li className="items" key={ong.id}>
              <div className="img-ong">
                <img
                  src={ong.foto ? "data:image/jpeg;base64," + ong.foto : ""}
                  alt=""
                />
              </div>
              <div className="info-ongs">
                <h2 id="titulo-ong">{ong.nome}</h2>
                <p id="desc">{ong.descAtuacao}</p>
                <button
                  type="button"
                  className="know-more"
                  onClick={() => ver(ong.id)}
                  id="botaocatalogo"
                >
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
