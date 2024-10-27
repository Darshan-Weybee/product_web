import * as React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { CHANGE_PASSWORD, EDIT_PROFILE, HOME_PAGE, LOGIN_PAGE, PRODUCT_DETAIL_PAGE, SIGNUP_PAGE } from "../helpers/routes";
import ProductListing from "../components/pages/ProductListing";
import ProductDetails from "../components/pages/ProductDetails";
import Login from '../components/pages/Login';
import SignUp from '../components/pages/SignUp';
import App from '../../App';
import AuthGuard from '../components/common/AuthGuard';
import ChangePassword from '../components/pages/ChangePassword';
import EditProfile from '../components/pages/EditProfile';

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: HOME_PAGE,
                element: <AuthGuard><ProductListing /></AuthGuard>
            },
            {
                path: `${PRODUCT_DETAIL_PAGE}/:id`,
                element: <AuthGuard><ProductDetails /></AuthGuard>
            },
            {
                path: CHANGE_PASSWORD,
                element: <AuthGuard><ChangePassword /></AuthGuard>
            },
            {
                path: EDIT_PROFILE,
                element: <AuthGuard><EditProfile /></AuthGuard>
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