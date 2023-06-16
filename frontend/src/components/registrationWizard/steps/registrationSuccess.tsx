import { t } from "../../../utils/i18n/i18n";
import { FC } from "react";
import { Button, ButtonSize, ButtonVariant } from "../../button";

interface IRegistrationSuccess {
	userEmail: string;
}

export const RegistrationSuccess: FC<IRegistrationSuccess> = ({
	userEmail,
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<p>
				{t("form.postRegistrationInstruction")} <strong>{userEmail}.</strong>
			</p>
			<div className="w-1/2">
				<Button size={ButtonSize.XL} variant={ButtonVariant.BLUE}>
					{t("wizard.actions.returnToHome")}
				</Button>
			</div>
		</div>
	);
};
