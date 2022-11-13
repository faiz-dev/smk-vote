import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Choice from "./Choice";
import { IoArrowBack } from 'react-icons/io5'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { KKPrimaryButton, KKSecondaryButton } from "../../components/KKButton";
import AuthContext from "../../AuthContext";

const Voting = ({params}) => {
    const {id} = useParams()
    const {url} = useContext(AuthContext);  
    const [selected, setSelected] = useState(0)
    const navigate = useNavigate()
    const [calon, setCalon] = useState([])

    useEffect(() => {
        (async () => {
            const calons = axios.get()
        })()
    }, [id])

    const dataVote = {
        choices: [
            {
                id: 1,
                name: 'Alfian Faiz & Asyraf Salim Ibrahim',
                img: 'https://dummyimage.com/80x80/000/fff.jpg&&text=1',
                noUrut: '01',
                calonKetua: 'Alfian Faiz',
                calonWakil: 'Asyraf Salim Ibrahim'
            },
            {
                id: 2,
                name: 'Vidiyaningsih & Asyraf Salim Ibrahim',
                img: 'https://dummyimage.com/80x80/000/fff.jpg&&text=2',
                noUrut: '01',
                calonKetua: 'Vidiyaningsih',
                calonWakil: 'Asyraf Salim Ibrahim'
            }
        ]
    }

    const submit = () => {
        navigate('success')
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-5">
                <IoArrowBack size={20} onClick={() => { navigate('..')}} />
                <h1 className=""> Pemilihan Ketua Osis</h1>
            </div>

            {dataVote.choices.map(c => (
                <Choice data={c} key={c.id} selected={selected} onClick={setSelected} />
            ))}

            {selected == 0 ? '' : (
                <div className="card text-center h-full flex flex-col">
                    <div className="h-full">
                        <span>Anda memilih</span>
                        <h3>Calon No. 0{selected}</h3>
                        <img src={`https://dummyimage.com/250x200/000/fff.jpg&&text=${selected}`} className="w-[250px] mx-auto" />
                    </div>

                    <div className="w-full flex gap-2">
                        <KKSecondaryButton isBlock={true} onClick={() => setSelected(0)}>Batal</KKSecondaryButton>
                        <KKPrimaryButton isBlock={true} onClick={() => submit()}>Konfirmasi</KKPrimaryButton>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Voting