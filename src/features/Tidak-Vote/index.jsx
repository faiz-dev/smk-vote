import React, {useState, useContext, useEffect} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";
import axios from "axios";

const NoVote = () => {
    const navigate = useNavigate()
    const [pemilihan, setPemilihan] = useState([])
    const { url, token, group } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            const result = await axios.get(url+'/periode')
                    .then((response) => response.data)
            setPemilihan(result)
        })()
    }, [])

    const ToDaftar = (id) => {
        navigate(`/daftar/${id}`)
    }

    return (
        <div>
            {pemilihan.filter(p => p.isActive)
                .map(p => (
                <button 
                    onClick={ () => ToDaftar(p.id) } 
                    key={p.id} 
                    className="bg-primary py-5 px-5 rounded-md flex my-5">
                        {p.name}
                </button>
            ))}
        </div>
    )
}

export default NoVote