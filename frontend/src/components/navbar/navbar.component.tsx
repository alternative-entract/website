import {FC, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../contexts/auth/context";
import {useNavigateToProfile} from "../../features/navigation/useNavigateTo";

export const Navbar: FC = () => {
    const { user, isLoading, logout } = useContext(AuthContext);
    const navigateToProfile = useNavigateToProfile()

    const [authUser, setAuthUser] = useState();

    const getCurrentUser = async () => {
        const storedUser: string = localStorage.getItem("authUser") || "{}"
        const user = await JSON.parse(storedUser)
        setAuthUser(user)
    }

    const handleLogout = async () => {
        logout()
    }

    useEffect(() => {
        getCurrentUser()
    }, [authUser]);

    return (
        <nav className="fixed bg-white w-full z-20 top-0 left-0 border-gray-200">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Gesmip Logo"/>
                    <span className="self-center text-2xl text-gray-900 font-semibold whitespace-nowrap ">{`Alternative Entr'Act™`}</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {!isLoading &&
                            (user ? (
                                <>
                                    <li>
                                        <div onClick={navigateToProfile} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 cursor-pointer">Profil</div>
                                    </li>
                                    <li>
                                        <div onClick={handleLogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 cursor-pointer">Se déconnecter</div>
                                    </li>
                                </>
                            ) : null)}
                    </ul>
                </div>
            </div>
        </nav>


    );
};