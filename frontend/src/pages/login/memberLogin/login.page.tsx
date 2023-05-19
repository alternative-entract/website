import {useContext} from "react";
import {AuthContext} from "../../../contexts/auth/context";
import {userMock} from "../../../userMock";
import {useNavigateToRegisterMember} from "../../../features/navigation/useNavigateTo";

const MemberLogin = () => {
    const { login } = useContext(AuthContext);
    const navigateToRegisterMember = useNavigateToRegisterMember()
    const handleLogin = () => {
        console.log(userMock.email)
        login(userMock.email)
    }

    return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold text-gray-900 ">
                        Connexion à l'espace membre
                    </h2>
                    <form className="mt-8 space-y-6" action="login">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Adresse email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Mot de passe</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 -800" required/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="font-medium text-gray-500 ">Se souvenir de cet appareil</label>
                            </div>
                            <a href="login#" className="ml-auto text-sm font-medium text-blue-600 hover:underline ">Mot de passe oublié?</a>
                        </div>
                        <button type="submit" onClick={handleLogin} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                            Se connecter
                        </button>
                        <div className="flex text-sm font-medium text-gray-900 ">
                            Pas encore inscrit? <div onClick={navigateToRegisterMember} className="text-blue-600 hover:underline ">
                                Créer un compte
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default MemberLogin