import React, { useState } from 'react'
import { Container, Background, Info, Confirm, Cancel } from './Style'
import 'react-datepicker/dist/react-datepicker.css'

function Popup({ data, save, trigger, setTrigger }) {

  const [name, setName] = useState(data.clientData.name)
  const [cpf, setCPF] = useState(data.clientData.cpf)
  const [celphone, setCelphone] = useState(data.clientData.number)
  const [address, setAddress] = useState(data.clientData.address)
  const [email, setEmail] = useState(data.clientData.email)

  function done (operation) {
    if (operation === 'abort') {
      setName(data.clientData.name)
      setCPF(data.clientData.cpf)
      setCelphone(data.clientData.number)
      setAddress(data.clientData.address)
      setEmail(data.clientData.email)
    } else {
      const clientData = {
        "name": name,
        "cpf": cpf,
        "number": celphone,
        "address": address,
        "email": email
      }
      save('', clientData, '')
    }
    setTrigger()
  }

  return trigger && (
    <Background>
      <Container>
        <h1>Editando dados do cliente</h1>
        <Cancel onClick={() => done('abort')}>Cancelar</Cancel>
        <Info big>
          <h3 className='title'>Nome do cliente</h3>
          <input onChange={(e) => setName(e.target.value)} value={name} className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>CPF</h3>
          <input onChange={(e) => setCPF(e.target.value)} value={cpf} className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Celular</h3>
          <input onChange={(e) => setCelphone(e.target.value)} value={celphone} className='input' />
        </Info>
        <Info big>
          <h3 className='title'>Endereço</h3>
          <input onChange={(e) => setAddress(e.target.value)} value={address} className='input' type="text" />
        </Info>
        <Info big>
          <h3 className='title'>E-mail</h3>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='input' type="text" />
        </Info>
        <Confirm
          onClick={() => done()}>Confirmar</Confirm>
      </Container>
    </Background>
  )
}

export default Popup