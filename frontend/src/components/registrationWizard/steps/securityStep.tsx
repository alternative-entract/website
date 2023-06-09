import {useState} from "react";
import {Controller, useForm} from 'react-hook-form';
import {EmailField} from "../../input/emailField.component";
import {PasswordField} from "../../input";
import {Form} from "../../form";
import {
	FORM_PATTERN, RegisterFormData,
	SECURITY_FORM_KEYS,
	SecurityFormData
} from "../registrationWizard.types";
import {useWizard} from "../../../utils/contexts/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard";
import {t} from "../../../utils/i18n/i18n";
import {validatePassword} from "../../../utils/helpers/validatePassword";
import {InputHint} from "../../input/inputHint.component";

export const SecurityStep = () => {
	const {previousStep, nextStep, wizardData, isFirstStep, isLastStep} = useWizard<RegisterFormData>();
	const {control, handleSubmit,} = useForm({defaultValues: wizardData.securityInfo as SecurityFormData, mode: "onSubmit"});
	const [showPassword, setShowPassword] = useState(false)

	const handlePreviousAction = () => previousStep()

	const saveData = (data: SecurityFormData) =>
		nextStep({securityInfo: data}, true)

	const renderPasswordHint = () => {
		const passwordRequirements: string[] = [
			t("registration.securityInfo.password.hints.length"),
			t("registration.securityInfo.password.hints.uppercase"),
			t("registration.securityInfo.password.hints.lowercase"),
			t("registration.securityInfo.password.hints.number")
		]
		return <InputHint requirements={passwordRequirements}/>
	}

	return (
		<div className="flex flex-col w-full items-center gap-16">
			<h1 className="text-lg font-medium leading-none text-gray-900">
				{t("registration.securityInfo.title")}
			</h1>
			<Form onSubmit={handleSubmit(saveData)}>
				<Controller
					name={SECURITY_FORM_KEYS.email}
					defaultValue=""
					control={control}
					rules={{
						required: t("registration.error.EMPTY_ERROR"),
						pattern: {
							value: FORM_PATTERN.EMAIL,
							message: t("registration.error.INVALID_EMAIL_ERROR"),
						},
					}}
					render={({field, formState}) =>
						<EmailField
							label={t("registration.securityInfo.email.label")}
							placeholder={t("registration.securityInfo.email.placeholder")}
							error={formState.errors.email}
							{...field}
						/>
					}
				/>

				<Controller
					name={SECURITY_FORM_KEYS.password}
					defaultValue=""
					control={control}
					rules={{
						required: t("registration.error.EMPTY_ERROR"),
						minLength: {value: 8, message: t("registration.securityInfo.password.rules.minLength", {number: 8})},
						maxLength: {value: 20, message: t("registration.securityInfo.password.rules.maxLength", {number: 20})},
						validate: validatePassword
					}}
					render={({field, formState}) =>
						<PasswordField
							label={t("registration.securityInfo.password.label")}
							error={formState.errors.password}
							showPassword={showPassword}
							onEyeClick={() => setShowPassword(!showPassword)}
							hint={renderPasswordHint()}
							{...field}
						/>
					}
				/>

				<WizardStepperFooter
					isFirstStep={isFirstStep}
					isLastStep={isLastStep}
					onPreviousAction={handlePreviousAction}
				/>
			</Form>
		</div>
	);
};
