import { WizardProvider } from "../../utils/contexts/wizard/provider";
import { WizardStepperHeader } from "../wizard";
import { ContactStep } from "./steps/contactStep";
import { SecurityStep } from "./steps/securityStep";
import { AssociationInfoStep } from "./steps/associationInfoStep";
import { ConfirmationStep } from "./steps/confirmationStep";
import {
	REGISTER_FORM_STEPS,
	RegisterFormData,
} from "./registrationWizard.types";
import { useState } from "react";
import { RegistrationSuccess } from "./steps/registrationSuccess";

export const RegisterWizard = () => {
	const [formData, setFormData] = useState<RegisterFormData>();

	const handleFinishForm = (data: RegisterFormData) => {
		setFormData(data);

		// TODO: Send verification email to user
		// TODO: Save formData to database, with "unverified" status
	};

	return (
		<WizardProvider
			header={<WizardStepperHeader stepNames={REGISTER_FORM_STEPS} />}
			onFinish={(wizardData) => handleFinishForm(wizardData)}
		>
			<AssociationInfoStep />
			<ContactStep />
			<SecurityStep />
			<ConfirmationStep />
			<RegistrationSuccess userEmail={formData?.securityInfo?.email ?? ""} />
		</WizardProvider>
	);
};
