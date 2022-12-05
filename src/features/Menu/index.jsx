import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import menu from './menu.jpg'
import { Route, Router, Routes } from "react-router-dom";
import Voting from "../Voting";
import { createBrowserRouter } from "react-router-dom";
import {  Outlet } from "react-router-dom";
import AuthContext from "../../AuthContext";
import moment from "moment"
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

const Menu = () => {
    // state, props, hooks
    const navigate = useNavigate()
    const [pemilihan, setPemilihan] = useState([])
    const [udahVote, setUdahVote] = useState([])
    const { url, token, group } = useContext(AuthContext)
    //const {id} = useParams()
    const {user, setUser} = useState(null)
    const [id, setId] = useState([])
    const [isLoading, setIsLoading] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get(url+'/periode')
                    .then((response) => response.data)
            // localStorage.setItem('periodes', JSON.stringify(result))
            setPemilihan(result)
            setIsLoading([...isLoading, true])
            
            // const savedPeriodes = localStorage.getItem('periodes')
            // if (!savedPeriodes) {
            //     const result = await axios.get(url+'/periode')
            //         .then((response) => response.data)
            //     localStorage.setItem('periodes', JSON.stringify(result))
            //     setPemilihan(result)
            //     setIsLoading([...isLoading, true])
            // } else {
            //     setPemilihan(JSON.parse(savedPeriodes))
            // }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const result = await axios.get(url+'/vote/periode-ids', {
                headers: { 
                    "authorization": 'bearer '+token
                }
            }).then(res => res.data)
            setUdahVote(result)
            setIsLoading([...isLoading, true])
        })()
    }, [])

    const goToVoting = (id) => {
        const periodeDipilih = pemilihan.find(p => p.id == id)
        const selisih = moment().diff(moment(periodeDipilih.waktuBerakhir))
        const cekUdahVote = udahVote.find(uv => uv == id)
        if (cekUdahVote) {
            // alert("Maaf, Anda sudah memilih")
            Swal.fire({text: "Anda sudah pernah memilih", confirmButtonColor: '#81A9B8'})
        } else if (selisih > 0) {
            // alert("Waktu memilih sudah berakhir")
            Swal.fire({text: "Waktu memilih sudah berakhir", confirmButtonColor: '#81A9B8'})
        } else {
            navigate(`/voting/${id}`)
        }
    }

    const ToHasil = () => {
        navigate('/hasil')
    }
    
    return (
        <>
            {isLoading.length == 2 ? (
                <Loading namaData="Pemilihan"/>
            ) : (
                
                <div className="mx-auto text-center p-3 max-w-[500px]">
                    <img src={menu} className="rounded-3xl py-25 md:col-span-2 md:w-full mb-10"/>
        
                    <div className="flex flex-col sm:flex-row gap-5 md:grid grid-cols-2 grid-rows-1 ">
                        {pemilihan.filter(p => {
                            if (!p.isActive) {
                                return false
                            } else if (p.groups == "") {
                                return true
                            } else {
                                const groups = p.groups.split(",")
                                if (groups.findIndex(g => g == group) == -1) {
                                    return false
                                } return true
                            }
                        }).length == 0 ? (
                            <div className="border border-dashed py-4 text-center border-gray-500 rounded rounded-lg font-bold text-gray-600">
                                Tidak ada Periode yang aktif saat ini
                            </div>
                        ): ''}
                        
                        {pemilihan.filter(p => {
                            if (!p.isActive) {
                                return false
                            } else if (p.groups == "") {
                                return true
                            } else {
                                const groups = p.groups.split(",")
                                if (groups.findIndex(g => g == group) == -1) {
                                    return false
                                } return true
                            }
                        }).map(p => (
                            <button 
                                key={p.id} 
                                className="bg-primary py-5 px-5 rounded-md text-left relative"
                                onClick={ () => goToVoting(p.id) }
                                >
                                {p.name}  <br />
                                <span className="text-[0.8em]">Berakhir pada: {moment(p.waktuBerakhir).format('D MMM YYYY')} | {moment(p.waktuBerakhir).format('H:m')}WIB</span>
                                
                                {
                                    udahVote.find(uv => uv == p.id) ? (
                                        <span className="inline-block absolute top-0 right-0 bg-yellow-300 rounded-tr rounded-bl px-1 text-[0.8em]">Sudah Memilih</span>
                                    ) : moment().diff(moment(p.waktuBerakhir)) > 0 ? (
                                        <span className="inline-block absolute top-0 right-0 bg-gray-300 rounded-tr rounded-bl px-1 text-[0.8em]">Waktu Berakhir</span>
                                    ) : (
                                        <span className="inline-block absolute top-0 right-0 bg-green-300 rounded-tr rounded-bl px-1 text-[0.8em]">Dibuka</span>
                                    )
                                }
                                
                            </button>
                        ))}
        
                        <button className="py-5 px-10 rounded-md bg-secondary text-white" onClick={ToHasil}>
                            Hasil Pemilihan
                        </button>
                    </div>
                    
                </div>   
            )}
        </> 
        
    )
}

export default Menu