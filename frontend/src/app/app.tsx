import {Outlet, ReactLocation, Router} from "react-location";
import {routes} from "../routes";
import {AuthProvider} from "../utils/auth/provider";

const location = new ReactLocation();

export default function App() {
    return (
        <Router location={location} routes={routes}>
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </Router>
    )
}