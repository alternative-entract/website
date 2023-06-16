import { Notification } from "./notification.component";
import { FC } from "react";
import styled from "styled-components";
import { NotificationCreateInput } from "../../utils/contexts/notification/types";

const NOTIFICATION_WIDTH = 498;
const NOTIFICATION_MARGIN = 16;

const NotificationOutlet = styled.div`
	position: fixed;
	width: ${NOTIFICATION_WIDTH}px;
	top: ${NOTIFICATION_MARGIN}px;
	right: ${NOTIFICATION_MARGIN}px;
	z-index: 999999;

	& > div {
		margin-bottom: ${NOTIFICATION_MARGIN}px;
	}
`;

type Notification = NotificationCreateInput & {
	id: string;
	dismiss: () => void;
};

interface INotificationRenderer {
	notifications: Notification[];
}

export const NotificationRenderer: FC<INotificationRenderer> = ({
	notifications,
}) => {
	return (
		<NotificationOutlet>
			{notifications.map((notification) => (
				<Notification
					{...notification}
					type={notification.type}
					key={notification.id}
					closeable={notification.dismissMode.manually}
					onClose={() => notification.dismiss()}
				/>
			))}
		</NotificationOutlet>
	);
};
