import axios from "axios";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../../AuthContext";

const GrafikHasil = ({judul, id, waktuBerakhir}) => {
    const {url, token} = useContext(AuthContext)
    const [data, setData] = useState([])

    useEffect ( () => {
        (async () => {
            const result = await axios.get(`${url}/Vote/periode/${id}`, {
                headers: {
                    "authorization": 'bearer '+token
                }
        })
            .then((response) => response.data)
            setData(result)
        })()
    },[])

    return (
        <div className="mt-10 lg:mx-10">
            <h1 className="ml-4 font-bold lg:ml-10 lg:text-3xl">
                {judul}
            </h1>

            <div 
                className="bg-div p-3 font-bold mx-auto rounded-md lg:mt-0 lg:w-full lg:h-fit lg:mx-0">
                    {moment().diff(moment(waktuBerakhir)) > 0 ? 
                        data.map(o => (
                            moment().diff(moment(o.calon.periode.waktuBerakhir)) < 0 ? (
                                <h2>Hasil dibuka pada {moment(o.calon.periode.waktuBerakhir).format('D MMM YYYY H:m')} WIB</h2>
                            ) :
                            (<div className="inline-flex" key={o.calon.noUrut}>
                                <div className=" rounded-full bg-bulat w-14 h-14 mb-3">
                                    <h1 className="font-bold text-center pt-2">{o.calon.noUrut}</h1>
                                </div>
                                <div className="pl-3">
                                    <h2 className="font-semibold">{o.calon.name}</h2>
                                        <progress className="w-52 h-6" value={(o.voteCount/o.totalCount*100).toFixed(2)} max={(o.totalCount/o.totalCount*100)}></progress>
                                </div>
                            </div>)))
                    : (
                        <h2 className="my-4">Hasil dibuka pada {moment(waktuBerakhir).format('D MMM YYYY H:m')} WIB</h2>
                    )}
                    
            </div>
        </div>
    )
}

export default GrafikHasil