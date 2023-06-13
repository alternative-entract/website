import {userMock} from "../../../data/userMock";
import {
	useNavigateToApp,
	useNavigateToRegisterMember,
	useNavigateToResetPassword
} from "../../../features/navigation/useNavigateTo";
import {Button, ButtonSize, ButtonVariant, Section} from "../../../components";
import {PageLayout} from "../../../layouts/page.layout";
import {t} from "../../../utils/i18n/i18n";
import {useAuth} from "../../../utils/contexts/auth/useAuth";

const MemberLogin = () => {
    const { login, isAuthenticated } = useAuth();
    const navigateToRegisterMember = useNavigateToRegisterMember()
    const navigateToResetPassword = useNavigateToResetPassword()
		const navigateToApp = useNavigateToApp()

		const onAuthenticate = () => login(userMock.email, userMock.password);

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
														{t("login.member.title")}
												</h2>
												<form className="mt-8 space-y-6">
														<div>
																<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
																		{t("login.member.email")}
																</label>
																<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={t("login.member.emailPlaceholder")} required/>
														</div>
														<div>
																<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
																		{t("login.member.password")}
																</label>
																<input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
														</div>
														<div className="flex items-start">
																<div onClick={navigateToResetPassword} className="ml-auto text-sm font-medium text-blue-600 hover:underline cursor-pointer">
																		{t("login.member.forgotPasswordLabel")}
																</div>
														</div>
														<Button type="submit" onClick={onAuthenticate} variant={ButtonVariant.BLUE} size={ButtonSize.XL}>
																{t("login.actions.connect")}
														</Button>
														<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
																<p className="mx-4 mb-0 text-center font-semibold">
																		{t("common.or")}
																</p>
														</div>

														<div className="flex items-center justify-between pb-6">
																<Button onClick={navigateToRegisterMember} variant={ButtonVariant.WHITE} size={ButtonSize.XL}>
																		{t("login.actions.register")}
																</Button>
														</div>
												</form>
										</div>
								</div>
						</Section>
        </PageLayout>

    )
}

export default MemberLogin
