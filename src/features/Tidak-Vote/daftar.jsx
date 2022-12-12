import axios from "axios";
import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import { Select } from "./index2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";
import { useParams } from "react-router-dom";

const Daftar = () => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')
    const [userSearch, setUserSearch] = useState(null)
    const [groups, setGroups] = useState([]) 
    const [selectedGroup, setSelectedGroup] = useState("")
    const [usersGroup, setUsersGroup] = useState([])
    const roles = ['USER', 'ADMIN', 'GURU', 'SISWA']
    const { url, token, group } = useContext(AuthContext)
    const { id } = useParams()
    const [periode, setPeriode] = useState({})

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${url}/periode/${id}`)
                     .then(res => {
                         return res.data
                     })
                     setPeriode(result)
                 })()
             }, [id])

    useEffect(() => {
        (async () => {
            const groups = await axios.get(`${url}/group`)
                .then(res => res.data)
            setGroups(groups)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if(selectedGroup != ""){
                const result = await axios.get(`${url}/vote/voted/${id}/${selectedGroup}`)
                    .then(res => res.data)
                setUsersGroup(result.allUsers.filter(u => {
                    console.log('userid', u.id)
                    const cek = result.userVoted.findIndex(uv => {
                        return uv.userId == u.id
                    })
                    console.log('cek', cek)
                    return cek < 0
                } ))
            }
        })()
    }, [selectedGroup])

    return (
        <div className="flex gap-5">
            <div className="w-full mb-5 p-4">
                <h1 className="font-extrabold">Daftar nama yang tidak vote pada periode : {`${periode.name}`}</h1>
                <Select 
                    label={'Pilih Grup'}
                    showlabel={false}
                    className="w-1/2"
                    onChangeValue={setSelectedGroup}
                    value={selectedGroup}
                    options={groups ? groups.map(g => ({value: g.id, text: g.name})) : []}
                />
                {usersGroup == null ? "" : (<div className="card">
                        <div className="card-body">
                            <table className="table w-full">
                                <thead className="bg-primary">
                                    <tr className="text-left">
                                        <th className="font-extrabold text-center">No</th>
                                        <th className="font-extrabold">Nama</th>
                                        <th className="font-extrabold">Role</th>
                                        <th className="font-extrabold">Group</th>
                                        <th className="font-extrabold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersGroup.map((u, i) => (
                                        <tr>
                                            <td className="text-center">{i+1}</td>
                                            <td>{u.name}</td>
                                            <td>{roles[u.role]}</td>
                                            <td></td>
                                            <td>Tidak Memilih</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>)}
            </div>
        </div>
        
    )
}

export default Daftar