import { ReactElement, ReactNode } from "react";

export type WizardContextType = {
	currentStepIndex: number;
	nextStep: (newData: Record<string, unknown>, merge?: boolean) => void;
	previousStep: () => void;
	goToStep: (stepToGo: number) => void;
	wizardData: Record<string, unknown>;
	isLastStep: boolean;
	isFirstStep: boolean;
};

export type WizardProps = {
	children: ReactElement[];
	onFinish: (wizardData: Record<string, unknown>) => void;
	header?: ReactNode;
};
