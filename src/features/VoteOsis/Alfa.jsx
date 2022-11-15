import React, {useEffect, useState } from "react";
import axios from "axios";

const VotingOsis2 = () => {
    const [informasi, setInformasi] = useState([])
    useEffect(() => {
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/calon/periode/4')
                .then((Response) => Response.data)
            setInformasi(result)
        })()
    }, [])

    const [voting, setVoting] = useState([])
    useEffect(() =>{
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/periode/4')
                .then((Response)=> Response.data)
            setVoting(result)
        })()
    }, [])
    
    return(
        <div className="">
            <h1 className="font-bold text-center mt-5 text-3xl">{voting.name}</h1>
            <p className="text-center mb-2">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
            <div className="flex-row md:flex">
                {informasi.map(c => (
                    <img 
                        src={c.photo} 
                        key={c.id} 
                        className={`rounded-3xl pb-1 mx-auto border-4 ${c.isActive ? 'border-secondary ' : ''} bg-primary`}
                        />
                ))}
            </div>
            <button 
                className="bg-[url('https://dummyimage.com/172x45/7BA9AC/fff&text=+')] text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block">Submit</button>
        </div>
    )
}

export default VotingOsis2