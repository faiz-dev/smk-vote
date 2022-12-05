import React, { useContext, useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import hasil from './hasil.jpg';
import AuthContext from "../../AuthContext";
import axios from "axios";
import moment from "moment/moment";
import GrafikHasil from "./GrafikHasil";

const HalHasil = () => {
    const navigate = useNavigate()
    const { url, token, group } = useContext(AuthContext)
    const [hasilOsis, setHasilOsis] = useState([])
    const [hasilPradana, setHasilPradana] = useState([])
    const [hasilPradani, setHasilPradani] = useState([])
    const { periodeId } = useParams()
    const [pemilihan, setPemilihan] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get(url+'/periode')
                    .then((response) => response.data)
            setPemilihan(result)
        })()
    }, [])

    const goToMenu = () => {
        navigate('/')
    }
    
    return (
        <div className="mx-auto pb-10 lg:grid grid-cols-3 grid-rows-3 ">
            <img src={hasil} alt="JPG" loading="lazy" className="col-span-3 mx-auto rounded-3xl cursor-move lg:h-96"/>

            {pemilihan.filter(p => p.isActive).map(p => (
                <GrafikHasil key={p.id} judul={p.name} id={p.id} waktuBerakhir={p.waktuBerakhir} />
            ))}
            
            <div className="text-center lg:col-span-3">
                <button 
                    className="bg-button mt-10 p-2 px-10 text-white rounded-xl lg:mt-0 lg:hover:bg-cyan-500 lg:w-52 lg:h-16 lg:text-2xl"
                    onClick={goToMenu}>
                    BACK
                </button>
            </div>
        </div>
    )
}

export default HalHasil