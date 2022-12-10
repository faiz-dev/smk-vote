import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "./AuthContext"

const AuthProvider = ({children, isProtected = false}) => {
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const url = 'https://vote-backend-103.greenfield-26de5c7e.eastasia.azurecontainerapps.io/api'
    // const url = 'https://localhost:49157/api'
    const navigate = useNavigate()

    const setPresistedToken = (token) =>{
        setToken(token)
        localStorage.setItem('token', token)
    } 

    useEffect(() => {
        (async () => {
            if (email != "") {
                const login = await axios.post(`${url}/Auth?email=${email}`)
                .then(res => {
                    return res.data
                })
                setToken(login.token)
                setGroup(login.groupId)
            }
        })()
    }, [email])

    useEffect(() => {
        if(isProtected && token == '') {
            navigate('/login')
        }
    })

    return (
        <AuthContext.Provider value={{
            email, setEmail, name, token, url, group
        }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider