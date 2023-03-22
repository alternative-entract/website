import Logo from "../assets/images/logo.png";
import styled from "styled-components";
const LoginPage = () => {
  return (
    <Wrapper>
      <form className="form">
        <img className="mb-4 d-none d-sm-block" src={Logo} alt="logo" />
        <h1 className="h3 mb-3 fw-normal">Coonectez-vous</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Connexion
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 260px);
  .form {
    max-width: 320px;
    width: 100%;
    margin: 1rem 0;
  }
`;

export default LoginPage;
