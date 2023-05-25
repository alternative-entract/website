import {useContext} from "react";
import {AuthContext} from "../../../contexts/auth/context";
import {userMock} from "../../../userMock";
import {useNavigateToRegisterMember} from "../../../features/navigation/useNavigateTo";
import {Button, ButtonSize, ButtonVariant, Section} from "../../../components";
import {PageLayout} from "../../../layouts/page.layout";

const MemberLogin = () => {
    const { login } = useContext(AuthContext);
    const navigateToRegisterMember = useNavigateToRegisterMember()
    const handleLogin = () => {
        login(userMock.email)
    }

    return (
        <PageLayout>
            <Section>
                <div className="flex items-center justify-center h-full">
                    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 ">
                            Connexion à l'espace adhérent
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
                                <a href="login#" className="ml-auto text-sm font-medium text-blue-600 hover:underline ">J'ai oublié mon mot de passe ?</a>
                            </div>
                            <Button type="submit" onClick={handleLogin} variant={ButtonVariant.BLUE} size={ButtonSize.XL}>
                                Se connecter
                            </Button>
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold">
                                    OU
                                </p>
                            </div>

                            <div className="flex items-center justify-between pb-6">
                                <Button onClick={navigateToRegisterMember} variant={ButtonVariant.WHITE} size={ButtonSize.XL}>
                                    Créer un compte
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </PageLayout>

    )
}

export default MemberLogin