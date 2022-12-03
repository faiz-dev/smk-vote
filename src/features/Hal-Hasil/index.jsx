import React, { useContext, useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import hasil from './hasil.jpg';
import AuthContext from "../../AuthContext";
import axios from "axios";

const HalHasil = () => {
    const navigate = useNavigate()
    const { url, token, group } = useContext(AuthContext)
    const [hasilOsis, setHasilOsis] = useState([])
    const [hasilPradana, setHasilPradana] = useState([])
    const [hasilPradani, setHasilPradani] = useState([])
    const { periodeId } = useParams()

    useEffect ( () => {
        (async () => {
            const result = await axios.get(`${url}/Vote/periode/1`, {
                headers: {
                    "authorization": 'bearer '+token
                }
        })
            .then((response) => response.data)
        setHasilOsis(result)
        })()
    },[])

    useEffect ( () => {
        (async () => {
            const result = await axios.get(`${url}/Vote/periode/2`, {
                headers: {
                    "authorization": 'bearer '+token
                }
        })
            .then((response) => response.data)
        setHasilPradana(result)
        })()
    },[])

    useEffect ( () => {
        (async () => {
            const result = await axios.get(`${url}/Vote/periode/3`, {
                headers: {
                    "authorization": 'bearer '+token
                }
        })
            .then((response) => response.data)
        setHasilPradani(result)
        })()
    },[])

    const goToMenu = () => {
        navigate('/')
    }
    
    return (
        <div className="mx-auto pb-10 lg:grid grid-cols-3 grid-rows-3 ">
            <img src={hasil} alt="JPG" loading="lazy" className="col-span-3 mx-auto rounded-3xl cursor-move lg:h-96"/>

            <div className="mt-10 lg:mx-10">
                <h1 className="ml-4 font-bold lg:ml-10 lg:text-3xl">
                    OSIS
                </h1>

                <div 
                    className="bg-div p-3 font-bold mx-auto rounded-3xl lg:mt-0 lg:w-full lg:h-fit lg:mx-0">
                        {hasilOsis.map(o => (
                            <div className="inline-flex">
                                <div className=" rounded-full bg-bulat w-14 h-14 mb-3">
                                    <h1 className="font-bold text-center pt-2">{o.calon.noUrut}</h1>
                                </div>
                                <div className="pl-3">
                                    <h2 className="font-semibold">{o.calon.name}</h2>
                                        <progress className="w-52 h-6" value={(o.voteCount/o.totalCount*100).toFixed(2)} max={(o.totalCount/o.totalCount*100)}></progress>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="mt-10 lg:mx-10">
                <h1 className="ml-4 font-bold lg:ml-10 lg:text-3xl">
                    PRADANA PUTRA
                </h1>

                <div 
                    className="bg-div p-3 font-bold mx-auto rounded-3xl lg:mt-0 lg:w-full lg:h-fit lg:mx-0">
                        {hasilPradana.map(x => (
                            <div className="inline-flex">
                                <div className=" rounded-full bg-bulat w-14 h-14 mb-3">
                                    <h1 className="font-bold text-center pt-2">{x.calon.noUrut}</h1>
                                </div>
                                <div className="pl-3">
                                    <h2 className="font-semibold">{x.calon.name}</h2>
                                        <progress className="w-52 h-6" value={(x.voteCount/x.totalCount*100).toFixed(2)} max={(x.totalCount/x.totalCount*100)}></progress>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 lg:mx-10">
                    <h1 className="ml-4 font-bold lg:ml-10 lg:text-3xl">
                        PRADANI PUTRI
                    </h1>

                    <div 
                        className="bg-div p-3 font-bold mx-auto rounded-3xl lg:mt-0 lg:w-full lg:h-fit lg:mx-0">
                            {hasilPradani.map(y => (
                                <div className="inline-flex">
                                    <div className=" rounded-full bg-bulat w-14 h-14 mb-3">
                                        <h1 className="font-bold text-center pt-2">{y.calon.noUrut}</h1>
                                    </div>
                                    <div className="pl-3">
                                        <h2 className="font-semibold">{y.calon.name}</h2>
                                            <progress className="w-52 h-6" value={(y.voteCount/y.totalCount*100).toFixed(2)} max={(y.totalCount/y.totalCount*100)}></progress>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            
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