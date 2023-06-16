import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { EmailField } from "../../input/emailField.component";
import { PasswordField } from "../../input";
import { Form } from "../../form";
import {
	FORM_PATTERN,
	RegisterFormData,
	SECURITY_FORM_KEYS,
	SecurityInfo,
} from "../registrationWizard.types";
import { useWizard } from "../../../utils/contexts/wizard/useWizard";
import { WizardStepperFooter } from "../../wizard";
import { t } from "../../../utils/i18n/i18n";
import { validatePassword } from "../../../utils/helpers/validatePassword";
import { InputHint } from "../../input/inputHint.component";

export const SecurityStep = () => {
	const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } =
		useWizard<RegisterFormData>();
	const { control, handleSubmit } = useForm({
		defaultValues: wizardData.securityInfo as SecurityInfo,
		mode: "onSubmit",
	});
	const [showPassword, setShowPassword] = useState(false);

	const handlePreviousAction = () => previousStep();

	const saveData = (data: SecurityInfo) =>
		nextStep({ securityInfo: data }, true);

	const renderPasswordHint = () => {
		const passwordRequirements: string[] = [
			t("form.password.hints.length"),
			t("form.password.hints.uppercase"),
			t("form.password.hints.lowercase"),
			t("form.password.hints.number"),
		];
		return <InputHint requirements={passwordRequirements} />;
	};

	return (
		<div className="flex flex-col w-full items-center gap-16">
			<h1 className="text-lg font-medium leading-none text-gray-900">
				{t("form.title.securityInfo")}
			</h1>
			<Form onSubmit={handleSubmit(saveData)}>
				<Controller
					name={SECURITY_FORM_KEYS.email}
					defaultValue=""
					control={control}
					rules={{
						required: t("form.error.EMPTY_ERROR"),
						pattern: {
							value: FORM_PATTERN.EMAIL,
							message: t("form.error.INVALID_EMAIL_ERROR"),
						},
					}}
					render={({ field, formState }) => (
						<EmailField
							label={t("form.emailLabel")}
							placeholder={t("form.emailPlaceholder")}
							error={formState.errors.email}
							{...field}
						/>
					)}
				/>

				<Controller
					name={SECURITY_FORM_KEYS.password}
					defaultValue=""
					control={control}
					rules={{
						required: t("form.error.EMPTY_ERROR"),
						minLength: {
							value: 8,
							message: t("form.password.rules.minLength", { number: 8 }),
						},
						maxLength: {
							value: 20,
							message: t("form.password.rules.maxLength", { number: 20 }),
						},
						validate: validatePassword,
					}}
					render={({ field, formState }) => (
						<PasswordField
							label={t("form.password.label")}
							error={formState.errors.password}
							showPassword={showPassword}
							onEyeClick={() => setShowPassword(!showPassword)}
							hint={renderPasswordHint()}
							{...field}
						/>
					)}
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
