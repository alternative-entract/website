import { createContext, useContext } from "react";
import { NotificationContextType } from "./types";

export const NotificationContext = createContext<NotificationContextType>({} as NotificationContextType);

export const useNotification = () => useContext(NotificationContext);
