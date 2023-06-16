import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMatches } from "react-location";
import {
	Notification,
	NotificationContextType,
	NotificationCreateInput,
} from "./types";
import { uuidv4 } from "../../uuidv4";

export const useNotificationContext = () => {
	const currentRoutes = useMatches();
	const previousPath = useRef<string>();
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const dismissNotification = (notificationToRemoveId: string) => {
		setNotifications((previousNotifications) => [
			...previousNotifications.filter(
				(notification) => notification.id !== notificationToRemoveId
			),
		]);
	};

	const filterNotification = (filterFn: (arg0: Notification) => boolean) => {
		setNotifications((previousNotifications) =>
			[...previousNotifications].filter(filterFn)
		);
	};

	const notify = useCallback(
		(newNotificationInput: NotificationCreateInput) => {
			const notificationId = uuidv4();
			const { afterTimeout, oneOfKind } = newNotificationInput.dismissMode;
			const newNotification: Notification = {
				...newNotificationInput,
				id: notificationId,
				dismiss: () => dismissNotification(notificationId),
			};

			if (afterTimeout) {
				setTimeout(() => dismissNotification(notificationId), afterTimeout);
			}

			if (oneOfKind) {
				filterNotification((notification) => {
					// ignore notification without oneOfKind expiry
					if (!notification.dismissMode.oneOfKind) {
						return true;
					}

					return notification.dismissMode.oneOfKind !== oneOfKind;
				});
			}

			setNotifications((previousNotifications) => [
				...previousNotifications,
				newNotification,
			]);

			return () => dismissNotification(newNotification.id);
		},
		[]
	);

	useEffect(() => {
		// has the path changed?
		const currentPathName = currentRoutes[currentRoutes.length - 1]?.pathname;
		if (previousPath.current === currentPathName) {
			return;
		}

		previousPath.current = currentPathName;
		filterNotification(
			(notification) => !notification.dismissMode.onPageChange
		);
	}, [currentRoutes]);

	return useMemo<NotificationContextType>(
		() => ({ notifications, notify }),
		[notifications, notify]
	);
};
