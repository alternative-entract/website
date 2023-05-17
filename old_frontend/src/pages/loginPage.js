import Logo from "../assets/images/logo.png";
import styled from "styled-components";
import React, { useState } from 'react';
import ApiService from '../services/api.service';
import ToastMessage from '../components/Toast.component/toast'

const LoginPage = () => {

  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginIsdisabled, setLoginIsdisabled] = useState(false);
  

  const handleLogin = async (event) => {
    event.preventDefault();

    // Votre code de connexion ici
    try {
      setLoginIsdisabled(true)
      const response = await ApiService.post("/auth/login", {password, email})
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("authUser", JSON.stringify(data.user))
        setMessage("Conneciton succesfull!")
        window.location.href = '/';
      } else { 
        const error = await response.json();
        setMessage(error.msg);
        console.log(error);
      }
      setLoginIsdisabled(false)
      setShowToast(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseToast = () => setShowToast(false);

  return (
    <Wrapper>
      {showToast && (
        <ToastMessage message={message} onClose={handleCloseToast} />
      )}
      <form className="form" onSubmit={handleLogin}>
        <img className="mb-4 d-none d-sm-block" src={Logo} alt="logo" />
        <h1 className="h3 mb-3 fw-normal">Connectez-vous</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={loginIsdisabled} >
        {loginIsdisabled ? "Chargement en cours..." : "Connexion"}
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 0px);
  .form {
    max-width: 320px;
    width: 100%;
    margin: 1rem 0;
  }
`;

export default LoginPage;
