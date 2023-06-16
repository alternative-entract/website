import React from "react";
import {NotificationType} from "../../../components";

export type NotificationDismiss = {
	manually?: boolean;
	onPageChange?: boolean;
	afterTimeout?: number;
	oneOfKind?: string;
};

export type NotificationCreateInput = {
	title: string;
	description?: string;
	linkLabel?: string;
	onClose?: () => void;
	dismissMode: NotificationDismiss;
	type: NotificationType;
};

export type Notification = NotificationCreateInput & {
	id: string;
	dismiss: () => void;
};

export type NotificationContextType = {
	notifications: Notification[];
	notify: (newNotification: NotificationCreateInput) => () => void;
};

export type NotificationRendererProps = {
	notifications: Notification[];
};

export type NotificationProviderProps = {
	children: React.ReactNode;
};
