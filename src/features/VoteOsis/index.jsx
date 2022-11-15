import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import calon1 from '../../assets/Calon1.png'

const VotingOsis = () => {

    const [JudulVoting, setJudulVoting] = useState([])
    const [Voting, setVoting] = useState([])
    const navigate = useNavigate()
    const goToHasil = () => {
        navigate('/sukses')
    }


    useEffect(() => {
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/periode/4')
                .then((response) => response.data)
            setJudulVoting(result)
        })()
    }, [])

    
    useEffect(() => {
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/calon/periode/4')
                .then((response) => response.data)
            setVoting(result)
        })()
    }, [])

    return(
        <div className="">
            {JudulVoting.map(j =>(
                <h1
                className="font-bold text-center mt-5 mb-3 text-3xl">{j.name}</h1>
            ))}
            <p className="text-center mb-2 md:mb-5">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
            <div className="flex-row md:flex">
                {Voting.map(v => (
                    <img 
                        src={v.img} 
                        key={v.id} 
                        className={`rounded-3xl pb-1 mx-auto border border-4 ${c.selected ? 'border-secondary ' : ''} bg-primary`}
                        />
                ))}
            </div>
            <button 
                className="bg-button text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block" onClick={goToHasil}>Submit</button>
        </div>
    )
}

export default VotingOsis