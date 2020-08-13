import React from "react";
import Input from "../../components/input";
import logoImg from "../../assets/images/logo.svg";
import "./styles.css";

function Login() {
  return (
    <div id="page-login">
      <div id="top-container">
        <img src={logoImg} id="logo-img" alt="" />
        <h1 id="name">Proffy</h1>
        <p id="name-text">Sua plataforma de estudos online</p>
      </div>
      <div id="bottom-container">
        <div id="form-header">
          <h1 id="login-text">Fazer login</h1>
          <h4 id="creat-account-text">Criar uma conta</h4>
        </div>
        <fieldset>
          {/* falta colocar value */}
          <Input name="email" label="E-mail"></Input>
          <Input name="email" label="Senha"></Input>
        </fieldset>
      </div>
      <footer>
        <button type="submit">Entrar</button>
      </footer>
    </div>
  );
}

export default Login;
