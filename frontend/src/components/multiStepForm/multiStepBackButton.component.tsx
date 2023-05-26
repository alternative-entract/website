import {Button, ButtonSize, ButtonVariant} from "../button";
import {FC} from "react";

interface IMultiStepBackButton {
    isFirstStep: boolean
    onBack: () => void
    onExit: () => void
}

export const MultiStepFormBackButton: FC<IMultiStepBackButton> = ({ isFirstStep, onBack, onExit }) => {
    if (isFirstStep) {
        return (
            <Button
                onClick={onExit}
                variant={ButtonVariant.WHITE}
                size={ButtonSize.XL}
            >
                Revenir à l'accueil
            </Button>
        );
    }

    return (
        <Button
            onClick={onBack}
            variant={ButtonVariant.WHITE}
            size={ButtonSize.XL}
        >
            Précédent
        </Button>
    );
}