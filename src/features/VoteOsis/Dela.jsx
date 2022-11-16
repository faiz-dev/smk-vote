import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import calon1 from '../../assets/Calon1.png'
import { useParams } from "react-router-dom";

const VotingOsis6 = () => {
    const navigate = useNavigate()
    const [judulVoting, setJudul] = useState([])
    const [voting, setVoting] = useState([])
    const [simpan, setSimpan] = useState(null) //null adalah nilai default dari simpan

    useEffect(() => {
        (async () => {
            const result = await axios.get('http://116.197.129.178:8083/api/periode/4')
                .then((response) => response.data)
            setJudul(result)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const result = await axios.get(`http://116.197.129.178:8083/api/calon/periode/${id}`)
                .then((response) => response.data)
            setVoting(result)
        })()
    }, [])
    
    // useEffect( () => {
    //     fetch (`http://116.197.129.178:8083/api/periode ${id}`)
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //     setUser(data)
    //         })
    // }, [id])

    const cobaSimpan = (id) => {
        setSimpan(id)
    }

    const goToSukses = () =>{
        if (simpan===null){
            alert('harus ada calon yang anda pilih')
        } else {
            console.log(simpan)
        }
        //navigate('/sukses')
    }
    
    return(
        <div className="">
<<<<<<< HEAD
            <h1 className="font-bold text-center mt-5 text-3xl">{judulVoting.name}</h1>
=======
            <div>
                {JudulVoting.map(j => (
                    <h1>{j.name}</h1>
                ))}
            </div>
            <h1 className="font-bold text-center mt-5 text-3xl">{judulVoting}</h1>
>>>>>>> 7fd35ea9d142d6d14da5262f7f9501cc446b30de
            <p className="text-center mb-2">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
            <div className="flex-row md:flex">
                {voting.map(c => (
                    <img 
<<<<<<< HEAD
                        src={c.photo} 
                        key={c.id}
                        onClick={() => cobaSimpan(c.id)}
                        className={`rounded-3xl pb-1 mx-auto border border-4 ${c.isActive ? 'border-secondary ' : ''} bg-primary`}
=======
                        src={c.img} 
                        key={c.id} 
                        className={`rounded-3xl pb-1 mx-auto border border-4 ${c.selected ? 'border-secondary ' : ''} bg-primary`}
>>>>>>> 7fd35ea9d142d6d14da5262f7f9501cc446b30de
                        />
                ))}
            </div>
            <button 
                className="bg-[url('https://dummyimage.com/172x45/7BA9AC/fff&text=+')] text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block" onClick={goToSukses}>Submit</button>
        </div>
    )
}

export default VotingOsis6