import {useContext, useState} from "react";
import {AuthContext} from "../../../contexts/auth/context";
import {userMock} from "../../../userMock";
import {PinPad} from "../../../components/pinpad/pinpad.component";
import {InputText} from "../../../components/input";
import {Button, ButtonSize, ButtonVariant, Section} from "../../../components";
import {PageLayout} from "../../../layouts/page.layout";

const AdminLogin = () => {
    const { login } = useContext(AuthContext);
    const [pin, setPin] = useState<string>('');

    const handleLogin = () => {
        login(userMock.email)
    }

    const resetInput = () => {
        setPin('');
    }

    const handlePinChange = (pinValue: string) => {
        setPin(pin + pinValue);
    }

    return (
        <PageLayout>
            <Section>
                <div className="flex items-center justify-center h-full">
                    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 ">
                            Connexion à l'espace administrateur
                        </h2>
                        <form className="flex flex-col md:items-start mt-8 space-y-6" action="login">
                            <InputText value={pin} isReadonly />
                            <PinPad onChange={handlePinChange}  />
                            <div className="flex gap-2">
                                <Button size={ButtonSize.XL} variant={ButtonVariant.WHITE} onClick={resetInput}>
                                    Effacer
                                </Button>
                                <Button type="submit" size={ButtonSize.XL} variant={ButtonVariant.AMBER} onClick={handleLogin}>
                                    Se connecter
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>

            </Section>
        </PageLayout>

    )
}

export default AdminLogin