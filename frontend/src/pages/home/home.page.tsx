import {PageLayout} from "../../layouts/page.layout";
import {ArrowRightIcon, Button, ButtonSize, ButtonVariant, Section} from "../../components";
import {useNavigateToLoginAdmin, useNavigateToLoginMember} from "../../features/navigation/useNavigateTo";

const Home = () => {
    const navigateToMemberLogin = useNavigateToLoginMember();
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
                <div className="flex flex-col gap-16">
                    <div className="text-center">
                        <p className="text-lg sm:text-2xl text-gray-900 font-semibold">Bienvenue sur le site Internet de notre association ApproAlternative Entr'Act</p>
                        <p className="text-md sm:text-xl text-gray-400 font-semibold">Plateforme logistique d'aide humanitaire et solidaire</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Button variant={ButtonVariant.BLUE} size={ButtonSize.XL} onClick={onMemberClick}>
                            Espace Adhérent de l'association
                            <ArrowRightIcon/>
                        </Button>
                        <Button variant={ButtonVariant.AMBER} size={ButtonSize.XL} onClick={onAdminClick}>
                            Espace Administrateur / Bénévole
                            <ArrowRightIcon/>
                        </Button>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default Home