import React from "react";
import { AiOutlineGoogle } from 'react-icons/ai';

const KPULogin = () => {
    return (
        <div className="text-center mx-auto md:rounded-2xl md:mt-20 md:bg-cyan-200 md:p-14 md:w-80">
            <img src="src/features/KPULogin/logo.png" alt="Logo" className="mx-auto mt-20 w-72 md:mt-0"/>
            <h1 className=" my-16 font-bold text-3xl">LOGIN</h1>
            <button className="inline-flex bg-cyan-400 p-3 rounded-3xl"><AiOutlineGoogle className="mt-1 mr-1"/>Ketuk untuk Login</button>
        </div>
    )
}

export default KPULogin
