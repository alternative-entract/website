import {
    GenericNotificationProps,
    NotificationColors,
    NotificationProps,
    NotificationType,
} from "./notification.types";

import {
    Body,
    CloseAction,
    Container,
    MessageDescription,
    MessageLink,
    Title,
} from "./notification.styles";
import { Cancel } from "../icon";
import { BadgeError, BadgeInfo, BadgeSuccess, BadgeWarning } from "../badge";

export const GenericNotification = ({
    color,
    title,
    description,
    linkLabel,
    closeable = false,
    onClose,
    icon,
}: GenericNotificationProps) => (
    <Container className={`border border-l-${color} bg-grey-100 rounded-lg`}>
        <div>{icon}</div>

        <Body>
            <Title className="text-gray-800">{title}</Title>
            {description && (
                <MessageDescription className="text-gray-800">
                    {description}
                </MessageDescription>
            )}
            {linkLabel && (
                <MessageLink className="text-blue-500">{linkLabel}</MessageLink>
            )}
        </Body>

        {closeable && (
            <CloseAction
                className="text-grey-800"
                onClick={onClose}
                data-testid="notification-close"
            >
                <Cancel />
            </CloseAction>
        )}
    </Container>
);

export const ErrorNotification = (props: NotificationProps) => (
    <GenericNotification
        color={NotificationColors.ERROR}
        icon={<BadgeError />}
        {...props}
    />
);

export const SuccessNotification = (props: NotificationProps) => (
    <GenericNotification
        color={NotificationColors.SUCCESS}
        icon={<BadgeSuccess />}
        {...props}
    />
);

export const InfoNotification = (props: NotificationProps) => (
    <GenericNotification
        color={NotificationColors.INFO}
        icon={<BadgeInfo />}
        {...props}
    />
);

export const WarningNotification = (props: NotificationProps) => (
    <GenericNotification
        color={NotificationColors.WARNING}
        icon={<BadgeWarning />}
        {...props}
    />
);

export const Notification = ({
    type,
    ...props
}: NotificationProps & { type: NotificationType }) => {
    if (type === NotificationType.error) {
        return <ErrorNotification {...props} />;
    }
    if (type === NotificationType.success) {
        return <SuccessNotification {...props} />;
    }
    if (type === NotificationType.warning) {
        return <WarningNotification {...props} />;
    }

    return <InfoNotification {...props} />;
};
