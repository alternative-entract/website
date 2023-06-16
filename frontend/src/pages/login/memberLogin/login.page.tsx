import {
	useNavigateToApp,
	useNavigateToRegisterMember,
	useNavigateToResetPassword,
} from "../../../features/navigation/useNavigateTo";
import {
	Button,
	ButtonSize,
	ButtonVariant,
	Form,
	NotificationType,
	PasswordField,
	Section,
	TextField,
} from "../../../components";
import { PageLayout } from "../../../layouts/page.layout";
import { t } from "../../../utils/i18n/i18n";
import { useAuth } from "../../../utils/contexts/auth/useAuth";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useNotification } from "../../../utils/contexts/notification/context";

const MemberLogin = () => {
	const { login, isAuthenticated } = useAuth();
	const { notify } = useNotification();
	const [showPassword, setShowPassword] = useState(false);
	const navigateToRegisterMember = useNavigateToRegisterMember();
	const navigateToResetPassword = useNavigateToResetPassword();
	const navigateToApp = useNavigateToApp();
	const { control, handleSubmit } = useForm({
		defaultValues: { email: "", password: "" },
		mode: "onSubmit",
	});

	const onAuthenticate = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => {
		try {
			await login(email, password);
		} catch (error) {
			notify({
				type: NotificationType.error,
				title: "Erreur de connexion",
				description: error as string,
				dismissMode: {
					manually: true,
					onPageChange: true,
				},
			});
		}
	};

	if (isAuthenticated) {
		navigateToApp();
		return null;
	}

	return (
		<PageLayout>
			<Section>
				<div className="flex items-center justify-center h-full">
					<div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl">
						<h2 className="text-2xl font-bold text-gray-900 ">
							{t("form.title.memberLogin")}
						</h2>
						<Form onSubmit={handleSubmit(onAuthenticate)}>
							<Controller
								name="email"
								defaultValue=""
								control={control}
								rules={{ required: t("form.error.EMPTY_ERROR") }}
								render={({ field, formState }) => (
									<TextField
										label={t("form.emailLabel")}
										placeholder={t("form.emailPlaceholder")}
										error={formState.errors.email}
										{...field}
									/>
								)}
							/>
							<Controller
								name="password"
								defaultValue=""
								control={control}
								rules={{ required: t("form.error.EMPTY_ERROR") }}
								render={({ field, formState }) => (
									<PasswordField
										label={t("form.password.label")}
										error={formState.errors.password}
										showPassword={showPassword}
										onEyeClick={() => setShowPassword(!showPassword)}
										{...field}
									/>
								)}
							/>
							<div className="flex items-start">
								<div
									onClick={navigateToResetPassword}
									className="ml-auto text-sm font-medium text-blue-600 hover:underline cursor-pointer"
								>
									{t("form.forgotPasswordLabel")}
								</div>
							</div>
							<Button
								type="submit"
								variant={ButtonVariant.BLUE}
								size={ButtonSize.XL}
							>
								{t("form.actions.connect")}
							</Button>
						</Form>
						<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
							<p className="mx-4 mb-0 text-center font-semibold">
								{t("common.or")}
							</p>
						</div>

						<div className="flex items-center justify-between pb-6">
							<Button
								onClick={navigateToRegisterMember}
								variant={ButtonVariant.WHITE}
								size={ButtonSize.XL}
							>
								{t("form.actions.register")}
							</Button>
						</div>
					</div>
				</div>
			</Section>
		</PageLayout>
	);
};

export default MemberLogin;
