import * as React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { CHANGE_PASSWORD, HOME_PAGE, LOGIN_PAGE, PRODUCT_DETAIL_PAGE, PROFILE, SIGNUP_PAGE } from "../helpers/routes";
import Login from '../components/pages/Login';
import SignUp from '../components/pages/SignUp';
import App from '../../App';
import AuthGuard from '../components/common/AuthGuard';
import ChangePassword from '../components/pages/ChangePassword';
import Profile from '../components/pages/Profile';
import Loader from '../components/common/Loader';


const ProductListing = React.lazy(() => import("../components/pages/ProductListing"));
const ProductDetails = React.lazy(() => import("../components/pages/ProductDetails"));

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: HOME_PAGE,
                element: <AuthGuard><React.Suspense fallback={<Loader />}><ProductListing /> </React.Suspense ></AuthGuard>
            },
            {
                path: `${PRODUCT_DETAIL_PAGE}/:id`,
                element: <AuthGuard><React.Suspense fallback={<Loader />}><ProductDetails /> </React.Suspense ></AuthGuard>
            },
            {
                path: CHANGE_PASSWORD,
                element: <AuthGuard><ChangePassword /></AuthGuard>
            },
            {
                path: PROFILE,
                element: <AuthGuard><Profile /></AuthGuard>
            }
        ]
    },
    {
        path: LOGIN_PAGE,
        element: <Login />
    },
    {
        path: SIGNUP_PAGE,
        element: <SignUp />
    }
])