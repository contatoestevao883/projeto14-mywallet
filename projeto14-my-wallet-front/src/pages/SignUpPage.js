import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function SignUpPage() {
  const { name, email, password, confirmPassword, 
          setName, setEmail, setPassword, setConfirmPassword,
          signUp
        } = useContext(AuthContext)
  return (
    <SingUpContainer>
      <form onSubmit={signUp}>
        <MyWalletLogo />
        <input placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} required/>
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)} required/>
        <button>Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
