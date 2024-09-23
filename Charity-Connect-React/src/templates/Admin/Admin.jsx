import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Admin.css'


import footer from "../../assets/images/newshortlogobranca-12.png";
import header from "../../assets/images/charityConnect.png";
import ongs from "../../assets/images/usericon.png";
import reclamacao from "../../assets/images/phone_icon.png"
import AdminService from '../../services/AdminService';
import MenuBar from '../../components/Menu/MenuBar';
import Footer from '../../components/Footer/Footer';

function Admin() {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/ongler");
  };
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    AdminService.findAll()
      .then((response) => {
        const ongs = response.data;
        setOngs(ongs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>

      <MenuBar />

      <div className="adm-mother">

        <div className="1son">

          <div className="buttons">

            <div className="button1">
              <button id="button-ong">
                <img src="icon-ong" id="icon-button"/>
              </button>
            </div>

            <div className="button2">
              <button id="button-cont">
                <img src="icon-cont" id="icon-button"/>
              </button>
            </div>

          </div>

        </div>

        <div className="2son">

          <div className="adm-ong">
            <div className="adm-ong-1">
              
            </div>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Admin