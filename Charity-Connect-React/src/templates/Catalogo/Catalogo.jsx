import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Menu/Sidebar";
import "./Catalogo.css";

import header from "../../assets/images/charityConnect.png";
import ong2 from "../../assets/images/ongs-02.png";
import ong3 from "../../assets/images/ongs-03.png";
import ong4 from "../../assets/images/ongs-04.png";
import ong5 from "../../assets/images/ongs-05.png";
import ong6 from "../../assets/images/ongs_Prancheta 1.png";
import ong7 from "../../assets/images/ongs-06.png";
import ong8 from "../../assets/images/ongs-08.png";
import footer from "../../assets/images/newnames_Prancheta 1.png";
import { useEffect, useState } from "react";
import CatalogoService from "../../services/CatalogoService";
import MenuBar from "../../components/Menu/MenuBar";
import Footer from "../../components/Footer/Footer";

function Catalogo() {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/ongler");
  };
  const [ongs, setOngs] = useState([]);


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

  const ver = (id) => {
    navigate(`/perfil/` + id)
}

  return (
    <div>
     <MenuBar />

      <section>
        <div className="input-wrapper">
          <label htmlFor="filter" className="label-pesquisa">

          </label>
          <input id="filter" type="text" placeholder="Pesquisar" />
        </div>

        <div className="category-filter">
          <div className="select-wrapper-city">
            <select id="interestsSelect-city">
              <option value="">Selecione uma Cidade</option>
              <option value="jandira">Jandira</option>
              <option value="barueri">Barueri</option>
              <option value="osasco">Osasco</option>
              <option value="carapicuiba">Carapicuíba</option>
            </select>
          </div>

          <div className="select-wrapper">
            <select id="interestsSelect">
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
          {ongs?.map((ong) => (
            <li className="items" key={ong.id}>
              <div className="img-ong">
                <img src={ong.foto ? 'data:image/jpeg;base64,' + ong.foto : ""}  alt="sorrisos do amanha " />
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
