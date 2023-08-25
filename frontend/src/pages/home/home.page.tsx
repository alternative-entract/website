import { PageLayout } from "../../layouts/page.layout";
import {
    ArrowRightIcon,
    Button,
    ButtonSize,
    ButtonVariant,
    Section,
} from "../../components";
import {
    useNavigateToLoginAdmin,
    useNavigateToLoginMember,
    useNavigateToRegisterMember,
    useNavigateToProduct,
} from "../../features/navigation/useNavigateTo";
import { t } from "../../utils/i18n/i18n";

const Home = () => {
    const navigateToMemberLogin = useNavigateToLoginMember();
    const navigateToRegisterMember = useNavigateToRegisterMember();
    const navigateToAdminLogin = useNavigateToLoginAdmin();
    const navigateToProducts = useNavigateToProduct();

    const onMemberClick = () => {
        navigateToMemberLogin();
    };

    const onAdminClick = () => {
        navigateToAdminLogin();
    };

    const onProductsClick = () => {
        navigateToProducts();
    };

    return (
        <PageLayout>
            <Section className="justify-center items-center gap-16">
                <div className="text-center">
                    <p className="text-lg sm:text-2xl text-gray-900 font-semibold">
                        {t("home.mainTitle")}
                    </p>
                    <p className="text-md sm:text-xl text-gray-400 font-semibold">
                        {t("home.subTitle")}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center gap-2 items-stretch">
                    <Button
                        variant={ButtonVariant.BLUE}
                        size={ButtonSize.XL}
                        onClick={onMemberClick}
                    >
                        {t("home.memberLabel")}
                        <ArrowRightIcon />
                    </Button>
                    <Button
                        variant={ButtonVariant.AMBER}
                        size={ButtonSize.XL}
                        onClick={onAdminClick}
                    >
                        {t("home.adminLabel")}
                        <ArrowRightIcon />
                    </Button>
                    <Button
                        variant={ButtonVariant.BLACK}
                        size={ButtonSize.XL}
                        onClick={onProductsClick}
                    >
                        {t("products.title")}
                        <ArrowRightIcon />
                    </Button>
                </div>
                <div className="mt-4 inline-flex gap-1">
                    <p className="text-gray-600">{t("home.notYetMember")}</p>
                    <span
                        onClick={navigateToRegisterMember}
                        className="text-blue-500 font-bold cursor-pointer"
                    >
                        {t("home.register")}
                    </span>
                </div>
            </Section>
        </PageLayout>
    );
};

export default Home;
