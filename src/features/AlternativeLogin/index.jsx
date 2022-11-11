import React, { useContext } from "react";
import { KKPrimaryButton } from "../../components/KKButton";
import {RiLoginCircleLine} from 'react-icons/ri'
import KKInput from "../../components/KKInputs";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";

const AlternativeLogin = () => {
    const [email, setEmail] = useState("")
    const [loginCode, setLoginCode] = useState("")
    const {token} = useContext(AuthContext)

    const submit = () => {
        if (email == '' || loginCode == '') {
            alert("Masukkan data dengan lengkap dan benar!")
        }
    }
    return (
        <>
            <div id="alternativeLogin" className="mt-20 text-center">
                <h1 className="text-center text-primary font-semibold text-3xl">Pilketos    </h1>
                <p className="text-center">Gunakan hak pilihmu! <br />Login dengan <span className="text-primary underline">akun email SMK dan Kode Akses dari petugas</span></p>
                <p>{token}</p>
                <div className="mt-10 mx-5">
                    <KKInput type={'email'} 
                        label="Email SMK Anda" 
                        value={email} 
                        onChange={setEmail} />

                    <KKInput type={'password'} 
                        label="Kode Akses" 
                        value={email} 
                        onChange={setEmail} />
                    <br />
                    <KKPrimaryButton isBlock={true} onClick={() => setEmail1('amin')}> <RiLoginCircleLine size={15} />Kirim</KKPrimaryButton>                   
                </div>

                <p className="fixed bottom-8 text-center left-0 right-0 text-[1rem]">
                    ingin ke halaman Login normal? <Link to=".."  relative="path" className="text-primary font-bold underline">klik di sini</Link>
                </p>
            </div>
        </>
    )
}

export default AlternativeLogin; 