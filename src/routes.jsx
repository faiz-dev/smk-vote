import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import AlternativeLogin from "./features/AlternativeLogin";
import App from "./features/App";
import Vote from "./features/coconut";
import { ErrorPage } from "./features/ErrorPages";
import HalHasil from "./features/Hal-Hasil";
import HalPortal from "./features/Hal-Portal";
import KPULogin from "./features/KPULogin";
import Login from "./features/Login";
import PilihVote from "./features/PilihVote";
import Sukses from "./features/Sukses";
import VotingOsis from "./features/VoteOsis";
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
        path: '/dev/menu',
        element: 
            <AuthProvider>
                <HalPortal />
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
        path: '/dev/votingosis',
        element: 
            <AuthProvider>
                <VotingOsis />
            </AuthProvider>
    },
    {
        path: '/dev/sukses',
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
    },
    {
        path: '/dev/alpalkon',
        element: 
            <AuthProvider>
                <Vote />
            </AuthProvider>
    }
])

export default routes