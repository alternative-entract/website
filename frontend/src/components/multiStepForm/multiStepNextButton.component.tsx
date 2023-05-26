import {Button, ButtonSize, ButtonVariant} from "../button";
import {FC} from "react";

interface IMultiStepNextButton {
    isLastStep: boolean
    onNext: () => void
    onSubmit: () => void
}

export const MultiStepFormNextButton: FC<IMultiStepNextButton> = ({ isLastStep, onNext, onSubmit }) => {
    if (isLastStep) {
        return (
            <Button type="submit" onClick={onSubmit} variant={ButtonVariant.BLUE} size={ButtonSize.XL}>
                Confirmer
            </Button>
        );
    }

    return (
        <Button
            onClick={onNext}
            variant={ButtonVariant.BLUE}
            size={ButtonSize.XL}
        >
            Suivant
        </Button>
    );
}