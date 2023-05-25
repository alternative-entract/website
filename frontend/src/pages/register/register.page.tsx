import {Button, ButtonSize, ButtonVariant, Section} from "../../components";
import {PageLayout} from "../../layouts/page.layout";
import {StepData, Stepper} from "../../components/stepper/stepper.components";
import {useNavigateToHome} from "../../features/navigation/useNavigateTo";

const Register = () => {
    const navigateToHome = useNavigateToHome()

    const steps: StepData[] = [
        {
            name: "Infos Persos",
            isAchieved: false,
        },
        {
            name: "Association",
            isAchieved: false,
        },
        {
            name: "Confirmation",
            isAchieved: false,
        }
    ]

    return (
        <PageLayout>
            <Section>
                <div className='flex flex-col items-center w-full gap-16'>
                    <div className="w-full">
                        <Stepper steps={steps} />
                    </div>

                    <form action="#" className="flex flex-col justify-center items-center w-full gap-6" >
                        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">Informations personnelles</h3>
                        <div className="flex flex-col gap-4 mb-4 w-1/2">
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900">Adresse email</label>
                                <input type="text" name="username" id="username"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                       placeholder="username.example"/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                                <input type="password" name="password" id="password"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                       placeholder="•••••••••"/>
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Confirmation du mot de passe</label>
                                <input type="password" name="confirm-password" id="confirm-password"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                       placeholder="•••••••••"/>
                            </div>
                        </div>
                        <div className="flex justify-between w-1/2">
                            <Button onClick={navigateToHome} size={ButtonSize.XL} variant={ButtonVariant.WHITE}>
                                Retour
                            </Button>
                            <Button type="submit" onClick={() => console.log()} size={ButtonSize.XL} variant={ButtonVariant.BLUE}>
                                Suivant
                            </Button>
                        </div>
                    </form>
                </div>
            </Section>
        </PageLayout>)
}

export default Register