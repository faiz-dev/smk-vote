import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import AlternativeLogin from "./features/AlternativeLogin";
import App from "./features/App";
import { ErrorPage } from "./features/ErrorPages";
import HalHasil from "./features/Hal-Hasil";
import Login from "./features/Login";
import PilihVote from "./features/PilihVote";
import Sukses from "./features/Sukses";
import Voting from "./features/Voting";
import VotingPramuka from "./features/VotingPramuka";


const routes = createBrowserRouter([
    {
        path: '/',
        element: 
            <AuthProvider isProtected={true}>
                <App />
            </AuthProvider>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <PilihVote />
            },
            {
                path: '/vote/:id',
                element: <Voting />
            },
            {
                path: '/vote/:id/success',
                element: <Sukses />
            }
        ]
    },
    {
        path: '/yarn/voting',
        element: 
            <AuthProvider>
                <VotingPramuka />
            </AuthProvider>
    },
    {
        path: '/login',
        element: 
            <AuthProvider>
                <Sukses />
            </AuthProvider>
    },
    {
        path: '/login',
        element: 
            <AuthProvider>
                <Login />
            </AuthProvider>
    },
    {
        path: '/login/alt',
        element: 
            <AuthProvider>
                <AlternativeLogin />
            </AuthProvider>
    },
])

export default routes