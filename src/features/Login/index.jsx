import React from "react";
import { KKPrimaryButton } from "../../components/KKButton";
import {BsGoogle} from 'react-icons/bs'
import { Link, redirect } from "react-router-dom";

const Login = () => {
    const submit = () => {
        window.location.href = "/"
    }

    return (
        <>
            <div id="login" className="mt-20 text-center">
                <h1 className="text-center text-primary font-semibold text-3xl">Pilketos</h1>
                <p className="text-center">Gunakan hak pilihmu! <br />Login dengan akun email SMK</p>

                <div className="mt-10">
                    <KKPrimaryButton onClick={submit}> <BsGoogle size={13} />  Klik di sini untuk login</KKPrimaryButton>                   
                </div>

                <p className="fixed bottom-8 text-center left-0 right-0 text-[1rem]">
                    Tidak bisa login google SMK? <Link to="alt" className="text-primary font-bold underline">klik di sini</Link>
                </p>
            </div>
        </>
    )
}

export default Login; 