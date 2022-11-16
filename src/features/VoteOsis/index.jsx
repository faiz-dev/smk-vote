import React, {useEffect,useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const VotingOsis1 = () => {
    const [judulVoting, setJudul] = useState([])
    const [voting, setvoting] = useState([])
    const [simpan, setSimpan] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/calon/periode/4')
                .then((response) => response.data)
            setvoting(result)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const result2 = await axios.get('http://116.197.129.178:8083/api/periode/4')
                .then((response) => response.data)
            setJudul(result2)
        })()
    }, [])

    const pilihCalon = (id) => {
        setSimpan(id)
    }

    const goToSukses = () => {
        if (simpan==null){
            alert("Harus ada calon yang anda pilih")
        } else {
            navigate('/sukses')
        }
    }
    




    return(
        <div className="">
            <h1 className="font-bold text-center mt-5 text-3xl">{judulVoting.name}</h1>
            <p className="text-center mb-2">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
            <div className="flex-row md:flex">
                {voting.map(c => (
                    <img 
                        src={c.photo} 
                        key={c.id} 
                        className={`rounded-3xl pb-1 mx-auto border-4 ${c.isActive ? 'border-4 border-sky-500 ' : ' border-black'} bg-primary`}
                        onClick={() => pilihCalon(c.id)}
                        />
                ))}
            </div>
            <button 
                className="bg-button text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block" onClick={goToSukses}>Submit</button>
        </div>
    )
}

export default VotingOsis1