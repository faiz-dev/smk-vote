import React from "react";
import { TbThumbUp } from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { KKPrimaryButton } from "../../components/KKButton";

const Sukses = () => {
    const navigate = useNavigate()

    return (
        <div className="text-center">
            <div className="w-[100px] h-[100px] rounded-full bg-primary flex items-center justify-center text-white mx-auto mt-10 mb-4">
                <TbThumbUp size={60} />
            </div>
            <h1 className="text-primary font-bold text-2xl">TERIMAKASIH</h1>
            <p>Anda Telah Mengikuti Ini <br />Dengan Jujur</p>
            <KKPrimaryButton className="w-40 mt-10" onClick={() => {navigate("/")}}>Next</KKPrimaryButton>
        </div>
    )
}

export default Sukses