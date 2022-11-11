import { useContext } from "react"
import AuthContext from "./AuthContext"

const useAuthContext = () => {
    const ctx = useContext(AuthContext)
    return ctx
}

export default useAuthContext