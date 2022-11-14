import React from "react";
import { TbThumbUp } from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { KKPrimaryButton } from "../../components/KKButton";
import sukses from "./Sukses"

const Sukses = () => {
    const navigate = useNavigate()

    return (
        <div className="text-center">
            <div className="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-10 mb-4">
              <img src="{sukses}" alt="gambar"/>
            </div>
            <h1 className="text-cyan-400 font-bold text-2xl">TERIMAKASIH</h1>
            <p>Anda Telah Mengikuti Ini <br />Dengan Jujur</p>
            <KKPrimaryButton className=" bg-cyan-400 w-40 mt-10" onClick={() => {navigate("/")}}>Next</KKPrimaryButton>
        </div>
    )
}

export default Sukses