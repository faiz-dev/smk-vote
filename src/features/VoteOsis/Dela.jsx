import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const VotingOsis6 = () => {
    const navigate = useNavigate()
    const [voting, setVoting] = useState([])
    const [simpan, setSimpan] = useState(null) //null adalah nilai default dari simpan
    const {id} = useParams() // useparams mengambil data dari url

    useEffect(() => {
        (async () => {
            const result = await axios.get(`https://vote-backend.greenfield-26de5c7e.eastasia.azurecontainerapps.io/api/calon`)
                .then((response) => response.data)
            setVoting(result)
        })()
    }, [id])
    
    const cobaSimpan = (id) => {
        setSimpan(id)
    }

    const goToSukses = () =>{
        if (simpan===null){
            alert('harus ada calon yang anda pilih')
        } else {
            navigate('/sukses')
        }
        navigate('/sukses')
    }
    
    return(
        <div className="">
            
                <h1 className="font-bold text-center mt-5 text-3xl">PEMILIHAN</h1>
            
            <p className="text-center mb-2">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
            <div className="flex-row md:flex">
                {voting.map(c => (
                    <div>
                        <h2>{c.name}</h2>
                        <img 
                            src={c.photo} 
                            key={c.id}
                            onClick={() => cobaSimpan(c.id)}
                            className={`rounded-3xl pb-1 mx-auto border-4 ${simpan ? 'border-secondary ' : ''} bg-primary`}
                        />
                    </div>
                ))}
            </div>
            <button 
                className="bg-[url('https://dummyimage.com/172x45/7BA9AC/fff&text=+')] text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block" onClick={goToSukses}>Submit</button>
        </div>
    )
}

export default VotingOsis6