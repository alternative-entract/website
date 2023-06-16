import { ReactNode } from "react";

export type NotificationProps = {
	title: string;
	description?: string;
	linkLabel?: string;
	onClose?: () => void;
	closeable?: boolean;
};

export enum NotificationColors {
	ERROR = "red-400",
	WARNING = "yellow-400",
	INFO = "blue-400",
	SUCCESS = "green-400",
}

export type GenericNotificationProps = NotificationProps & {
	color: NotificationColors;
	icon: ReactNode;
};

export enum NotificationType {
	success = "success",
	warning = "warning",
	error = "error",
	info = "info",
}
