import {PageLayout} from "../../layouts/page.layout";
import {t} from "../../utils/i18n/i18n";
import {Button, ButtonSize, ButtonVariant, Section} from "../../components";

const ResetPassword = () => {
	const handleResetPassword = () => console.log()

	return (
		<PageLayout>
			<Section>
				<div className="flex items-center justify-center h-full">
					<div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl">
						<h2 className="text-2xl font-bold text-gray-900 ">
							{t("form.title.forgotPassword")}
						</h2>
						<form className="mt-8 space-y-6">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
									{t("form.emailLabel")}
								</label>
								<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={t("form.emailPlaceholder")} required/>
							</div>

							<Button type="submit" onClick={handleResetPassword} variant={ButtonVariant.BLUE} size={ButtonSize.XL}>
								{t("form.actions.reset")}
							</Button>
						</form>
					</div>
				</div>
			</Section>
		</PageLayout>
	)
}

export default ResetPassword
