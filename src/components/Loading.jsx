import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Loading = ({namaData = ""}) => {
    return (
        <div className="h-screen text-center text-2xl">
            <AiOutlineLoading3Quarters size={20} className="animate-spin mx-auto mt-[100px] mb-5" />
            Sedang memuat data {namaData}
        </div>
    )
}

export default Loading