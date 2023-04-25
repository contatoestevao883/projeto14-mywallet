import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [token, setToken] = useState(undefined)

    const navigate = useNavigate()

    function signUp(e){
        e.preventDefault()
        const body = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        const promise = axios.post("http://localhost:5000/sign-up", body)
        promise.then((response) => {
            console.log(response.data)
            navigate("/")
        })
        promise.catch((error) => {
            console.log(error)
            alert(`Erro: ${error.response.data.message}`)
        })
    }

    function signIn(e){
        e.preventDefault()
        const body = {
            email: email,
            password: password
        }
        const promise = axios.post("http://localhost:5000/sign-in", body)
        promise.then((response) => {
            setToken(response.data.token)
            console.log(response.data)
            navigate("/home")
        })
        promise.catch((error) => {
            console.log(error.response.data)
            alert(`Erro: ${error.response.data}`)
        })
    }
    return (
        <AuthContext.Provider value = {{ 
        email, password, name, confirmPassword, token,
        setEmail, setPassword, setName, setConfirmPassword, setToken,
        signUp, signIn
        }}>
        {children}
        </AuthContext.Provider>
    )
}     