import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {

    const [authUser, setAuthUser] = useState();

    const getCurrentUser = async () => {
        const storedUser: string = localStorage.getItem("authUser") || "{}"
        const user = await JSON.parse(storedUser)
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
                <Link className="navbar-brand" href="/">
                    <img src="logo" alt="logo gesmip" width="100" />
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
                            <Link href="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products">Catalogue</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            {!authUser && <li className="nav-item">
                                <Link href="/login">Connexion</Link>
                            </li>}
                            {!authUser && <li className="nav-item">
                                <Link href="/register">Inscription</Link>
                            </li>}

                            <li className="nav-item">
                                <Link href="/profile">Profil</Link>
                            </li>

                            {authUser && <li className="nav-item">
                                <Link href="/logout" onClick={handleLogout}>Déconnexion</Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};