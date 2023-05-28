import {Button, ButtonSize, ButtonVariant} from "../button";
import {FC, MouseEvent} from "react";

interface IWizardStepperFooter {
    isFirstStep?: boolean
    isLastStep?: boolean
    onPreviousAction: () => void
}

export const WizardStepperFooter: FC<IWizardStepperFooter> = ({
    isFirstStep,
    isLastStep,
    onPreviousAction,
}) => {
    let previousButtonLabel = isFirstStep ? "Retourner à l'accueil" : "Etape précédente"
    let nextButtonLabel = isLastStep ? "Confirmer" : "Etape suivante"

    const handlePreviousButtonClick = (event: MouseEvent) => {
        event.preventDefault()
        return onPreviousAction()
    }

    return (
        <div className="flex flex-col-reverse md:flex-row w-full mx-8 md:mx-0 md:w-1/2 justify-between gap-6">
            <Button
                onClick={handlePreviousButtonClick}
                variant={ButtonVariant.WHITE}
                size={ButtonSize.XL}
            >
                {previousButtonLabel}
            </Button>
            <Button
                type="submit"
                variant={ButtonVariant.BLUE}
                size={ButtonSize.XL}
            >
                {nextButtonLabel}
            </Button>
        </div>
    )
}