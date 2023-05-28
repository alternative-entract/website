import {PageLayout} from "../../layouts/page.layout";
import {ArrowRightIcon, Button, ButtonSize, ButtonVariant, Section} from "../../components";
import {
    useNavigateToLoginAdmin,
    useNavigateToLoginMember,
    useNavigateToRegisterMember
} from "../../features/navigation/useNavigateTo";

const Home = () => {
    const navigateToMemberLogin = useNavigateToLoginMember();
    const navigateToRegisterMember = useNavigateToRegisterMember();
    const navigateToAdminLogin = useNavigateToLoginAdmin();

    const onMemberClick = () => {
        navigateToMemberLogin()
    }

    const onAdminClick = () => {
       navigateToAdminLogin()
    }

    return (
        <PageLayout>
            <Section>
                <div className="flex flex-col h-full items-center justify-center gap-16">
                    <div className="text-center">
                        <p className="text-lg sm:text-2xl text-gray-900 font-semibold">Bienvenue sur le site Internet de notre association ApproAlternative Entr'Act</p>
                        <p className="text-md sm:text-xl text-gray-400 font-semibold">Plateforme logistique d'aide humanitaire et solidaire</p>
                    </div>
                    <div className="flex flex-col w-1/2 md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center gap-2">
                        <Button variant={ButtonVariant.BLUE} size={ButtonSize.XL} onClick={onMemberClick}>
                            Espace Adhérent de l'association
                            <ArrowRightIcon/>
                        </Button>
                        <Button variant={ButtonVariant.AMBER} size={ButtonSize.XL} onClick={onAdminClick}>
                            Espace Administrateur / Bénévole
                            <ArrowRightIcon/>
                        </Button>
                    </div>
                    <div className="mt-4 inline-flex gap-1">
                        <p className="text-gray-600">
                            Pas encore adhérent ?
                        </p>
                        <span onClick={navigateToRegisterMember} className="text-blue-500 font-bold cursor-pointer">
                            Rejoignez-nous.
                        </span>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default Home