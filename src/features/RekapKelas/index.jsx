import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import axios from 'axios';
import AuthContext from "../../AuthContext";
import { useMemo } from "react";
import { useState } from "react";
import { useRef } from "react";
import Swal from "sweetalert2";

const RekapKelas = () => {
    const {url} = useContext(AuthContext)
    const [dataKelas, setDataKelas] = useState([])
    const [dataVote, setDataVote] = useState([])
    const [listPeriode, setListPeriode] = useState([])
    const periodeId = 19
    const [selectedPeriode, setSelectedPeriode] = useState('')

    useEffect(() => {
        (async () => {
            const result = await axios.get(url+'/periode')
                    .then((response) => response.data)
            setListPeriode(result)
        })()
    }, [])

    useEffect(() => {
        (async() => {
            if (selectedPeriode == "") return;
            Swal.showLoading()
            const result = await axios.get(`${url}/vote/rekap-periode/${selectedPeriode}`)
                .then(res => res.data)
                .catch(err => {
                    console.log(err)
                })
            setDataKelas(result.dataGroup)
            setDataVote(result.dataGroupVotes)
            Swal.fire({
                text: "Loading data selesai",
                icon: 'success'
            })
        })()
    }, [selectedPeriode])
    
    const chunkArray = (arr, size) => {
        const result = []
        for(let i = 0; i < arr.length; i+= size) {
            result.push(arr.slice(i, i + size))
        }
        return result
    }

    const groupVote = useMemo(() => {
        // chunking
        // const dataChunk = chunkArray(dataKelas, 11)
        // console.log(dataChunk)
        const votes = dataKelas.map(dk => {
            const dv = dataVote.find(dv => dv.groupId == dk.groupId)
            return {
                ...dk,
                vcount: dv ? dv.count : 0
            }
        })
        return chunkArray(votes, 45)
    }, [dataVote])

    

    return (
        <>
            <h1>Rekap Pemilih Tiap Group</h1>
            <div>
                <p>Pilih Periode Pemilihan</p>
                <select onChange={(e) => setSelectedPeriode(e.target.value)} value={selectedPeriode} className="border border-dashed border-gray-500 px-5 py-2 mt-5 rounded">
                    <option value="">Pilih Periode</option>
                    {listPeriode.map(p => (
                        <option value={p.id} key={p.id}>{p.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-wrap">
                {groupVote.map(lgv => (
                    <div className="flex-1/2 px-10">
                        <table className="table table-bordered mt-10 w-full">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Kelas</th>
                                    <th>Jml Anggota</th>
                                    <th>Sudah Memilih</th>
                                    <th>Belum Memilih</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lgv.map((gv, idx) => (
                                    <tr key={idx} className={`${gv.groupMemberCount != gv.vcount ? '' : 'bg-green-200'}`}>
                                        <td>{idx+1}</td>
                                        <td>{gv.groupName}</td>
                                        <td>{gv.groupMemberCount}</td>
                                        <td>{gv.vcount}</td>
                                        <td>{gv.groupMemberCount - gv.vcount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> 
                    </div>
                ))}
            </div>
            {/* <table className="table table-bordered mt-10">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Kelas</th>
                        <th>Jml Anggota</th>
                        <th>Sudah Memilih</th>
                        <th>Belum Memilih</th>
                    </tr>
                </thead>
                <tbody>
                    {groupVote.map((gv, idx) => (
                        <tr key={idx} className={`${gv.groupMemberCount != gv.vcount ? 'bg-red-400' : 'bg-green-200'}`}>
                            <td>{idx+1}</td>
                            <td>{gv.groupName}</td>
                            <td>{gv.groupMemberCount}</td>
                            <td>{gv.vcount}</td>
                            <td>{gv.groupMemberCount - gv.vcount}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    )
}

export default RekapKelas