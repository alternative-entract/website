import { Outlet, ReactLocation, Router } from "react-location";
import { routes } from "../routes";
import { AuthProvider } from "../utils/contexts/auth/provider";
import { NotificationProvider } from "../utils/contexts/notification/provider";

const location = new ReactLocation();

export default function App() {
	return (
		<Router location={location} routes={routes}>
			<AuthProvider>
				<NotificationProvider>
					<Outlet />
				</NotificationProvider>
			</AuthProvider>
		</Router>
	);
}
