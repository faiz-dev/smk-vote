import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import menu from './menu.jpg'
import { Route, Router, Routes } from "react-router-dom";
import Voting from "../Voting";
import { createBrowserRouter } from "react-router-dom";
import {  Outlet } from "react-router-dom";

const Menu = () => {
    // state, props, hooks
    const navigate = useNavigate()
    const [pemilihan, setPemilihan] = useState([])
    //const {id} = useParams()
    const {user, setUser} = useState(null)
    const [id, setId] = useState([])


    useEffect(() => {
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/periode/')
                .then((response) => response.data)
            setPemilihan(result)
        })()
    }, [])

    const goToVoting = (id) => {
        setId(id)
        navigate(`/voting/${id}`)
    }

    const ToHasil = () => {
        navigate('/dev/hasil')
    }

    function ProfilePage() {
        // Get the userId param from the URL.
        let { setId } = useParams();
    }
      

    return (
        <div className="mx-auto text-center p-3 max-w-[500px]">
            <img src={menu} className="rounded-3xl py-25 md:col-span-2 md:w-full mb-10"/>

            <div className="flex flex-col sm:flex-row gap-5 md:grid grid-cols-2 grid-rows-1 ">
                
                {pemilihan.filter(v => v.isActive).map(p => (
                    <button 
                        key={p.id} 
                        className="bg-primary py-5 px-10 rounded-md"
                        onClick={ () => goToVoting(p.id) }
                        >
                        {p.name +' '+ p.waktuBerakhir} 
                    </button>
                ))}

                <button className="py-5 px-10 rounded-md bg-secondary text-white" onClick={ToHasil}>
                    Hasil Pemilihan
                </button>
            </div>
            
        </div>    
        
    )
}

export default Menu