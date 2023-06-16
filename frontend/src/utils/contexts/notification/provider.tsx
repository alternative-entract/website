import { NotificationContext } from "./context";
import { useNotificationContext } from "./useNotificationContext";
import { NotificationProviderProps } from "./types";
import { NotificationRenderer } from "../../../components";

export const NotificationProvider = ({
	children,
}: NotificationProviderProps) => {
	const providerValue = useNotificationContext();

	return (
		<NotificationContext.Provider value={providerValue}>
			<NotificationRenderer notifications={providerValue.notifications} />

			{children}
		</NotificationContext.Provider>
	);
};
