import React, { useContext, useEffect, useState } from "react";
import { KKPrimaryButton } from "../../components/KKButton";
import {BsGoogle} from 'react-icons/bs'
import { Link, redirect, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import axios from "axios";
import logo from './logo.png'
import AuthContext from "../../AuthContext";
import Swal from "sweetalert2";


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
            Swal.close()
            navigate("/")
        }
    }, [token])

    const onRequest = (res) => {
        Swal.fire({
            text: "Melakukan Autentikasi"
        })
        Swal.showLoading()
    }

    const onSuccess = (res) => {
        console.log('success:', res.profileObj.email);
        setEmail(res.profileObj.email)
        setLoginMsg("Mohon menunggu")
    };
    const onFailure = (err) => {
        console.log('failed:', err);
        Swal.fire({
            text: "Terjadi kesalahan, cek kembali koneksi anda dan pastikan menggunakan email SMK"
        })
    };

    return (
        <>
            <div id="login" className="pt-40 mt-[-10px] text-center mx-auto md:rounded-2xl md:mt-32 h-screen sm:h-auto md:bg-slate-200 md:p-14 md:w-96 relative">
                <img src={logo} alt="Logo" className="mx-auto mt-10 w-72 md:mt-0"/>
                <h1 className="text-center  font-bold text-3xl ">LOGIN</h1>
                {loginMsg}

                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    onRequest={onRequest}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}
                    render={renderProp => (
                        <div className="mt-5">
                            <button {...renderProp} className="inline-flex bg-button hover:bg-teal-500 p-3 rounded-xl"> <BsGoogle size={13} className="mt-1 mr-1"/>Klik disini untuk login</button>                   
                        </div>
                    )}
                />

                <p className="text-center text-[1rem] mt-3 mb-10">
                    Pastikan login menggunakan akun SMK <br />
                    {/* Tidak bisa login google SMK? <Link to="alt" className="text-button hover:text-teal-500 font-bold underline">klik di sini</Link> */}
                </p>

                <p
                    className="absolute bottom-100 md:buttom-5 text-center left-0 right-0 text-red-500 animate-bounce cursor-pointer"
                    onClick={() => navigate('/hasil')}
                >Lihat Hasil Pemilihan di sini <br /> v106</p>

            </div>
        </>
    )
}

export default Login; 