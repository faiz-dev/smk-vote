import { createHashRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import AlternativeLogin from "./features/AlternativeLogin";
import App from "./features/App";
import { ErrorPage } from "./features/ErrorPages";
import HalHasil from "./features/Hal-Hasil";
import Menu from "./features/Menu";
import Login from "./features/Login";
import PilihVote from "./features/PilihVote";
import Sukses from "./features/Sukses";
import Voting from "./features/Voting";
import VotingPramuka from "./features/VotingPramuka";
import VotingOsis6 from "./features/VoteOsis/Dela";


const routes = createHashRouter([
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
        path: '/login',
        element: 
            <AuthProvider>
                <Login/>
            </AuthProvider>
    },
    {
        path: '/login/alt',
        element: 
            <AuthProvider>
                <AlternativeLogin />
            </AuthProvider>
    },
    {
        path: '/menu',
        element: 
            <AuthProvider>
                <Menu />
            </AuthProvider>
    },
    {
        path: '/dev/votingpramuka',
        element: 
            <AuthProvider>
                <VotingPramuka />
            </AuthProvider>
    },
    {
        path: '/voting/:periodeId',
        element: 
            <AuthProvider>
                <VotingOsis6 />
            </AuthProvider>
    },

    {
        path: '/sukses',
        element: 
            <AuthProvider>
                <Sukses />
            </AuthProvider>
    },
    {
        path: '/dev/hasil',
        element: 
            <AuthProvider>
                <HalHasil />
            </AuthProvider>
    }
])

export default routes