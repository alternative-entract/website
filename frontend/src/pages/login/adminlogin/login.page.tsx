import {useContext, useState} from "react";
import {AuthContext} from "../../../utils/contexts/auth/context";
import {userMock} from "../../../data/userMock";
import {Button, ButtonSize, ButtonVariant, PinPad, TextField, Section} from "../../../components";
import {PageLayout} from "../../../layouts/page.layout";
import {t} from "../../../utils/i18n/i18n";

const AdminLogin = () => {
    const { login } = useContext(AuthContext);
    const [pin, setPin] = useState<string>('');

    const handleLogin = () => {
        login(userMock.email, userMock.password)
    }

    const resetInput = () => {
        setPin('');
    }

    const handlePinChange = (pinValue: string) => {
        setPin(pin + pinValue);
    }

    return (
        <PageLayout>
						<Section>
								<div className="flex items-center justify-center h-full">
											<div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 rounded-lg shadow-xl">
													<h2 className="text-2xl font-bold text-gray-900 ">
															{t("form.title.adminLogin")}
													</h2>
													<form className="flex flex-col md:items-start mt-8 space-y-6">
															<TextField value={pin} isReadonly name="pinpad-textfield" />
															<PinPad onChange={handlePinChange}  />
															<div className="flex gap-2">
																	<Button size={ButtonSize.XL} variant={ButtonVariant.WHITE} onClick={resetInput}>
																			{t("form.actions.clean")}
																	</Button>
																	<Button type="submit" size={ButtonSize.XL} variant={ButtonVariant.AMBER} onClick={handleLogin}>
																			{t("form.actions.connect")}
																	</Button>
															</div>

													</form>
											</div>
									</div>
							</Section>
				</PageLayout>

    )
}

export default AdminLogin
