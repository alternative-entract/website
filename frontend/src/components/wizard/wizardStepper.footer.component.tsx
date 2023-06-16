import { Button, ButtonSize, ButtonVariant } from "../button";
import { FC, MouseEvent } from "react";
import { t } from "../../utils/i18n/i18n";

interface IWizardStepperFooter {
	isFirstStep?: boolean;
	isLastStep?: boolean;
	onPreviousAction: () => void;
}

export const WizardStepperFooter: FC<IWizardStepperFooter> = ({
	isFirstStep,
	isLastStep,
	onPreviousAction,
}) => {
	const prevLabel = isFirstStep
		? t("wizard.actions.returnToHome")
		: t("wizard.actions.previousStep");
	const nextLabel = isLastStep
		? t("wizard.actions.confirm")
		: t("wizard.actions.nextStep");

	const handlePreviousButtonClick = (event: MouseEvent) => {
		event.preventDefault();
		return onPreviousAction();
	};

	return (
		<div className="flex flex-col-reverse md:flex-row w-full mx-8 md:mx-0 justify-between gap-6">
			<Button
				onClick={handlePreviousButtonClick}
				variant={ButtonVariant.WHITE}
				size={ButtonSize.XL}
			>
				{prevLabel}
			</Button>
			<Button type="submit" variant={ButtonVariant.BLUE} size={ButtonSize.XL}>
				{nextLabel}
			</Button>
		</div>
	);
};
