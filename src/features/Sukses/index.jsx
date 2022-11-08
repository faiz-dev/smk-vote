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
            <h2 className="text-primary font-bold text-2xl">Selamat!</h2>
            <p>Pilihan anda telah tersimpan</p>
            <KKPrimaryButton className="fixed bottom-5 left-5 right-5" onClick={() => {navigate("/")}}>Kembali ke Awal</KKPrimaryButton>
        </div>
    )
}

export default Sukses