import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AuthContext from "../../AuthContext";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";

const VotingOsis6 = () => {
    const navigate = useNavigate()
    const { url, token } = useContext(AuthContext)
    const [periode, setPeriode] = useState({})
    const [voting, setVoting] = useState([])
    const [simpan, setSimpan] = useState(null) //null adalah nilai default dari simpan
    const [isLoadingCandidate, setIsLoadingCandidate] = useState(true)
    const { periodeId } = useParams() // useparams mengambil data dari url

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${url}/calon/periode/${periodeId}`, {
                headers: {
                    "authorization": 'bearer '+token
                }
            })
                .then((response) => response.data)
            setVoting(result)
        })()
    }, [periodeId])

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${url}/periode/${periodeId}`)
                .then(res => {
                    setIsLoadingCandidate(false)
                    return res.data
                })
            setPeriode(result)
        })()
    }, [periodeId])
    
    const cobaSimpan = (id) => {
        setSimpan(id)
    }

    const goToSukses = async () =>{
        if (simpan===null){
            // alert('harus ada calon yang anda pilih')
            Swal.fire({text: "Harus ada calon yang anda pilih", confirmButtonColor: '#81A9B8'})
        } else {
            console.log(`kita kirimkan data: pilihanId ${simpan} dan periodeId ${periodeId}`)
            await sendVote()
            .then(res => {
                    navigate('/sukses')
                })
            .catch(err => {
                alert("terjadi kesalahan, pilihan anda tidak tersimpan")
            })
        }
    }

    const sendVote = async () => {
        const result = await axios.post(`${url}/vote`, {
                        pilihanId: simpan, 
                        periodeId: periodeId
                    }, {
                        headers: {
                            "authorization": 'bearer '+token
                        }
                    }).then(res => res.data)
                    .catch(err => {
                        throw err
                    })
        return result
    }
    
    return(
        <>
            {
                isLoadingCandidate ? (
                    <Loading namaData="Kandidat" />
                ) : (
                    <div className="">
                        <h1 className="font-bold text-center mt-5 text-3xl">{periode.name}</h1>
                        <p className="text-center mb-2">Klik gambar kandidat pilihan anda <br /> untuk memberi voting</p>
                        <div className="flex-row md:flex">
                            {voting.length == 0 ? (
                                <div className="rounded mx-auto text-center py-5 border border-dashed border-gray-500">
                                    Tidak ada calon dalam database
                                </div>
                            ) : "" }
                            {voting.map(c => (
                                <div key={c.id} className="mx-auto">
                                    <img 
                                        src={c.photo} 
                                        onClick={() => cobaSimpan(c.id)}
                                        className={`rounded-3xl pb-1 mx-auto border-4 ${simpan == c.id ? 'border-secondary ' : ''} bg-primary`}
                                    />
                                </div>
                            ))}
                        </div>
                        {voting.length > 0 ? (
                            <button 
                                className="bg-[url('https://dummyimage.com/172x45/7BA9AC/fff&text=+')] text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block" 
                                onClick={goToSukses}>Kirim</button>
                        ): (
                            <button 
                                className="bg-[url('https://dummyimage.com/172x45/7BA9AC/fff&text=+')] text-white mt-5 mx-auto px-14 py-3 rounded-xl md:display: block" 
                                onClick={() => navigate('/')}>Kembali</button>
                        )}
                    </div>
                )
            }
        </>
        
    )
}

export default VotingOsis6