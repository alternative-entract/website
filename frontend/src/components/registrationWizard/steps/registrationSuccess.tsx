import { t } from "../../../utils/i18n/i18n";
import { FC } from "react";
import { Button, ButtonSize, ButtonVariant } from "../../button";
import { useNavigateToHome } from "../../../features/navigation/useNavigateTo";
interface IRegistrationSuccess {
    userEmail: string;
}

export const RegistrationSuccess: FC<IRegistrationSuccess> = ({
    userEmail,
}) => {
    const navigateToHome = useNavigateToHome;
    const returnHome = () => {
        navigateToHome();
    }
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <p>
                {t("form.postRegistrationInstruction")}{" "}
                <strong>{userEmail}.</strong>
            </p>
            <div className="w-1/2">
                <Button size={ButtonSize.XL} variant={ButtonVariant.BLUE}
                onClick={returnHome}>
                    {t("wizard.actions.returnToHome")}
                </Button>
            </div>
        </div>
    );
};
    