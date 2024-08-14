import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Catalogo from "../templates/Catalogo/Catalogo"
import Perfil from "../templates/Perfil/Perfil"
import Sobre from "../templates/Sobre/Sobre"
import Contato from "../templates/Contato/Contato"
import Politicas from "../templates/Politicas/Politicas"
import Termos from "../templates/Termos/Termos"
import Admin from "../templates/Admin/Admin"

import ForgotPass from "../templates/Login/ForgotPass"
import Login from "../templates/Login/Login"
import Cadastro from "../templates/Cadastro/Cadastro"


import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"
import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />


        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />

      </Routes>
    </div>
  )
}
export default AppRoutes