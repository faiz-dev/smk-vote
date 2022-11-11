import React, { useContext } from "react";
import AuthContext from "../../AuthContext";
import Header from "../../components/Header";

const PilihVote = () => {
    const { token } = useContext(AuthContext)
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
        window.location.href = `./vote/${id}`
    }

    return (
        <>
            <Header name='Alfian' />
            <p className="mt-4">Berikut daftar voting yang tersedia (tekan untuk mulai voting) {token}</p>
            <div className="votings mt-4">
                {votings.map(v => (
                    <div className="card mb-3 h-[120px]" key={v.id} onClick={() => pilihVote(v.id)}>
                        <h2 className="text-[13px]">{v.title}</h2>
                        <p>{v.datetime}</p>
                        <p>{v.img}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PilihVote