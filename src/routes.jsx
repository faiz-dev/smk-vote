import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import AlternativeLogin from "./features/AlternativeLogin";
import App from "./features/App";
import Vote from "./features/coconut";
import { ErrorPage } from "./features/ErrorPages";
import HalHasil from "./features/Hal-Hasil";
import Menu from "./features/Menu";
import Login from "./features/Login";
import PilihVote from "./features/PilihVote";
import Sukses from "./features/Sukses";
import VotingOsis from "./features/VoteOsis";
import Voting from "./features/Voting";
import VotingPramuka from "./features/VotingPramuka";
import VotingOsis3 from "./features/VoteOsis/Arun";
import VotingOsis6 from "./features/VoteOsis/Dela";
import VotingOsis8 from "./features/VoteOsis/putra";
import VotingOsis2 from "./features/VoteOsis/Alfa";



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
        path: '/voting',
        element: 
            <AuthProvider>
                <VotingOsis2 />
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