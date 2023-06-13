import { Route, MakeGenerics, Navigate } from 'react-location';
import { AuthWrapper } from "./pages/scope/authWrapper";
import Products from "./pages/products/products.page";
import ProductDetails from "./pages/productDetails/productDetails.page";
import NotFound from "./pages/notFound/notFound.page";
import Home from "./pages/home/home.page";
import Register from "./pages/register/register.page";
import MemberLogin from "./pages/login/memberLogin/login.page";
import AdminLogin from "./pages/login/adminlogin/login.page";
import Profile from "./pages/profile/profile.page";
import ResetPassword from "./pages/resetPassword/resetPassword.component";

export type LocationGenerics = MakeGenerics<Record<string, unknown>>;

export const routes: Route<LocationGenerics>[] = [
    { path: '/home', element: <Home /> },
    { path: '/login/member', element: <MemberLogin /> },
    { path: '/register/member', element: <Register /> },
    { path: '/reset_password', element: <ResetPassword /> },
    { path: '/login/admin', element: <AdminLogin /> },
    { path: '/', element: <Navigate to="/app" /> },
    {
        path: '/app',
        element: <AuthWrapper/>,
        children: [
            {
                path: '/',
                element: <Navigate to="products" />,
            },
            {
                path: 'products',
                children: [
                    {
                        path: '/',
                        element: <Products />,
                    },
                    {
                        path: ':productId',
                        element: <ProductDetails />
                    },
                    { path: '*', element: <NotFound /> },
                ]
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            /* { path: 'administration', element: <Administration /> }, */
            { path: '*', element: <NotFound /> },
        ],
    },
    { path: '*', element: <Navigate to="/home" /> },
]
