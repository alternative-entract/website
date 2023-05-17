import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
const Header = () => {

  const [authUser, setAuthUser] = useState();

  const getCurrentUser = async () => {
    const user = await JSON.parse(localStorage.getItem("authUser"))
    setAuthUser(user)
  }

  const handleLogout = async () => {
    localStorage.removeItem("authUser")
    window.location.href = "/"
  }

  useEffect(() => {
    getCurrentUser()
  }, [authUser]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo gesmip" width="100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Catalogue
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav">
              {!authUser && <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Connexion
                </NavLink>
              </li>}
              {!authUser && <li className="nav-item">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Inscription
                </NavLink>
              </li>}

              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  profile
                </NavLink>
              </li>

              {authUser && <li className="nav-item">
                <NavLink
                  to="/logout"
                  onClick={handleLogout}
                  className="nav-link"
                >
                  Déconnexion
                </NavLink>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
