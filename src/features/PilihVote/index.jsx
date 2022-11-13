import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";
import Header from "../../components/Header";

const PilihVote = () => {
    const { token, url } = useContext(AuthContext)
    const [votes, setVotes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        (async() => {
            const p = await axios.get(`${url}/periode`)
                .then(res => res.data)
            setVotes(p)
        })()
    }, [])

    const votings = [
        {
            id: 1,
            title: 'Pilketos 2022',
            datetime: '2022-11-20 08:00:00',
            img: 'https://dummyimage.com/80x80/000/fff.jpg&&text=1',
        },
        {
            id: 2,
            title: 'Pemilihan Pradana Putri',
            datetime: '2022-11-20 08:00:00',
            img: 'https://dummyimage.com/80x80/000/fff.jpg&&text=2',
        },
        
        {
            id: 3,
            title: 'Pemilihan Pradana Putra',
            datetime: '2022-11-20 08:00:00',
            img: 'https://dummyimage.com/80x80/000/fff.jpg&&text=2',
        }
    ]
  
    const pilihVote = (id) => {
        console.log('Menuju voting',id)
        navigate('/vote/'+id)
    }

    return (
        <>
            <Header name='Alfian' />
            <p className="mt-4">Berikut daftar voting yang tersedia (tekan untuk mulai voting)</p>
            <div className="votings mt-4">
                {votes.map(v => (
                    <div className="card mb-3 h-[120px]" key={v.id} onClick={() => pilihVote(v.id)}>
                        <h2 className="text-[13px]">{v.name}</h2>
                        <p>{v.datetime}</p>
                        <p>{v.img}</p>
                    </div>
                ))}
                {votes.length > 0 ? '' : (
                    <div className="shadow-none text-center font-bold text-gray-500 mt-10 border border-dashed border-gray-600 py-5 rounded-lg">
                        Tidak ada Pemilihan aktif
                    </div>
                )}
            </div>
        </>
    )
}

export default PilihVote