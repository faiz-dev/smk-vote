import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "./AuthContext"

const AuthProvider = ({children, isProtected = false}) => {
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const setPresistedToken = (token) =>{
        setToken(token)
        localStorage.setItem('token', token)
    } 
    
    useEffect(() => {
        (async () => {
            if (email != "") {
                const login = await axios.post(`https://localhost:7153/api/Auth?email=${email}`)
                .then(res => {
                    return res.data
                })
                setToken(login.token)
            }
        })()
    }, [email])

    useEffect(() => {
        if(isProtected && token == '') {
            navigate('/login')
        }
    })
    console.log(token)

    return (
        <AuthContext.Provider value={{
            email, setEmail, name, token
        }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider