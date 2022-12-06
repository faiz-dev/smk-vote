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
import axios from "axios";
const url = 'https://vote-backend.greenfield-26de5c7e.eastasia.azurecontainerapps.io/api'

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
                element: <Menu />
            },
            {
                path: '/voting/:periodeId',
                element: 
                    <VotingOsis6 />
            },
            {
                path: '/sukses',
                element: 
                    <Sukses />
            },
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
        path: '/hasil',
        element: 
            <AuthProvider>
                <HalHasil />
            </AuthProvider>
    }
    // {
    //     path: '/login/alt',
    //     element: 
    //         <AuthProvider>
    //             <AlternativeLogin />
    //         </AuthProvider>
    // },
    // {
    //     path: '/dev/votingpramuka',
    //     element: 
    //         <AuthProvider>
    //             <VotingPramuka />
    //         </AuthProvider>
    // },
])

export default routes