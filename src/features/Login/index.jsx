import React, { useContext, useEffect, useState } from "react";
import { KKPrimaryButton } from "../../components/KKButton";
import {BsGoogle} from 'react-icons/bs'
import { Link, redirect, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import axios from "axios";
import AuthContext from "../../AuthContext";


const Login = () => {
    const {email, setEmail, token} = useContext(AuthContext)
    const clientId = "126423619621-gekc6bfvs9hhcd8defjd6b9k9j0kab1p.apps.googleusercontent.com"
    const [loginMsg, setLoginMsg] = useState();
    const navigate = useNavigate()
    
    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId: clientId,
              scope: 'email'
            });
         };
         gapi.load('client:auth2', initClient);
     });

    useEffect(() => {
        if (token != '') {
            submit()
        }
    }, [token])

    const onSuccess = (res) => {
        console.log('success:', res.profileObj.email);
        setEmail(res.profileObj.email)
        setLoginMsg("OAuth Success, mencoba login ke server popapp")
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    const submit = () => {
        navigate("/")
    }

    return (
        <>
            <div id="login" className="mt-20 text-center">
                <h1 className="text-center text-primary font-semibold text-3xl">Pilketos</h1>
                <p className="text-center">Gunakan hak pilihmu! <br />Login dengan akun email SMK {loginMsg} {email} {token}</p>

                

                <p className="text-center left-0 right-0 text-[1rem]">
                    Tidak bisa login google SMK? <Link to="alt" className="text-primary font-bold underline">klik di sini</Link>
                </p>
                
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    render={renderProp => (
                        <div className="mt-10">
                            <KKPrimaryButton {...renderProp}> <BsGoogle size={13} />  Klik di sini untuk login</KKPrimaryButton>                   
                        </div>
                    )}
                />
            </div>
        </>
    )
}

export default Login; 