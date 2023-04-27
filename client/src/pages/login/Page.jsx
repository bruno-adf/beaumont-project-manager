import React from 'react'
import { Title, Container, Subtitle, LoginButton, ForgotPswd, Input } from './Style'
import { useNavigate } from 'react-router-dom'

function Page() {

  function login (e) {
    return 
  }

  let navigate = useNavigate()

  return (
    <Container>
        <Title>Beaumont</Title>
        <Subtitle>Ambientes planejados</Subtitle>
        <Input type="text" placeholder='Login'/>
        <Input type="password" placeholder='Senha'/>
        <LoginButton onClick={() => navigate('/projects')}>Entrar</LoginButton>
        <ForgotPswd>Esqueci a senha</ForgotPswd>
    </Container>
  )
}

export default Page